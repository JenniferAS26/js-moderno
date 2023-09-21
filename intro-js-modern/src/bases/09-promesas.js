/** Promesas */
import { getHeroeById } from './bases/08-import-export.js'

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2 segundos despues')
//   }, 2000)
// })


// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const resultado = getHeroeById(4)
//     if (resultado) {
//       resolve(resultado)
//     } else {
//       reject('No se pudo encontrar este personaje')
//     }
//   }, 2000)
// })

// promesa.then((response) => {
//   console.log('respose', response)
// })
// promesa.catch(error => console.log(error))
// promesa.then(response => console.log('respose', response)).catch(error => console.log(error))

// promesa
//   .then(response => console.log('respose', response))
//   .catch(error => console.warn(error))


console.log('Hola mundo')

const suma = (a, b) => {
  return a + b
}

console.log(suma(2, 3))


const getHeroeByIdPromesa = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = getHeroeById(id)
      if (resultado) {
        resolve(resultado)
      } else {
        reject('No se pudo encontrar este personaje')
      }
    }, 2000)
  })
  return promesa
}

getHeroeByIdPromesa(21)
  .then(heroe => console.log('heroe', heroe))
  .catch(error => console.warn(error))
