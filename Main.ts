import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono }  from "./Telefono";

const clientes: Persona[] = [
  new Persona(
    'Anita',
    'Martinez',
    32,
    { nif: 47447146, letra: 'D' },
    { dia: 20, guion: '-', mes: 6, guion2: '-', ano: 1991 },
    'Azul',
    'Femenino',
    new Direccion(
      'La Roda',
      25,
      3,
      'A',
      35220,
      'Las Palmas de Gran Canaria',
      'Las Palmas'
    ),
    new Mail(
      'electronico',
      'luna@gmail.com'
    ),
    new Telefono(
      'Movil',
      693021662
    )
  ),
  new Persona(
    'Luna',
    'Garrido',
    13,
    { nif: 47447148, letra: 'S' },
    { dia: 1, guion: '-', mes: 10, guion2: '-', ano: 2010 },
    'Violeta',
    'Femenino',
    new Direccion(
      'Las Hurtadas',
      9,
      2,
      'A',
      36168,
      'Albacete',
      'Albacete'
    ),
    new Mail(
      'electronico',
      'luna@gmail.com'
    ),
    new Telefono(
      'Movil',
      668774433
    )
  ),
  new Persona(
    'David',
    'Moreno',
    36,
    { nif: 25192401, letra: 'L' },
    { dia: 15, guion: '-', mes: 1, guion2: '-', ano: 1986 },
    'Negro',
    'Masculino',
    new Direccion(
      'Rosas',
      20,
      2,
      'B',
      35220,
      'Santa Cruz de Tenerife',
      'Santa Cruz de Tenerife'
    ),
    new Mail(
      'electronico',
      'Davidsl@gmail.com'
    ),
    new Telefono(
      'Movil',
      685443322
    )
  )
];

console.log(clientes);

function ClienteDni(dniBuscado: string) {
  return clientes.find((cliente) => cliente.getDni() === dniBuscado);
}

const dniBuscado = '47447146D';
const clienteRequerido = ClienteDni(dniBuscado);

if (clienteRequerido) {
  clienteRequerido.setDireccion(
    new Direccion(
      'Girasoles',
      50,
      1,
      'A',
      32268,
      'Bilbao',
      'Bilbao'
    )
  );
  clienteRequerido.setMail(
    new Mail(
      'electrónico',
      'pepito123@gmail.com'
    )
  );
  clienteRequerido.setTelefono(
    new Telefono(
      'Fijo',
      967502525
    )
  );
} else {
  console.log('Cliente no encontrado');
}

console.log(clientes);
