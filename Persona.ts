
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

//*Cambiamos el type por class para poder usar el import ya que sino no es posible utilizarlo para relacionar los demás archivos al archivo principal */
/*Para los datos usamos la visibilidad del atributo de clase para poder trabajar con ellos ya que si no los utilizamos perderíamos protección de datos y la encapsulación, esta visibilidad del atributo es básica para la programación adaptada a objetos, no ponemos el atributo de los datos público porque puede cambiar los datos establecidos */
export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: {
        nif: number;
        letra: string;
    };
    private fechanac: {
        dia: number;
        guion: string;
        mes: number;
        guion2: string;
        ano: number;
    };
    private color: string;
    private sexo: string;
    private direccion: Direccion;
    private mail: Mail;
    private telefono: Telefono;
    private notas: string;

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: { nif: number, letra: string },
        fechanac: { dia: number, guion: string, mes: number, guion2: string, ano: number },
        color: string,
        sexo: string,
        direccion: Direccion,
        mail: Mail,
        telefono: Telefono,
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.fechanac = fechanac;
        this.color = color;
        this.sexo = sexo;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono = telefono;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public getEdad(): number {
        return this.edad;
    }

    /*Realizamos una cadena de texto para abrir los datos a publico cuando se quieran consultar sin necesariamente estar trabajando dentro del objeto*/
    public getDni(): string {
        return `${this.dni.nif}${this.dni.letra}`
    }

    public getFechanac(): string {
        return `${this.fechanac.dia}${this.fechanac.guion}${this.fechanac.mes}${this.fechanac.guion2}${this.fechanac.ano}`
    }

    public getColor(): string {
        return this.color;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setDireccion(direccion: Direccion) {
        this.direccion = direccion;
      }
    
      public setMail(mail: Mail) {
        this.mail = mail;
      }
    
      public setTelefono(telefono: Telefono) {
        this.telefono = telefono;
      }
}
