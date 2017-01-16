const env = require('../../.env');
const exec = require('child_process').exec;
const Promise = require('bluebird');
const Sequelize = require('sequelize');

const timeLog = require('../../common/utils').timeLog;

let failedError;
let test_db;

new Promise((resolve, reject) => {
    exec(`mysql -u root <<< "CREATE DATABASE IF NOT EXISTS ${env.TEST_DB} DEFAULT CHARACTER SET utf8"`, (err, stdout, stderr) => {
        if (err) {
            timeLog(stderr);
            reject(err) 
        }
        resolve();
    });
})
.then(() => {
    test_db = new Sequelize(env.TEST_DB, env.USER, env.PASS);
})
.then(() => {
    return new Promise((resolve, reject) => {
        timeLog(`starting migrations for ${env.TEST_DB}`);
        exec(`${env.NODE_MODULES_BIN}/sequelize db:migrate --env test`, (err, stdout, stderr) => {
            timeLog('building test db.....');
            if (err) {
                timeLog(stderr);
                reject(err);
            }
            timeLog(`stdout: ${stdout}`);
            resolve();
        });
    })
    .then(() => timeLog('migrations completed\n'));
})
.then(() => {
    return new Promise((resolve, reject) => {
        exec('NODE_ENV=test npm run jasmineTestDB', (err, stdout, stderr) => {
            if (err) {
                timeLog(`error: ${err}`);
            }
            timeLog(stdout)
            let report = stdout.match(/.*[0-9]+\sspecs,\s.*/);
            let error = stdout.match(/'testDB' errored after/);

            if (report && Array.isArray(report)) {
                failedError = report[0].match(/[0-9]+\sfailure/)[0] !== '0 failure';
            }
            if (!failedError) {
                failedError = !!stdout.match(/'testDB' errored after/)
            }
            resolve();
        });
    });
})
.finally(() => {
    return new Promise((resolve, reject) => {
        timeLog('finding all tables...')
        exec(`mysql -u root -e "USE ${env.TEST_DB}; SHOW TABLES" | awk '{print $1}' | grep -v Tables_in`, (err, stdout, stderr) => {
            if (err) {
                reject(err) ;
            } 
            timeLog('tables found');
            resolve(stdout.split('\n').filter((table) => !!table));
        });
    })
    .then((tables) => {
        tables.map((table) => new Promise((resolve, reject) => {
            timeLog(`dropping ${table} from ${env.TEST_DB}`);
            exec(`mysql -u root <<< "USE ${env.TEST_DB}; DROP TABLE ${table}"`, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                } 
                resolve();
            });
        }))
    });
})
.finally(() => {
    return new Promise((resolve, reject) => {
        exec(`rm -rf ${env.TEMP_DB_TEST_DIR}`, (err, stdout, stderr) => {
            resolve()
        });
    });
})
.finally(() => {
    console.log('################################################');
    timeLog('test database teardown complete');
    if (failedError) {
        timeLog('Test failures found...');
        timeLog('throwing failure...');
        process.exit(1);
    }
})
.catch((err) => {
    timeLog(`error: ${err}`);
    process.exit(1);
});


