class Carro {
    tipo: string;
    cor: string;
    placa: string;
    numportas: number;   

    ligar():void {
        console.log("Carro ligado.");
    }

    desligar(): void {
        console.log("Carro desligado.")
    }

    andar(distancia: number):void{
        this.ligar();
        console.log("Andou " + distancia + "m");
    }

    virar(orientacao: string, distancia: number) : void {
        console.log("Virou a " + orientacao);
        this.andar(distancia);
    }

    descrever():string {
        return this.tipo + " - " + this.cor + " - "
        + this.placa + " - " + this.numportas ;
    }
}

let carro = new Carro();
carro.cor = "verde";
carro.numportas = 4;
carro.placa = "QGG-2013";
carro.tipo = "Mercedes";

carro.andar(10);

