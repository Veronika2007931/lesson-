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
