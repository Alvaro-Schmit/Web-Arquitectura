let barrioPribadoData = [
    {
       'id':'aa',
       'href':'#barrioPribado1',
       'picture':'../image/casas/barrioPribado/9.jpg '
    },
    {
        'id':'ab',
        'href':'#barrioPribado2',
        'picture':'../image/casas/barrioPribado/10.jpg '
     },
     {
        'id':'ac',
        'href':'#barrioPribado3',
        'picture':'../image/casas/barrioPribado/12.jpg '
     },
     {
        'id':'ad',
        'href':'#barrioPribado4',
        'picture':'../image/casas/barrioPribado/14.jpg '
     },
     {
        'id':'ae',
        'href':'#barrioPribado5',
        'picture':'../image/casas/barrioPribado/16.jpg '
     },
     {
        'id':'af',
        'href':'#barrioPribado6',
        'picture':'../image/casas/barrioPribado/17.jpg'
     },
     {
        'id':'ag',
        'href':'#barrioPribado7',
        'picture':'../image/casas/barrioPribado/18.jpg'
     },
     {
        'id':'ah',
        'href':'#barrioPribado8',
        'picture':'../image/casas/barrioPribado/21.jpg'
     },
     {
        'id':'ai',
        'href':'#barrioPribado9',
        'picture':'../image/casas/barrioPribado/23.jpg'
     },
     {
        'id':'aj',
        'href':'#barrioPribado10',
        'picture':'../image/casas/barrioPribado/28.jpg'
     },
     {
        'id':'ak',
        'href':'#barrioPribado11',
        'picture':'../image/casas/barrioPribado/5391.jpg'
     },
     {
        'id':'al',
        'href':'#barrioPribado12',
        'picture':'../image/casas/barrioPribado/5429.jpg'
     },
     {
        'id':'am',
        'href':'#barrioPribado13',
        'picture':'../image/casas/barrioPribado/5434.jpg'
     },
     {
        'id':'am',
        'href':'#barrioPribado13',
        'picture':'../image/casas/barrioPribado/5477.jpg'
     },
     {
        'id':'am',
        'href':'#barrioPribado13',
        'picture':'../image/casas/barrioPribado/5526.jpg'
     }

]

loadGalery("idGaleryBarrioPrivado",barrioPribadoData)


     
   
/*Abre el Lightbox*/

const imagenesBarrioPrivado = document.querySelectorAll('#idGaleryBarrioPrivado img');

const abreLightboxBarrioPrivado = (event) => {
   imagenActiva.src = event.target.src;
   lightbox.style.display = 'flex';
   indiceImagen = Array.from(imagenesBarrioPrivado).indexOf(event.target);
 };
 
 imagenesBarrioPrivado.forEach((imagen) => {
   imagen.addEventListener('click', abreLightboxBarrioPrivado);
 });

 const adelantaImagenBarrioPrivado = () => {
   if (indiceImagen === imagenesBarrioPrivado.length - 1) {
     indiceImagen = -1;
   }
   imagenActiva.src = imagenesBarrioPrivado[indiceImagen + 1].src;
   indiceImagen++;
 };
 
 
 btnAdelanta.addEventListener('click', adelantaImagenBarrioPrivado);
 
 /*Retrocede la Imagen*/
 
 const retrocederImagenBarrioPrivado = () => {
   if (indiceImagen === 0) {
     indiceImagen = imagenesBarrioPrivado.length;
   }
   imagenActiva.src = imagenesBarrioPrivado[indiceImagen - 1].src;
   indiceImagen--;
 };
 
 btnRetrocede.addEventListener('click', retrocederImagenBarrioPrivado);



