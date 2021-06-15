// //MANERA LARGA DE HACERLO (no recomendable)
// //Realizamos las entradas del usuario
// const urlImagen1 = prompt("Ingrese la url de la imagen 1, por favor!");
// const urlImagen2 = prompt("Ingrese la url de la imagen 2, por favor!");
// const urlImagen3 = prompt("Ingrese la url de la imagen 3, por favor!");
// //Seleccionamos los elementos (img) del html
// const imagen1 = document.querySelector("#imagen-1");
// const imagen2 = document.querySelector("#imagen-2");
// const imagen3 = document.querySelector("#imagen-3");
// //Agregamos el atributo source a cada elemento y su respectivo valor que son los ingresados via el prompt
// imagen1.setAttribute("src", urlImagen1);
// imagen2.setAttribute("src", urlImagen2);
// imagen3.setAttribute("src", urlImagen3);
// //Seteamos un ancho definido para las imagenes
// imagen1.setAttribute("width", "300px");
// imagen2.setAttribute("width", "300px");
// imagen3.setAttribute("width", "300px");

//MANERA IDEAL DE HACERLO
// const imagenes = document.querySelectorAll('.imagen');
// imagenes.forEach((imagen, i) => {
//     const urlImagen = prompt("Ingrese la url de la imagen " + (i+1) +", por favor");

//     imagen.setAttribute("src", urlImagen)
//     imagen.setAttribute("width", "300px");
// });

//Ejercicio en grupo
//ETAPA 1 y 2
// const imagenes = document.querySelectorAll(".imagen");

// const divsTarjetas = document.querySelectorAll("div.tarjeta");


// divsTarjetas.forEach((divTarjeta, i) => {
//   const urlImagen = prompt("Ingrese una imagen!")
//   const anchor = document.createElement("a");
//   anchor.setAttribute("href", urlImagen);
//   anchor.classList.add("anchor-img");
//   anchor.setAttribute("target", "_blank");
//   divTarjeta.appendChild(anchor);
//   anchor.appendChild(imagenes[i]);
//   imagenes[i].setAttribute("src", urlImagen);
//   imagenes[i].setAttribute("width", "300px");
// });

//ETAPA 3
const padreTemplate = document.querySelector(".contenedor");

function crearTemplate() {
   for (let i = 0; i < 2; i++) {
       const link = prompt("Ingresa el hipervínculo de la imagen " + (i+1));
       const rutaImagen = prompt("Ingresa la ruta de la imagen " + (i+1));
       
       const template = `
       <div class="tarjeta">
           <a href="${link}" target="_blank"><img src="${rutaImagen}" class="imagen" width="300px" alt="imagen-${i+1}" id="imagen-${i+1}" /></a> 
       </div>
        `;
         
        //padreTemplate.appendChild(template); POR QUE NO FUNCIONA? 
        padreTemplate.innerHTML += template;
    }; 
}

crearTemplate();


/* 
-Nodo padre: div.contenedor
-Nodo hijo repetitivo: div.tarjeta > a > img
-Explicación: 
*/

