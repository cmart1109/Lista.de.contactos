//======================== LISTA DE CONTACTOS TOM 2.0 ================================================================//
//Base de datos ======================================================================================================//
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
//Funciones de la Lista de contactos =============================================================================//
function imprimir() {
  console.log('Esta es la lista de los contactos');
  console.table(lista);
}

function agregar(nombren) {
  lista.push(nombren)
    console.log(nombren.nombre +' ha sido agregado al sistema')
}

function remover(contactoremover) {  
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === contactoremover.id) {
      lista.splice(i, 1);
      console.log(contactoremover.nombre + ' ha sido removido del sistema');
      return;
    }
  }
  console.log(contactoremover.nombre + ' no se encontró en la lista de contactos');
}

function actualizar() {
  let contactoactualizar = {
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
    if (lista[i].id === contactoactualizar.id) {
      lista[i] = {  
        id: 20222574, 
        nombre: 'Tom',
        apellido: 'Hiddleston',
        telefono: 229900339,
        ubicaciones: {
          ciudad: 'Asgard',
          direccion: 'Palacio de Odin'
        }
      };
      console.log(contactoactualizar.nombre + ' ha sido actualizado en el sistema');
      return;
    }
  }

  console.log(contactoactualizar.nombre + ' no se encontró en la lista de contactos');
}

//Dialogo Mostrado en Consola =============================================================================================

console.log('BIENVENIDO A LA LISTA DE LOS TOMS')
console.log('Es hora de revisar su lista')

console.log('primero miremos la lista original');
imprimir()
console.log('Primero Agregaremos un contacto, sera Tom Hardy');

agregar({
  id:20222572,
  nombre: 'Tom',
  apellido: 'Hardy',
  telefono: 99001122,
  ubicaciones: {
    ciudad: 'Vancouver',
    direccion: 'Canada'}
}  )
imprimir()
console.log('Bien, Ahora vamos a Remover a un Tom, sera Tom Felton');
remover({
  id: 20222569,
  nombre: 'Tom',
  apellido: 'felton',
  telefono: 88001170,
  ubicaciones: {
    ciudad: 'Londres',
    direccion: 'Calle los Andes'
  }})
imprimir()
console.log('Ahora vamos a actualizar algun contacto');
actualizar()
imprimir()
console.log('Gracias por ver mi lista de contactos');