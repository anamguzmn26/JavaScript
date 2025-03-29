function ProximoFila(arreglo, elemento) {
    arreglo.push(elemento);  
    return arreglo.shift();  
}

let numeros = [1, 2, 3, 4, 5, 6];
console.log(ProximoFila(numeros, 7));  
console.log(numeros);