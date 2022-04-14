const lista1 = [
    100,220,500,500000
];

const mitadlista1 = parseInt (lista1.length /2);

function esPar (numerito){
    if (numerito % 2 === 0) {
        return true ;
    } else {
        return false;
    }
}


let mediana;    

function calcularMediaArismetica (lista) {
        const sumaLista= lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
            
        }
        );

    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadlista1 - 1];
    const elemento2 = lista1[mitadlista1];
    const promedioElemento1y2 = calcularMediaArismetica ([elemento1, elemento2]);

    mediana= promedioElemento1y2;
}else {
    mediana = lista1[mitadlista1]
}