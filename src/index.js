// const BASE_URL = "  http://localhost:3000"

// // метод get

// function getMovies(){
//     fetch(`${BASE_URL}/movies`)
//     .then(res => res.json)
// }

// function getMoviesById(movieId){
//     fetch(`${BASE_URL}/movies/${movieId}`)
//     .then(res => res.json)
// }

// const newMover = {
   
//         title: "JS",
//         director: "Me",
//         genres: [ "Drama"],
//         rating: 9
// }


// async function createMovie(){
//     const option = {
//         method : 'POST',
//         headers: {
//             'Content-Type': 'aplication/json'
//         },
    
//         body: JSON.stringify(newMover)
//     }
//     try{
//   const result = await fetch(`${BASE_URL}/movies`, option)
//   const res = await result.json()
//   return res
//     }catch(error){
//         console.log(error)
//     }
// }

// // function patch

// function updateMoovieById(bookId, update){
// const options ={
//     method: "PATCH",
//     headers: {
//         "Content-type": "application/json"
//     },

//     body: JSON.stringify(update)
// }
//     try {
//         const moovie = await fetch(`${BASE_URL}/movies/${bookId}`, options)
// const parcedMoovie = await movie.json()
//     }catch(error){
//         console.log(error)
//     }



// }

// updateMoovieById(7,  {
//         "title": "New js",
//         "director": "Somebody"
//     }).then(res => console.log(res))


// function deleteMoovie(id){
//     const options = {
//         method: "DELETE"
//     }
// try{
//     const movie = fetch(`${BASE_URL}/moovies/${id}`, options)
//     const deletMovie = res.json()
//       return deletMovie
// }catch(error){
//     console.log(error)
// }
// }

// deleteMoovie(5).then(res => console.log(res))


// function getFruit(name) {
//     const fruits = {
//       strawberry: '🍓',
//       kiwi: '🥝 ',
//       apple: '🍎',
//     };
  
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(fruits[name])
//       }, 500);
//     } );
//   }
//   async function aMakeSmoothie(){
//     const kiwi = getFruit('kiwi');
//     console.log(kiwi);
  
//     const apple = getFruit('apple');
//     console.log(apple);
    
//     const strawbery =  getFruit('strawbery')
//     console.log()


//     const la = await Promise.all([kiwi, apple,strawbery])
//     console.log(la)
//   }

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }

const posts = await getPost()
renderPost(posts)

startApp()

posts:[
    {
        id:1,
      title:'',
      discription:''
    },
    {
        id:2,
      title:'',
      discription:''
    },
    {
        id:3,
        title:'',
        discription:''
    },
    {
        id:4,
       title:'',
       discription:''
    },
    
    {
        id:5,
       title:'',
       discription:''
    },
   
]

const BAZE_URL = "http://localhost:3000/posts"
const refs ={
    postContainer
}



async function getPosts() {

    try {
     const posts = await fetch(BAZE_URL)
     return await posts.json
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Створення нового поста
    
    async function createPost(title, content) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Оновлення поста
    
    async function updatePost(id, title, content) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Видалення поста
    
    async function deletePost(id) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Додавання коментаря до поста
    
    async function createComment(postId, comment) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Оновлення відображення постів на сторінці
    
    function renderPosts(posts) {
    
    }
    
    // Обробник події для створення поста
    
    document.getElementById('createPostForm').addEventListener('submit', cb);
    
    // Обробник події для редагування поста
    
    document.addEventListener('click', cb);
    
    // Обробник події для видалення поста
    
    document.addEventListener('click', cb);
    
    // Обробник події для додавання коментаря
    
    document.addEventListener('submit', cb);
    
    // Запуск додатку
    
    async function startApp() {
    
    const posts = await getPosts();
    
    renderPosts(posts);
    
    }
    
    startApp();



