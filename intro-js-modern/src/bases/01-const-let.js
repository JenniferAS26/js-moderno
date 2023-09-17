// Variables y constantes
/*
const  -> Son variables que no se van a renombrar, ni reasignar
let
*/
const nombre = 'Fernando'
const apellido = 'Herrera'

let valorDado = 5


console.log(nombre, apellido, valorDado)

/** Variables de Scope */
if (true) {
  let valorDado = 4
  console.log('valorDado dentro condicional', valorDado)
}

valorDado = 6
valorDado = 'esto es un string'

console.log(valorDado)