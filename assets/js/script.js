const urlApi = 'https://jsonplaceholder.typicode.com/posts'
let div = document.querySelector('#post-data')
//1. Realizar un request (consulta) a la API usando async-await. 
let getPosts = async () => {

//3. Manejar los posibles errores con try-catch. 
    try {
        const respuesta = await fetch(urlApi);
        const data = await respuesta.json();

//2. Mostrar el resultado del request en HTML (utilizar listas desordenadas para mostrar cada uno de los post)
        let showData = ''
        data.forEach(post => {
            showData += `<li><b>${post.title}</b><br>${post.body}<br><br></li>`
        });
        div.innerHTML = showData
    } catch (e) {
        console.log(e);
    }
}

