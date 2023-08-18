const API_KEY = "846725a8fe0da4e08b81a3637c2b71da";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "netflixOriginals",
        tittle: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`
    },
    {
        name: "topRated",
        tittle: "Populares",
        path: `/move/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "comedy",
        tittle: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`
    },
    {
        name: "romances",
        tittle : "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`
    },
    {
        name: "documentaries",
        tittle: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
    }
]

const getMovies = async(path) => {
    try{
        let url = `https://api.themoviedb.org/3${path}`
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log("Errinho bobo", error)
    }
}

retornaLista();

async function retornaLista(){
    const movies = await getMovies(categories[0].path);
    criaCard(movies);
    backgroundAleatorio(movies);

}

const container = document.getElementById("cards")
const baseImgUrl = "https://image.tmdb.org/t/p/original/"; 

let numeroRandomico = Math.floor(Math.random()*10);
console.log(numeroRandomico)

const background = document.getElementById("background-image");
console.log(background)

async function criaCard(movies){
    console.log(movies);

    background.innerHTML = `
    <img class="backdrop" sty src="${baseImgUrl}${movies[numeroRandomico].backdrop_path}"></img>
    `
    
    movies.forEach((filme) => {


    container.innerHTML += `
    <img class="card" style="background: linear-gradient(to left, transparent, mistyrose),
    url("${baseImgUrl}${filme.poster_path}")" src="${baseImgUrl}${filme.poster_path}"></img>
    
    `
        
    });

    container.innerHTML += `
    <div class='limitador' id="limitador">Limitador</div>
    `
}












