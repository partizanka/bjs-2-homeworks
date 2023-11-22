class AlarmClock {
    constructor(alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }


    addClock(callback, time, canCall = true) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }

        this.alarmCollection.push({ callback, time, canCall });
    }

    removeClock(time) {
        if (time) {
            return this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
        }
    }

    getCurrentFormattedTime() {
        const date = new Date();
        const now = `${date.getHours()}:${date.getMinutes()}`;
        return now;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(clock => {
                if (this.getCurrentFormattedTime() === clock.time && clock.canCall === true) {
                    clock.canCall === false;
                    callback();
                }
            })
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval();
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(clock => console.log(clock.canCall = true));
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    new AlarmClock();
}