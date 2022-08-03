// style in scripts
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

const busqueda = document.querySelector('#search');
const BuscadorGrande = document.querySelector('.search-from');
busqueda.onclick = () => {
  BuscadorGrande.classList.toggle('search-top');
  search.addEventListener('keyup', pruebas);
  const recetas = document.querySelectorAll('.receta');
  recetas.forEach((cocina) => {
    cocina.classList.remove('filtro');
  });
};

search = document.querySelector('#search-box');

const close = document.querySelector('#close');
close.onclick = () => {
  BuscadorGrande.classList.remove('search-top');
  search.removeEventListener('keyup', pruebas);
  search.value = '';
};
const CloseTow = document.querySelector('#logo_buscar');
CloseTow.onclick = () => {
  BuscadorGrande.classList.toggle('search-top');
  search.removeEventListener('keyup', pruebas);
};

// close style in scripts

// open search

search.addEventListener(
  'keyup',
  (pruebas = () => {
    const recetas = document.querySelectorAll('.receta');
    // search quit focust text in the search
    recetas.forEach((cocina) => {
      const TextoCocina = cocina.innerText.toLowerCase();
      nombre = search.value.toLowerCase().trim();
      if (TextoCocina.includes(nombre)) {
        cocina.classList.remove('filtro');
      } else {
        cocina.classList.add('filtro');
      }
    }); // recetas.foreach
  }) // addEventListener
);
// cambia el color de los corazones
const corazones = document.querySelectorAll('.recetas .fa-heart');

for (const corazo of corazones) {
  corazo.addEventListener('click', function() {
    if (corazo.classList.contains('fa-regular')) {
      corazo.classList.replace('fa-regular', 'fa-solid');
      corazo.style.color = '#cf624c';
    } else {
      corazo.classList.replace('fa-solid', 'fa-regular');
      corazo.style.color = 'black';
    }
  });
}

const receta = document.querySelector('.receta');
receta.onclick = function() {};
