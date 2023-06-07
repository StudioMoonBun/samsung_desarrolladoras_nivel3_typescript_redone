
/*Aquí cambie la definición que tenia antes puesta como Direccion a email para que no se confundiese con la direccion física de la persona*/
export class Mail {
    private clase: string;
    private email: string;

    constructor(clase: string, email: string) {
        this.clase = clase;
        this.email = email;
    }

    public getClase() {
        return this.clase;
    }

    public getEmail() {
        return this.email;
    }
}

