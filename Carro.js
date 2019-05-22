var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.ligar = function () {
        console.log("Carro ligado.");
    };
    Carro.prototype.desligar = function () {
        console.log("Carro desligado.");
    };
    Carro.prototype.andar = function (distancia) {
        this.ligar();
        console.log("Andou " + distancia + "m");
    };
    Carro.prototype.virar = function (orientacao, distancia) {
        console.log("Virou a " + orientacao);
        this.andar(distancia);
    };
    Carro.prototype.descrever = function () {
        return this.tipo + " - " + this.cor + " - "
            + this.placa + " - " + this.numportas;
    };
    return Carro;
}());
var carro = new Carro();
carro.cor = "verde";
carro.numportas = 4;
carro.placa = "QGG-2013";
carro.tipo = "Mercedes";
carro.andar(10);
