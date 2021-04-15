//exercício1


function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    
    this.calculaArea = function(){
        return base * altura;
    }
}

var retangulo1 = new Retangulo(8, 10);

alert(retangulo1.calculaArea());




//exercício2
function Conta(){
    var nomeCorrentista = "";
    var banco = "";
    var numeroConta = "";
    var saldoConta = 0;

    this.setNomeCorrentista = function(nomeCorrentista){
        this.nomeCorrentista = nomeCorrentista;
    }

    this.getNomeCorrentista = function(){
        return this.nomeCorrentista;
    }

    this.setBanco = function(banco){
        this.banco = banco;
    }
    
    this.getBanco = function(){
        return this.banco;
    }
    
    this.setNumeroConta = function(numeroConta){
        this.numeroConta = numeroConta;
    }
    
    this.getNumeroConta = function(){
        return this.numeroConta;
    }

    this.setSaldoConta = function(saldoConta){
        this.saldoConta = saldoConta;
    }
    
    this.getSaldoConta = function(){
        return this.saldoConta;
    }
}

function ContaCorrente(){
    var saldoEspecial = 0;

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    }
    
    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    }
}

function ContaPoupanca(){
    var juros = 0;
    var dataVencimento;

    this.setJuros = function(juros){
        this.juros = juros;
    }
    
    this.getJuros = function(){
        return this.juros;
    }

    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    }
    
    this.getDataVencimento = function(){
        return this.dataVencimento;
    }
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

objContaCorrente = new ContaCorrente();

objContaCorrente.setNomeCorrentista("Bruno");
objContaCorrente.setBanco("Nubank");
objContaCorrente.setNumeroConta("478965231456987452");
objContaCorrente.setSaldoConta(6000000);
objContaCorrente.setSaldoEspecial(45000);

alert(objContaCorrente.getNomeCorrentista());
alert(objContaCorrente.getBanco());
alert(objContaCorrente.getNumeroConta());
alert(objContaCorrente.getSaldoConta());
alert(objContaCorrente.getSaldoEspecial());

objContaPoupanca = new ContaPoupanca();

var dataVencimentoAux = new Date();
dataVencimentoAux.setDate(dataVencimentoAux.getDate() + 2);

objContaPoupanca.setNomeCorrentista("Fulano");
objContaPoupanca.setBanco("Nubank");
objContaPoupanca.setNumeroConta("789632156247852369");
objContaPoupanca.setSaldoConta(9000000);
objContaPoupanca.setJuros(0.2);
objContaPoupanca.setDataVencimento(dataVencimentoAux);

alert(objContaPoupanca.getNomeCorrentista());
alert(objContaPoupanca.getBanco());
alert(objContaPoupanca.getNumeroConta());
alert(objContaPoupanca.getSaldoConta());
alert(objContaPoupanca.getJuros());
alert(objContaPoupanca.getDataVencimento());