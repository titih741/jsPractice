function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== "object") throw new TypeError("Array precisar ser um Object");

        if (typeof num !== "number") throw new TypeError("Numero nao é do tipo Number");

        if (arr.length !== num) throw new RangeError("O tamanho nao é válido");

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Erro é ReferenceError");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Erro é TypeError");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Error é RangeError");
            console.log(e.message);
        } else {
            console.log("Tipo de erro nao esperado: " + e)
        }

    }

}
console.log(validaArray());
console.log(validaArray(2, 3));
console.log(validaArray([],"joao"));
console.log(validaArray([1,2,3,4,5], 4));
console.log(validaArray([1,2,3], 3));