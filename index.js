// Code your solution in this file!

const drivers = [];

const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => function(fare){
    return fare * int;
}

const fareDoubler = function fareDoubler(fare){
    return fare * 2;
}

const fareTripler = function fareTripler(fare){
    return fare * 3;
}

const selectDifferentDrivers = function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}