const BASE_URL = "  http://localhost:3000"

// метод get

function getMovies(){
    fetch(`${BASE_URL}/movies`)
    .then(res => res.json)
}

function getMoviesById(movieId){
    fetch(`${BASE_URL}/movies/${movieId}`)
    .then(res => res.json)
}

const newMover = {
   
        title: "JS",
        director: "Me",
        genres: [ "Drama"],
        rating: 9
}

const option = {
    method : 'POST',
    headers: {
        'Content-Type': 'aplication/json'
    },

    body: JSON.stringify(newMover)
}

function createMovie(){
   return fetch(`${BASE_URL}/movies`, option)

}

// function patch

function updateMoovieById(bookId, update){
const options ={
    method: "PATCH",
    headers: {
        "Content-type": "application/json"
    },

    body: JSON.stringify(update)
}

return fetch(`${BASE_URL}/movies/${bookId}`, options)
.then((res)=>res.json())
}

updateMoovieById(7,  {
        "title": "New js",
        "director": "Somebody"
    }).then(res => console.log(res))


// function deleteMoovie(id){
//     const options = {
//         method: "DELETE"
//     }

//     return fetch(`${BASE_URL}/moovies/${id}`, options)
//     .then((res)=>res.json())

// }

// deleteMoovie(5).then(res => console.log(res))




