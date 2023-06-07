"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//*Cambiamos el type por class para poder usar el import ya que sino no es posible utilizarlo para relacionar los demás archivos al archivo principal */
/*Para los datos usamos la visibilidad del atributo de clase para poder trabajar con ellos ya que si no los utilizamos perderíamos protección de datos y la encapsulación, esta visibilidad del atributo es básica para la programación adaptada a objetos, no ponemos el atributo de los datos público porque puede cambiar los datos establecidos */
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, fechanac, color, sexo, direccion, mail, telefono) {
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
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    /*Realizamos una cadena de texto para abrir los datos a publico cuando se quieran consultar sin necesariamente estar trabajando dentro del objeto*/
    Persona.prototype.getDni = function () {
        return "".concat(this.dni.nif).concat(this.dni.letra);
    };
    Persona.prototype.getFechanac = function () {
        return "".concat(this.fechanac.dia).concat(this.fechanac.guion).concat(this.fechanac.mes).concat(this.fechanac.guion2).concat(this.fechanac.ano);
    };
    Persona.prototype.getColor = function () {
        return this.color;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Persona.prototype.setMail = function (mail) {
        this.mail = mail;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Persona;
}());
exports.Persona = Persona;
