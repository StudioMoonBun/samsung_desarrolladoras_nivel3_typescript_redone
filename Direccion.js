"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
/*En este caso se utilizan los atributos de los datos como privados para que no puedan ser modificados, sin embargo proporcionamos algunos getters para que se puedan consultar dichos datos, volvemos a cambiar el type por class para poder exportar e importar los datos al archivo principal*/
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, cp, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.cp = cp;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.getCp = function () {
        return this.cp;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
