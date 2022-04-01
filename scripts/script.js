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
	buscador_grande.classList.toggle('gato');}

let close = document.querySelector('#close');
close.onclick =() =>{
buscador_grande.classList.remove('gato')}
