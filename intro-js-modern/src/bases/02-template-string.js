/** Template string */
const nombre = 'Nathalia'
const apellido = 'Acosta'

// let nombreCompleto = nombre + ' ' + apellido
let nombreCompleto = `${nombre} ${apellido}`

// console.log(nombreCompleto)

function getSaludo(usuario) {
  const saludo = `Hola ${usuario}!!!!`
  return saludo
}

console.log(`Esto es un texto: ${getSaludo(nombreCompleto)}`)