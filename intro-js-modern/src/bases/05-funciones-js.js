/** Funciones en JavaScript */
// const dataUser = {
//   name: 'Pedrito',
//   userName: 'Pepe123',
//   email: 'pedrito@mail.com'
// }


// function saludar(nombre) {
//   return `Hola buenos días ${nombre}`
// }

// console.log(saludar('Nathalia'))



// const imprimeDatos = (param1, param2) => {
//   return `Los datos de mi usuario son: name: ${param1} y email: ${param2}`
// }

// console.log(imprimeDatos(dataUser.name, dataUser.email))

// funcion con return tradicional
// const getUserTradicional = () => {
//   return {
//     userId: 'ABC1236',
//     userName: 'Patito63'
//   }
// }

// // Funcion con return implicito
// const getUser = () => (
//   {
//     userId: 'ABC1236',
//     userName: 'Patito63'
//   }
// )

// console.log(getUserTradicional())
// console.log(getUser())

/**
 * Tarea
 * 1. cambiar la funcion tradicional a una arrow function
 * 2. Retornar un objeto implicito
 */

const getUsuarioActivo = (nombre) => (
  {
    userId: 'ABC1236',
    userName: nombre
  }
)

const usuarioActivo = getUsuarioActivo('Pablito')
console.log(usuarioActivo)