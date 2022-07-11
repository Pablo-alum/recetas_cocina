//style in scripts
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');}

window.onscroll =() =>{
menu.classList.remove('fa-times');
navbar.classList.remove('active');}

let busqueda = document.querySelector('#search');
let buscador_grande = document.querySelector('.search-from');
busqueda.onclick =() =>{
	buscador_grande.classList.toggle('search-top');}

let close = document.querySelector('#close');
close.onclick =() =>{
buscador_grande.classList.remove('search-top')}
let close_two = document.querySelector("#logo_buscar")
close_two.onclick=() =>{
buscador_grande.classList.toggle('search-top');}


//close style in scripts 

//open search
let search = document.querySelector('#search-box');

search.addEventListener('keyup',pruebas =()=>{
let recetas = document.querySelectorAll(".receta")
// search quit focust text in the search
recetas.forEach(cocina=>{
let texto_cocina = cocina.innerText.toLowerCase()
nombre =search.value.toLowerCase();
if (texto_cocina.includes(nombre) ){
		cocina.classList.remove("filtro");
} else {
		cocina.classList.add("filtro");
}
})//recetas.foreach
}//addEventListener
)
