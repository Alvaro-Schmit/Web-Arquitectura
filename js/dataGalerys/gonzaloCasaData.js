let gonzaloCasaData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/gonzaloCasa/3245.jpg '
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/gonzaloCasa/3250.jpg '
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/gonzaloCasa/3256.jpg '
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/gonzaloCasa/3267.jpg '
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/gonzaloCasa/3270.jpg '
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/gonzaloCasa/3376.jpg '
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/gonzaloCasa/3378.jpg '
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/gonzaloCasa/título-13.jpg '
     },
     {
        'id':'aaai',
        'href':'#img9',
        'picture':'../image/casas/gonzaloCasa/título-3.jpg'
     },
     {
        'id':'aaaj',
        'href':'#img10',
        'picture':'../image/casas/gonzaloCasa/título-4.jpg'
     },
     {
        'id':'aaak',
        'href':'#img11',
        'picture':'../image/casas/gonzaloCasa/título-6.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/gonzaloCasa/título-7.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/gonzaloCasa/título-8.jpg'
     }

]

   loadGalery("idGaleryGonzaloCasa",gonzaloCasaData)



     
   
/*Abre el Lightbox*/

const imagenesGonzaloCasa = document.querySelectorAll('#idGaleryGonzaloCasa img');

const abreLightboxGonzaloCasa = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesGonzaloCasa).indexOf(event.target);
 };
 
 imagenesGonzaloCasa.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxGonzaloCasa);
 });

 const adelantaImagenGonzaloCasa = () => {
   if (indiceImagen === imagenesGonzaloCasa.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesGonzaloCasa[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenGonzaloCasa);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenGonzaloCasa = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesGonzaloCasa.length;
   }
   imagenActiva.src = imagenesGonzaloCasa[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenGonzaloCasa);



