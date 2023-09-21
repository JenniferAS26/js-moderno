/** Desestructuracion de Objetos */

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  clave: 'Ironman',
  edad: 45
}

const persona2 = {
  nombre: 'Steve',
  apellido: 'Roger',
  clave: 'Capitan America',
  rango: 'Capitan',
  edad: 42
}


// console.log(persona.nombre)
// console.log(persona.apellido)
// console.log(persona.clave)

// const { clave, nombre, apellido } = persona // desestructuracion
// console.log(clave)
// console.log(nombre)
// console.log(apellido)

// const retornaPersona = (usurio) => {
//   console.log(usurio)
// }

// const retornaPersona = (usuario) => {
//   const { clave, nombre, apellido } = usuario
//   console.log(nombre, apellido, clave)
// }

// const retornaPersona = ({ clave, nombre, apellido, rango = 'Soldado' }) => {
//   console.log(nombre, apellido, clave, rango)
// }

// retornaPersona(persona)
// retornaPersona(persona2)

const usarContexto = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad
  }
}

const avenger = usarContexto(persona)
console.log('Avenger', avenger)

const { nombreClave, anios } = usarContexto(persona2)

console.log(nombreClave, anios)
// Tarea: Quiero extraer nombreClave y anios
