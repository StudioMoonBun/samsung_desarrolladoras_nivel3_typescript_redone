
/*En este caso se utilizan los atributos de los datos como privados para que no puedan ser modificados, sin embargo proporcionamos algunos getters para que se puedan consultar dichos datos, volvemos a cambiar el type por class para poder exportar e importar los datos al archivo principal*/ 
export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private cp: number;
    private poblacion: string;
    private provincia: string;

    constructor (calle:string,numero:number,piso:number,letra:string,cp:number,poblacion:string,provincia:string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.cp = cp;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    public getCalle(): string {
        return this.calle;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getPiso(): number {
        return this.piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public getCp(): number {
        return this.cp;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }
}

