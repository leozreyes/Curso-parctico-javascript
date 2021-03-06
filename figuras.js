// Codigo del cuadrado

console.group("Cuadrado")
function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();

//Codigo Triangulo

console.group("Triangulo")
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (altura, base) {
    return (base*altura)/2;
}
console.groupEnd();

//Codigo Circulo
console.group("Circulo")
const PI= Math.PI;

function DiametroCirculo (radio) {
    return radio*2;
}
//circunferencia
function perimetroCirculo ( radio) {
    const diametro= DiametroCirculo(radio)
    return diametro * PI;
}
function areaCirculo (radio) {
    return (radio*radio)*PI;
}
console.groupEnd();

//Aqui interactuamos con el Html

function calcularPerimetroCuadrado() {
    const input= document.getElementById("InputCuadrado") ;
    const value= input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input= document.getElementById("InputCuadrado") ;
    const value= input.value;

    const perimetro = areaCuadrado(value)
    alert(perimetro)
}