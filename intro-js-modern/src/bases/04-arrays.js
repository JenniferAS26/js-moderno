/** Arreglos
 * Un arreglo es una coleccion de informacion que se encuentra dentro de una misma variable
 * ['a', 1236, {persona= {nombre:} }, [12, {}]]
 */


/** Declaracion de un array */
// const arr = new Array(100)
// arr.push(1)
// console.log(arr)

const arr = [1,2,3,4]
const arr2 = [...arr] // spread operator
arr2.push('hola')
arr2.push(8)
arr2.push({})
arr2.push('s')
arr2.push(false)


console.log(arr)
console.log(arr2)

