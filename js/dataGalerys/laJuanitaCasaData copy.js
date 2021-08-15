let laJuanitaCasaData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/La_Juanita/4947.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/La_Juanita/4962.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/La_Juanita/4967.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/La_Juanita/4990.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/La_Juanita/4991.jpg'
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/La_Juanita/5007.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/La_Juanita/5010.jpg'
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/La_Juanita/5044.jpg'
     },
     {
        'id':'aaai',
        'href':'#img9',
        'picture':'../image/casas/La_Juanita/5051.jpg'
     },
     {
        'id':'aaaj',
        'href':'#img10',
        'picture':'../image/casas/La_Juanita/5070.jpg'
     },
     {
        'id':'aaak',
        'href':'#img11',
        'picture':'../image/casas/La_Juanita/5097.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/La_Juanita/5109.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/La_Juanita/5112.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/La_Juanita/5151.jpg'
     }
     ,
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/La_Juanita/5159.jpg'
     }
     ,
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/La_Juanita/5162.jpg'
     }
     ,
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/La_Juanita/5167.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/La_Juanita/5181.jpg'
     }
     ,
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/La_Juanita/5193.jpg'
     }
     

]

   loadGalery("idLaJuanitaCasa",laJuanitaCasaData)

  
   
/*Abre el Lightbox*/

const imagenesLaJuanitaCasa = document.querySelectorAll('#idLaJuanitaCasa img');

const abreLightboxLaJuanitaCasa = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesLaJuanitaCasa).indexOf(event.target);
 };
 
 imagenesLaJuanitaCasa.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxLaJuanitaCasa);
 });

 const adelantaImagenLaJuanitaCasa = () => {
   if (indiceImagen === imagenesLaJuanitaCasa.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesLaJuanitaCasa[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenLaJuanitaCasa);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenLaJuanitaCasa = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesLaJuanitaCasa.length;
   }
   imagenActiva.src = imagenesLaJuanitaCasa[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenLaJuanitaCasa);



