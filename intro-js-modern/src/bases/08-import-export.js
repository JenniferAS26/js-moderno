// import heroes from './data/heroes.js' // importacion con una exportacion por default
// import { heroes, owners } from './data/heroes.js';
import heroes, { owners } from '../data/heroes.js'



// const getHeroeById = (id) => {
//   return heroes.find(heroe => {
//     if( heroe.id === id ) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

// console.log(owners)

const getHeroeById = (id) => {
  return heroes.find(heroe => heroe.id === id )
}

// console.log(getHeroeById(2))

const getHeroesByOwner = (owner) => {
  return heroes.filter(heroe => heroe.owner === owner)
}

// console.log(getHeroesByOwner('DC'))

export { getHeroeById, getHeroesByOwner }