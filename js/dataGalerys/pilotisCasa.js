let pilotisCasaData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/Casa_Pilotis/4345.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/Casa_Pilotis/4358.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/Casa_Pilotis/4364.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/Casa_Pilotis/4389.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/Casa_Pilotis/4394.jpg'
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/Casa_Pilotis/4418.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/Casa_Pilotis/4426.jpg'
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/Casa_Pilotis/4470.jpg '
     },
     {
        'id':'aaai',
        'href':'#img9',
        'picture':'../image/casas/Casa_Pilotis/4488.jpg'
     },
     {
        'id':'aaaj',
        'href':'#img10',
        'picture':'../image/casas/Casa_Pilotis/4499.jpg'
     },
     {
        'id':'aaak',
        'href':'#img11',
        'picture':'../image/casas/Casa_Pilotis/4512.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/Casa_Pilotis/4522.jpg'
     }

]


loadGalery('idGaleryPilotisCasa',pilotisCasaData)


/*Abre el Lightbox*/

const imagenesPilotis = document.querySelectorAll('#idGaleryPilotisCasa img');

const abreLightbox = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesPilotis).indexOf(event.target);
 };
 
 imagenesPilotis.forEach((imagen) => {
   imagen.addEventListener('click', abreLightbox);
 });


 const adelantaImagen = () => {
   if (indiceImagen === imagenesPilotis.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesPilotis[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagen);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagen = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesPilotis.length;
   }
   imagenActiva.src = imagenesPilotis[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagen);

