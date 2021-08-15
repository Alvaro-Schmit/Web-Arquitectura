let grisCasaData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/Casa_Gris/5314.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/Casa_Gris/5321.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/Casa_Gris/5326.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/Casa_Gris/5337.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/Casa_Gris/5343.jpg'
     }
]

loadGalery("idGaleryGrisCasa",grisCasaData)


     
   
/*Abre el Lightbox*/

const imagenesGrisCasa = document.querySelectorAll('#idGaleryGrisCasa img');

const abreLightboxGrisCasa = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesGrisCasa).indexOf(event.target);
 };
 
 imagenesGrisCasa.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxGrisCasa);
 });

 const adelantaImagenGrisCasa = () => {
   if (indiceImagen === imagenesGrisCasa.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesGrisCasa[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenGrisCasa);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenGrisCasa = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesGrisCasa.length;
   }
   imagenActiva.src = imagenesGrisCasa[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenGrisCasa);





