const API_KEY = "846725a8fe0da4e08b81a3637c2b71da";
const conteudoFilme = document.getElementById("conteudo-filme")

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

}

const container = document.getElementById("cards-originais")
const baseImgUrl = "https://image.tmdb.org/t/p/original/"; 

var numeroRandomico = Math.floor(Math.random()*20);
console.log(numeroRandomico)

const background = document.getElementById("background-image");
console.log(background)

console.log(conteudoFilme);

async function criaCard(movies){
    console.log(movies);
    console.log(movies[numeroRandomico].id)


    if(movies[numeroRandomico].original_title == undefined){
        console.log("ta indefinido")
        conteudoFilme.innerHTML += `
        <h1 class="titulo">${movies[numeroRandomico].name}</h1>
        `
    } else{
        console.log("ta definido!")
        conteudoFilme.innerHTML += `
        <h1 class="titulo">${movies[numeroRandomico].title}</h1>
        `
    }

    conteudoFilme.innerHTML += `
    <h2 class="description">${movies[numeroRandomico].overview}</h2>
    `

    conteudoFilme.innerHTML += `
    <div class="botoes">
            <button class="assistir">
                <img class="botao-play" src="../img/botao-play-ponta-de-seta.png">
                Assistir
            </button>
            <button class="minha-lista">+ Minha Lista</button>
    </div>
    `

    background.innerHTML = `
    <img class="backdrop" sty src="${baseImgUrl}${movies[numeroRandomico].backdrop_path}"></img>
    `
    
    movies.forEach((filme) => {

    container.innerHTML += `
    <img class="card" style="background: linear-gradient(to left, transparent, mistyrose),
    url("${baseImgUrl}${filme.poster_path}")" src="${baseImgUrl}${filme.poster_path}"></img>
    
    `
        
    });
}












