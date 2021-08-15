let laPastoraLocalData = [
    
    
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/La_Pastora/4589.jpg'
     },
     {
      'id':'aaah',
      'href':'#img8',
      'picture':'../image/casas/La_Pastora/3123.jpg'
       },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/La_Pastora/4.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/La_Pastora/2.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/La_Pastora/4593.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/La_Pastora/5.jpg'
     },
     {
      'id':'aaaa',
      'href':'#img1',
      'picture':'../image/casas/La_Pastora/4138.jpg'
    },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/La_Pastora/6.jpg'
     }
   ]

   loadGalery("idLaPastoraLocal",laPastoraLocalData)

   
   
/*Abre el Lightbox*/

const imagenesLaPastora = document.querySelectorAll('#idLaPastoraLocal img');

const abreLightboxLaPastora = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesLaPastora).indexOf(event.target);
 };
 
 imagenesLaPastora.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxLaPastora);
 });

 const adelantaImagenLaPastora = () => {
   if (indiceImagen === imagenesLaPastora.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesLaPastora[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenLaPastora);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenLaPastora = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesLaPastora.length;
   }
   imagenActiva.src = imagenesLaPastora[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenLaPastora);






