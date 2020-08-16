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
        scrollTop: elhref.offset().top - 89
    }, 1100, 'easeInOutExpo');

    e.preventDefault();

});

// parallax

// about
$(window).on('scroll', function () {
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

    // education
    if (wScroll > $('.education').offset().top - ($(window).height() / 1.5)) {
        $('.education p').each(function (i) {
            setTimeout(function () {
                $('.education p').eq(i).addClass('show');
            }, 300 * (i + 1));
        });
    }

    // skill
    if (wScroll > $('.skill').offset().top - 500) {
        $('.b1').addClass('bShow');
        $('.b2').addClass('bShow');
    }

    // portfolio
    if (wScroll > $('.portfolio').offset().top - -350) {
        $('.portfolio .card').each(function (i) {
            setTimeout(function () {
                $('.portfolio .card').eq(i).addClass('show');
            }, 300 * (i + 1));
        });
    }

    // contact
    if (wScroll > $('.contact').offset().top - 500) {
        $('.contact i').each(function (i) {
            setTimeout(function () {
                $('.contact i').eq(i).addClass('show');
            }, 300 * (i + 1));
        });
    }
});