class contaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar (valor){
        if (valor > this._saldo){
            return "Saldo insuficiente";
        }
        this.saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar (valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "conta corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
         this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "conta poupanca";
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "conta universitaria";
    }
    sacar (valor){
        if (valor > this._saldo || valor > 500){
            return "Saldo insuficiente ou maior que 500 reais";
        }
        this.saldo = this._saldo - valor;
        return this._saldo;
    }
}
