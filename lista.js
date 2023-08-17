//=========================================LISTA DE CONTACTOS=========================================================////
// Este es el entregable para poder agregar o remover contactos de una lista de contactos.
//Aplique varios de los metodos que hemos aprendido en las clases, sin embargo decidi aprender un 
//poco mas por mi cuenta y asi aprender a como usar interacciones aqui en VS code.
//Cualquier cosa respecto al codigo notificarme por favor//
//diviertanse con los toms//
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('BIENVENIDO A LA LISTA DE LOS TOMS')
console.log('Es hora de revisar su lista')

let lista = ['Tom Cruise', 'Tom Felton','Tom Holland','Tom Hiddleston','Tom el Gato']

function print() {
    console.log('Esta es la lista de los contactos')
    for(let i1=0; i1<=lista.length -1; i1++) {
    
    console.log(lista[i1])
    }
}

function add(nombre) {
    lista.push(nombre)
    console.log(nombre +' ha sido agregado al sistema')
}

function rmv(nombre2) {
    let index = lista.indexOf(nombre2);
    if (index !== -1) {
      lista.splice(index, 1);
      console.log(nombre2 + ' ha sido removido del sistema');
    } else {
      console.log(nombre2 + ' no se encontró en la lista de contactos');
    }
}

function option() {
    rl.question("\nQue haremos hoy?:\n1. Ver lista de contactos\n2. Agregar contacto\n3. Eliminar contacto\n4. Salir\nIngrese el número de la opción deseada: ", (opcion) => {
      switch (opcion) {
        case "1":
          print(lista);
          option();
          break;
        case "2":
          rl.question("Ingrese el nombre del contacto a agregar: ", (nombreA) => {
            add(nombreA);
            option();
          });
          break;
        case "3":
          rl.question("Ingrese el nombre del contacto a eliminar: ", (nombreE) => {
            rmv(nombreE);
            option();
          });
          break;
        case "4":
          rl.close();
          break;
        default:
          console.log("Opción inválida. Por favor, elija una opción válida.");
          option();
      }
    });
  }
  
  option();