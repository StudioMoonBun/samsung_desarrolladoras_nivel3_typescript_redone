export class Telefono {
    private tipo:string;
    private numero:number;

    constructor (tipo:string, numero:number) {
        this.tipo = tipo;
        this.numero = numero;
    }

    public getTipo(){
        return this.tipo;
    }

    public getNumero() {
        return this.numero;
    }
}

