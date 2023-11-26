$('img[data-enlargable]').addClass('img-enlargable').click(function () {
    var src = $(this).attr('src');
    $('<div class="gallery">').css({
        opacity: '0',
        background: 'RGBA(0,0,0,.5)',
        backgroundSize: 'contain',
        width: '100%', height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0', left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 500ms'
    }).appendTo('body');
    $('<div class="displayer">').appendTo($('.gallery'))
    $('<img class="image">').attr('src', src).css({
        cursor: 'zoom-out',
        height: '95vh',
        opacity: '0',
        borderRadius: '12px',
        transition: 'all 500ms'}).click(function () {
            $('.gallery').css('opacity','0');
            setTimeout(function () {$('.gallery').remove();}, 300)
        
        }).appendTo($('.displayer'));

    setTimeout(function () {
        $('.gallery').css('opacity', '1')[0];
        $('.image').css('opacity', '1')[0];
    }
        , 5);
});