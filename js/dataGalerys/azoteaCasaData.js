let azoteaCasaData = [
   
   {
      'id':'aaam',
      'href':'#img13',
      'picture':'../image/casas/Azotea/3653.jpg'
   },
   {
      'id':'aaam',
      'href':'#img13',
      'picture':'../image/casas/Azotea/3656.jpg'
   },
   {
      'id':'aaam',
      'href':'#img13',
      'picture':'../image/casas/Azotea/3666.jpg'
   },
   {
      'id':'aaam',
      'href':'#img13',
      'picture':'../image/casas/Azotea/3669.jpg'
   },
   {
      'id':'aaam',
      'href':'#img13',
      'picture':'../image/casas/Azotea/3679.jpg'
   },
   {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/Azotea/5.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/Azotea/6.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/Azotea/7.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/Azotea/1.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/Azotea/3409.jpg'
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/Azotea/3423.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/Azotea/3540.jpg'
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/Azotea/3547.jpg'
     },
     {
        'id':'aaai',
        'href':'#img9',
        'picture':'../image/casas/Azotea/3549.jpg'
     },
     {
        'id':'aaaj',
        'href':'#img10',
        'picture':'../image/casas/Azotea/3567.jpg'
     },
     {
        'id':'aaak',
        'href':'#img11',
        'picture':'../image/casas/Azotea/3583.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/Azotea/3602.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Azotea/3608.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/Azotea/3613.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/Azotea/3623.jpg'
     }
     
     


]

   loadGalery("idGaleryAzoteaCasa",azoteaCasaData)


    
   
/*Abre el Lightbox*/

const imagenesAzoteaCasa = document.querySelectorAll('#idGaleryAzoteaCasa img');

const abreLightboxAzoteaCasa = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesAzoteaCasa).indexOf(event.target);
 };
 
 imagenesAzoteaCasa.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxAzoteaCasa);
 });

 const adelantaImagenAzoteaCasa = () => {
   if (indiceImagen === imagenesAzoteaCasa.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesAzoteaCasa[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenAzoteaCasa);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenAzoteaCasa = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesAzoteaCasa.length;
   }
   imagenActiva.src = imagenesAzoteaCasa[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenAzoteaCasa);



