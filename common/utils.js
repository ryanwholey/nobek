const Promise = require('bluebird');

const timeLog = (string) => {
    let date = new Date();
    let time = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ]
    .map((unit) => unit.length === 1 ? `0${unit}` : unit);
    let [hours, minutes, seconds] = time;

    console.log(`[${hours}:${minutes}:${seconds}] ${string}`);
}

module.exports = {
    timeLog
}
