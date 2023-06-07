"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var clientes = [
    new Persona_1.Persona('Anita', 'Martinez', 32, { nif: 47447146, letra: 'D' }, { dia: 20, guion: '-', mes: 6, guion2: '-', ano: 1991 }, 'Azul', 'Femenino', new Direccion_1.Direccion('La Roda', 25, 3, 'A', 35220, 'Las Palmas de Gran Canaria', 'Las Palmas'), new Mail_1.Mail('electronico', 'luna@gmail.com'), new Telefono_1.Telefono('Movil', 693021662)),
    new Persona_1.Persona('Luna', 'Garrido', 13, { nif: 47447148, letra: 'S' }, { dia: 1, guion: '-', mes: 10, guion2: '-', ano: 2010 }, 'Violeta', 'Femenino', new Direccion_1.Direccion('Las Hurtadas', 9, 2, 'A', 36168, 'Albacete', 'Albacete'), new Mail_1.Mail('electronico', 'luna@gmail.com'), new Telefono_1.Telefono('Movil', 668774433)),
    new Persona_1.Persona('David', 'Moreno', 36, { nif: 25192401, letra: 'L' }, { dia: 15, guion: '-', mes: 1, guion2: '-', ano: 1986 }, 'Negro', 'Masculino', new Direccion_1.Direccion('Rosas', 20, 2, 'B', 35220, 'Santa Cruz de Tenerife', 'Santa Cruz de Tenerife'), new Mail_1.Mail('electronico', 'Davidsl@gmail.com'), new Telefono_1.Telefono('Movil', 685443322))
];
console.log(clientes);
function ClienteDni(dniBuscado) {
    return clientes.find(function (cliente) { return cliente.getDni() === dniBuscado; });
}
var dniBuscado = '47447146D';
var clienteRequerido = ClienteDni(dniBuscado);
if (clienteRequerido) {
    clienteRequerido.setDireccion(new Direccion_1.Direccion('Girasoles', 50, 1, 'A', 32268, 'Bilbao', 'Bilbao'));
    clienteRequerido.setMail(new Mail_1.Mail('electrónico', 'pepito123@gmail.com'));
    clienteRequerido.setTelefono(new Telefono_1.Telefono('Fijo', 967502525));
}
else {
    console.log('Cliente no encontrado');
}
console.log(clientes);
