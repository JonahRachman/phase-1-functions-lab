const HQ = 42

function distanceFromHqInBlocks(street) {
    let distance = Math.abs(street - HQ);
    return distance;
}

function distanceFromHqInFeet(block) {
    let feet = distanceFromHqInBlocks(block) * 264;
    return feet;
}

function distanceTravelledInFeet(num1, num2) {
    let feetTravelled = Math.abs((num2 - num1)) * 264;
    return feetTravelled;
}

function calculatesFarePrice(num1, num2) {
    let feetTravelled = distanceTravelledInFeet(num1, num2);
    switch (true) {
        case feetTravelled < 400:
            return 0;
            break;
        case feetTravelled <= 2000:
            return (feetTravelled - 400) * 0.02;
            break;
        case feetTravelled <=2500:
            return 25
            break;
        default:
            return 'cannot travel that far';
    }
}
