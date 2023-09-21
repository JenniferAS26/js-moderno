/**
 * Desestructuracion de Arrays
 */

const personajes = ['Goku', 'Vegeta', 'Trunks']
// // console.log(personajes[0])
// // console.log(personajes[1])
// // console.log(personajes[2])

// const [, , personaje] = personajes 

// console.log(personaje)

// const retornaArreglo = () => {
//   return [ 'ABC', 123 ]
// }

// const [ piedritas, nubecitas ] = retornaArreglo()
// console.log(piedritas, nubecitas)

// useState
const usarEstado = (valor) => {
  return [valor, () => console.log(`Hola soy la funcion dentro del return, hola ${valor}`)]
}

const arr = usarEstado('Goku')

// console.log(arr)
// arr[1]()

const [ nombre, setNombre ] = usarEstado('Nathalia')
console.log(nombre)
setNombre()