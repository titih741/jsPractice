function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Tiago",
    idade: 28
}

const pessoa2 = {
    nome: "Gustavo",
    idade: 25
}

const pet = {
    nome: "fred",
    idade: 4
}

console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.call(pet, 3));
console.log(calculaIdade.apply(pessoa2, [3]));
