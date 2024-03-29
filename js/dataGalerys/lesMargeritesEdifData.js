let lesMargeritesEdifData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/Les_Margarites/4192.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/Les_Margarites/4204.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/Les_Margarites/4206.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/Les_Margarites/4177.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/Les_Margarites/4197.jpg'
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/Les_Margarites/4518.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/Les_Margarites/4179.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/3712.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/3779.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/3685.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/3798.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/3681.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/3685.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/3980.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/4468.jpg'
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/Les_Margarites/3835.jpg'
     },
     {
        'id':'aaai',
        'href':'#img9', 
        'picture':'../image/casas/Les_Margarites/3846.jpg'
     },
     {
        'id':'aaaj',
        'href':'#img10',
        'picture':'../image/casas/Les_Margarites/3852.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Les_Margarites/1.jpg'
     },
     {
        'id':'aaak',
        'href':'#img11',
        'picture':'../image/casas/Les_Margarites/3941.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/Les_Margarites/3952.jpg'
     }

]

   loadGalery("idLesMargeritesEdif",lesMargeritesEdifData)

   
/*Abre el Lightbox*/

const imagenesLesMargeritesedif = document.querySelectorAll('#idLesMargeritesEdif img');

const abreLightboxLesMargeritesedif = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesLesMargeritesedif).indexOf(event.target);
 };
 
 imagenesLesMargeritesedif.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxLesMargeritesedif);
 });

 const adelantaImagenLesMargeritesedif = () => {
   if (indiceImagen === imagenesLesMargeritesedif.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesLesMargeritesedif[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenLesMargeritesedif);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenLesMargeritesedif = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesLesMargeritesedif.length;
   }
   imagenActiva.src = imagenesLesMargeritesedif[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenLesMargeritesedif);




