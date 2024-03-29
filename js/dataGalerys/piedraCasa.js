let piedraCasaData = [
    {
       'id':'aaaa',
       'href':'#img1',
       'picture':'../image/casas/piedraCasa/4549.jpg'
    },
    {
        'id':'aaab',
        'href':'#img2',
        'picture':'../image/casas/piedraCasa/4568.jpg'
     },
     {
        'id':'aaac',
        'href':'#img3',
        'picture':'../image/casas/piedraCasa/4591.jpg'
     },
     {
        'id':'aaad',
        'href':'#img4',
        'picture':'../image/casas/piedraCasa/4612.jpg'
     },
     {
        'id':'aaae',
        'href':'#img5',
        'picture':'../image/casas/piedraCasa/4645.jpg'
     },
     {
        'id':'aaaf',
        'href':'#img6',
        'picture':'../image/casas/piedraCasa/4655.jpg'
     },
     {
        'id':'aaag',
        'href':'#img7',
        'picture':'../image/casas/piedraCasa/4662.jpg'
     },
     {
        'id':'aaah',
        'href':'#img8',
        'picture':'../image/casas/piedraCasa/4668.jpg'
     },
     {
        'id':'aaai',
        'href':'#img9',
        'picture':'../image/casas/piedraCasa/4684.jpg'
     },
     {
        'id':'aaaj',
        'href':'#img10',
        'picture':'../image/casas/piedraCasa/4712.jpg'
     },
     {
        'id':'aaak',
        'href':'#img11',
        'picture':'../image/casas/piedraCasa/4716.jpg'
     },
     {
        'id':'aaal',
        'href':'#img12',
        'picture':'../image/casas/piedraCasa/4726.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4744.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4809.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4844.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4856.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4891.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4898.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4900.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4912.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4917.jpg'
     },
     {
        'id':'aaam',
        'href':'#img13',
        'picture':'../image/casas/piedraCasa/4920.jpg'
     }
]

 loadGalery('idGaleryPiedraCasa',piedraCasaData)


/*Abre el Lightbox*/

const imagenesPiedraCasa = document.querySelectorAll('#idGaleryPiedraCasa img');

const abreLightboxPiedraCasa = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesPiedraCasa).indexOf(event.target);
 };
 
 imagenesPiedraCasa.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxPiedraCasa);
 });

 const adelantaImagenPiedraCasa = () => {
   if (indiceImagen === imagenesPiedraCasa.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesPiedraCasa[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenPiedraCasa);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenPiedraCasa = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesPiedraCasa.length;
   }
   imagenActiva.src = imagenesPiedraCasa[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenPiedraCasa);

