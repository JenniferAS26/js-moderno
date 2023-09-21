/** Objetos literales
 * Tambien conocidos diccionarios 
 * Los objetos trabajan con pares de valores 
 * llave: valor
 * key: value
 * {}
 */

const persona = {
  nombre: 'Carlos',
  edad: 45,
  apellido: 'Herrera',
  direccion: {
    ciudad: 'New York',
    zip: 125844,
    lat: -12.484,
    lng: 12.51884
  }
}

// console.log({ persona })
// console.table(persona)

// Cuando queremos clonar un objeto
// const persona2 = persona // no es buena manera de clonar un objeto


const persona2 = {...persona}
persona2.nombre = 'Alberto' 
persona2.apellido = 'Cortez'

console.log('persona', persona)
console.log('persona2', persona2)