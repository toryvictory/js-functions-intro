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

/* 3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
 */

/**
 * Checks wheather it is possible to create a triangle with sides of the given lengths.
 * @param lengthSideA
 * @param lengthSideB
 * @param lengthSideC
 * @returns {boolean}
 */
function isTriangle(lengthSideA, lengthSideB, lengthSideC) {
    return lengthSideA + lengthSideB > lengthSideC && lengthSideB + lengthSideC > lengthSideA && lengthSideA + lengthSideC > lengthSideB;
}

console.log('isTriangle(15, 4, 9) = ' + isTriangle(15, 4, 9));
console.log('isTriangle(26, 28, 30) = ' + isTriangle(26, 28, 30));

/* 4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника
 */

/**
 * Calculates the area of a rhombus with its 2 diagonals given.
 * @param diagonalA Diagonal A of a rhombus
 * @param diagonalB Diagonal B of a rhombus
 * @returns {number} Area of a rhombus
 */
function rhombusArea(lengthDiagonalA, lengthDiagonalB) {
    return (lengthDiagonalA * lengthDiagonalB) / 2;
}

/**
 * Calculates the full cylinder surface area with given radius of the base of the cylinder and height of the cylinder.
 * @param cylinderBaseRadius The radius of the base of the cylinder
 * @param cylinderHeight The height of the cylinder
 * @returns {number} Full cylinder surface area
 */
function cylinderSurfaceArea(cylinderBaseRadius, cylinderHeight) {
    return 2 * Math.PI * cylinderBaseRadius * (cylinderHeight + cylinderBaseRadius);
}

/**
 * Calculates the area of a triangle given the length of the base of the triangle and the height of the triangle.
 * @param lengthTriangleBase Length of the base of the triangle
 * @param triangleHeight Height of the triangle
 * @returns {number} Area of the triangle
 */
function triangleArea(lengthTriangleBase, triangleHeight) {
    return (lengthTriangleBase * triangleHeight) / 2;
}

/**
 * Calculates the area of a rectangle given the lengths of its sizes.
 * @param lengthSideA Length of the side A of the rectangle
 * @param lengthSideB Length of the side B of the rectangle
 * @returns {number} Area of the rectangle
 */
function rectangleArea(lengthSideA, lengthSideB) {
    return lengthSidea * lengthSideB;
}


