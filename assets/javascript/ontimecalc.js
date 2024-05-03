function onTimeCalc(numberOfDays, pathLength) {
    if ((pathLength === 2 && numberOfDays <= 2) ||
        (pathLength === 7 && numberOfDays <= 7) ||
        (pathLength === 27 && numberOfDays <= 27)) {
        return true; // Character is on time
    } else {
        return false; // Character is not on time
    }
}