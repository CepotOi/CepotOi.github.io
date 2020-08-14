// tahun di footer
document.getElementById('year').innerHTML = new Date().getFullYear();

// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil is href
    var href = $(this).attr('href');
    // tangkap elemen yg bersangkutan
    var elhref = $(href);

    // pindahan scroll
    $('html, body').animate({
        scrollTop: elhref.offset().top - 163
    }, 1100, 'easeInOutExpo');

    e.preventDefault();

});

// parallax

// about
$(window).on('load', function () {
    $('.pLeft').addClass('pShow');
    $('.pRight').addClass('pShow');
});

$(window).scroll(function () {

    // jumbotron
    const wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 8 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.2 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - -350) {
        $('.portfolio .card').each(function (i) {
            setTimeout(function () {
                $('.portfolio .card').eq(i).addClass('show');
            }, 300 * (i + 1));
        });

    }

    // contact
    if (wScroll > $('.portfolio').offset().top - -1000) {
        $('.contact i').each(function (i) {
            setTimeout(function () {
                $('.contact i').eq(i).addClass('show');
            }, 300 * (i + 1));
        });

    }
});