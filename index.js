/*
1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:

    isAdult(20); // true
    isAdult(4); // false
 */

/**
 * The function checks if the User is adult.
 * @param age User's age
 * @returns {boolean}
 */
function isAdult(age) {
    return (age > 18);
};

console.log('isAdult(20) = ' + isAdult(20));
console.log('isAdult(4) = ' + isAdult(4));

/*2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:

    checkMultiplicity(25, 5) // true
    checkMultiplicity(15, 3) // true
    checkMultiplicity(15, 5) // true
    checkMultiplicity(15, 4) // false
    
 */

/**
 * Checks whether the divisor is a multiple of the dividend.
 * @param dividend
 * @param divisor
 * @returns {boolean}
 */
function checkMultiplicity(dividend, divisor) {
    return dividend % divisor === 0;
}

console.log('checkMultiplicity(25, 5) = ' + checkMultiplicity(25, 5));
console.log('checkMultiplicity(15, 3) = ' + checkMultiplicity(15, 3));
console.log('checkMultiplicity(15, 5) = ' + checkMultiplicity(15, 5));
console.log('checkMultiplicity(15, 4) = ' + checkMultiplicity(15, 4));
