//======================== LISTA DE CONTACTOS TOM 2.0 ==================================================================

console.log('BIENVENIDO A LA LISTA DE LOS TOMS')
console.log('Es hora de revisar su lista')

let lista = [
  {
    id:20222569,
    nombre: 'Tom',
    apellido: 'felton',
    telefono: 88001170,
    ubicaciones: {
      ciudad: 'Londres',
      direccion: 'Calle los Andes'
    }
  },

  {
    id:20222570,
    nombre: 'Tom',
    apellido: 'Holland',
    telefono: 5550123,
    ubicaciones: {
      ciudad: 'New York City',
      direccion: 'Queens'
    }
  }
  ,  {
    id:20222571,
    nombre: 'Tom',
    apellido: 'El gato',
    telefono: 229900339,
    ubicaciones: {
      ciudad: 'Cartoon Network City',
      direccion: 'Casa de jerry'
    }
  }
]

function print() {
  console.log('Esta es la lista de los contactos');
  console.table(lista);
}

function add() {
  nombren = {
    id:20222572,
    nombre: 'Tom',
    apellido: 'Hardy',
    telefono: 99001122,
    ubicaciones: {
      ciudad: 'Vancouver',
      direccion: 'Canada'
    }
  }  
  lista.push(nombren)
    console.log(nombren.nombre +' ha sido agregado al sistema')
}

function rmv() {
  let contactoR = {
    id: 20222569,
    nombre: 'Tom',
    apellido: 'felton',
    telefono: 88001170,
    ubicaciones: {
      ciudad: 'Londres',
      direccion: 'Calle los Andes'
    }
  };
  
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === contactoR.id) {
      lista.splice(i, 1);
      console.log(contactoR.nombre + ' ha sido removido del sistema');
      return;
    }
  }
  
  console.log(contactoR.nombre + ' no se encontró en la lista de contactos');
}

function actualizar() {
  let basado = {
    id: 20222571,
    nombre: 'Tom',
    apellido: 'El gato',
    telefono: 229900339,
    ubicaciones: {
      ciudad: 'Cartoon Network City',
      direccion: 'Casa de jerry'
    }
  };

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === basado.id) {
      lista[i] = {  
        id: 20222571, 
        nombre: 'Tom',
        apellido: 'Hiddleston',
        telefono: 229900339,
        ubicaciones: {
          ciudad: 'Asgard',
          direccion: 'Palacio de Odin'
        }
      };
      console.log(basado.nombre + ' ha sido actualizado en el sistema');
      return;
    }
  }

  console.log(basado.nombre + ' no se encontró en la lista de contactos');
}
console.log('primero miremos la lista original');
print()
console.log('Primero Agregaremos un contacto, sera Tom Hardy');
add()

print()
console.log('Bien, Ahora vamos a Remover a un Tom, sera Tom Felton');
rmv()
print()
console.log('Ahora vamos a actualizar algun contacto');
actualizar()
print()
console.log('Gracias por ver mi lista de contactos');