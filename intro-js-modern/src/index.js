/** Fetch API */

const apiKey = 'hIj5gU1t64ZN4cguO1OGlfTNykxUXUx9'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//   .then(respose => {
//     console.log(respose.json().then(data => console.log(data)))
//   })
//   .catch(error => console.warn(error))

peticion
  .then(response => response.json())
  .then(({ data }) => {
    console.log(data.images.original.url)
    const img = document.createElement('img')
    img.src = data.images.original.url
    document.body.append(img)
  }) // desestructuracion
  .catch(error => console.warn(error))