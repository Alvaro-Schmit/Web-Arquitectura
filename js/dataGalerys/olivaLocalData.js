let olivaLocalData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/Oliva/11.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/Oliva/3.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/Oliva/4.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/Oliva/4245.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/Oliva/4271.jpg'
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/Oliva/4279.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/Oliva/4282.jpg'
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/Oliva/4285.jpg'
     },
     {
        'id':'aaai',
        'href':'#img9',
        'picture':'../image/casas/Oliva/5.jpg'
     }

]

 loadGalery("idGaleryOlivaLocal",olivaLocalData)



/*Abre el Lightbox*/

const imagenesOlivaLocal = document.querySelectorAll('#idGaleryOlivaLocal img');

const abreLightboxOlivaLocal = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesOlivaLocal).indexOf(event.target);
 };
 
 imagenesOlivaLocal.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxOlivaLocal);
 });

 const adelantaImagenOlivaLocal = () => {
   if (indiceImagen === imagenesOlivaLocal.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesOlivaLocal[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenOlivaLocal);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenOlivaLocal = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesOlivaLocal.length;
   }
   imagenActiva.src = imagenesOlivaLocal[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenOlivaLocal);


