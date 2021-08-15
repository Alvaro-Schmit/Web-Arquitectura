let hermanaGonCasaData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/Hermana_Gonzalo/4004.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/Hermana_Gonzalo/4015.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/Hermana_Gonzalo/4025.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/Hermana_Gonzalo/4046.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/Hermana_Gonzalo/4051.jpg'
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/Hermana_Gonzalo/4062.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/Hermana_Gonzalo/4076.jpg'
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/Hermana_Gonzalo/4532.jpg'
     },
     {
        'id':'aaai',
        'href':'#img9',
        'picture':'../image/casas/Hermana_Gonzalo/4551.jpg'
     },
     {
        'id':'aaaj',
        'href':'#img10',
        'picture':'../image/casas/Hermana_Gonzalo/4562.jpg'
     },
     {
        'id':'aaak',
        'href':'#img11',
        'picture':'../image/casas/Hermana_Gonzalo/4563.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/Hermana_Gonzalo/4580.jpg'
     }

]

   loadGalery("idGaleryHermanaGonCasa",hermanaGonCasaData)


     
   
/*Abre el Lightbox*/

const imagenesHermanaDeGonz = document.querySelectorAll('#idGaleryHermanaGonCasa img');

const abreLightboxHermanaDeGonz = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesHermanaDeGonz).indexOf(event.target);
 };
 
 imagenesHermanaDeGonz.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxHermanaDeGonz);
 });

 const adelantaImagenHermanaDeGonz = () => {
   if (indiceImagen === imagenesHermanaDeGonz.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesHermanaDeGonz[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenHermanaDeGonz);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenHermanaDeGonz = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesHermanaDeGonz.length;
   }
   imagenActiva.src = imagenesHermanaDeGonz[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenHermanaDeGonz);




