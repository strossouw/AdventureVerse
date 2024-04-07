// Function to check if the character is on time based on the number of days and the path length
function isOnTime(numberOfDays, pathLength) {
    if ((numberOfDays >= 1 && numberOfDays <= 10 && pathLength === "short") ||
        (numberOfDays >= 11 && numberOfDays <= 20 && pathLength === "medium") ||
        (numberOfDays >= 21 && numberOfDays <= 30 && pathLength === "long")) {
        return true; // Character is on time
    } else {
        return false; // Character is not on time
    }
}

// Function to check if the character is late based on the number of days and the path length
function isLate(numberOfDays, pathLength) {
    if (numberOfDays <= 10 && pathLength === "long") {
        return true; // Character is late
    } else {
        return false; // Character is not late
    }
}

// Function to check if the character is early based on the number of days and the path length
function isEarly(numberOfDays, pathLength) {
    if ((numberOfDays > 10 && numberOfDays <= 20 && pathLength === "short") ||
        (numberOfDays > 20 && pathLength === "medium") ||
        (numberOfDays > 30)) {
        return true; // Character is early
    } else {
        return false; // Character is not early
    }
}