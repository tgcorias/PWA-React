// calcular el area de un triangulo
function calculateArea(base, height) {
    return base * height / 2;
}
// resolver funciones polinomicas de tercer grado
function solveQuadraticEquation(a, b, c) {
    var x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    return [x1, x2];
}