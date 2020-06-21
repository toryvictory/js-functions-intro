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