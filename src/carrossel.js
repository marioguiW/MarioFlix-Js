
const nav = document.getElementById("navbar");

console.log(nav)

window.addEventListener("scroll", () =>{
    if(window.scrollY >= 100){
        nav.classList.add("nav-black")
    }else{
        nav.classList.remove("nav-black")
    }
})