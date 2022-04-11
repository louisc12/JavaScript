//Fetch API - Async Await (multiples llamados)
const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultarAPI = async() =>{
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
    resultado.forEach(element => {
        console.log(element)
    });
}
consultarAPI();
