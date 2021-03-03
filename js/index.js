$('.galeria-imagen').click(function(parametro) {
    var img = parametro.target.src;
    var modal = '<div class="modal1"><img class="galeria_imagen" src="' + img + '" alt=""><div class="modal1__boton">x</div></div>';

    $('body').append(modal);
})
console.log('funciona')

var prueba = ('ahora funciona')