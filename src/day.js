import {HoursBlocks} from './hours_blocks.js';


const daysNames = {
    MONDAY: "Monday",
    TUESDAY: "Tuesday",
    WEDNESDAY: "Wednesday",
    THURSDAY: "Thursday",
    FRIDAY: "Friday",
    SATURDAY: "Saturday",
    SUNDAY: "Sunday"
}

class Day {
    constructor(dayName, startingTime, endingTime) {
        this._dayName = daysNames[dayName];
        this._hourBlocks = new HoursBlocks(startingTime, endingTime);
    }

    addTodayTask(task, startingTime, endingTime) {
        return this.hourBlocks.addTask(task, startingTime, endingTime)
    }

    clearTodayHoursBlock(startingTime, endingTime) {
        this.hourBlocks.clearHourBlocks(startingTime, endingTime)
    }

    get todayTasks() {
        return this._hourBlocks.blockTasks
    }

    get hourBlocks() {
        return this._hourBlocks
    }
    get dayName() {
        return this._dayName
    }
}

export {Day};