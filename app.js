const Hamburger = document.querySelector(".menu-bars");
const cross = document.querySelector(".menu-cross");
const navBar = document.querySelector(".navbar");
Hamburger.addEventListener("click", ()=>{
    navBar.style.display = "block";
    cross.style.display = "block";
    Hamburger.style.display = "none";
    console.log("Clicked");
})
cross.addEventListener("click",()=>{
    navBar.style.display = "none";
    Hamburger.style.display = "block";
    cross.style.display = "none";
})