$(document).ready(function () {

    function init() {
        fetchProducts();
        atualizarContagemRegressiva();
    }

    window.onload = init;

    /***************** Contador de Dias ******************/
    function atualizarContagemRegressiva() {
        var dataCasamento = new Date('2024-12-07T10:00:00');
        var agora = new Date();
        var tempoRestante = dataCasamento - agora;

        var dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        var horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        // document.getElementById('contador').textContent = dias + '' + ' dias ' + horas + ' horas ' + minutos + ' minutos ' + segundos + ' segundos para o Sim';
        document.getElementById('dias').textContent = dias.toString();
        document.getElementById('horas').textContent = horas.toString();
        document.getElementById('minutos').textContent = minutos.toString();
        document.getElementById('segundos').textContent = segundos.toString();

        setTimeout(atualizarContagemRegressiva, 1000);
    }

    /***************** Buscar Produtos ******************/
    var apiURL = 'https://script.google.com/macros/s/AKfycbywl_f3owoVg1px3PKgr9HpKyng-nz1uC7gLtVNdInSUQLupPeFDYYD-71orylpxnln/exec';

    function fetchProducts() {
        fetch(apiURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var container = document.querySelector('.gift-container');
                if (!container) {
                    return;
                }
                container.innerHTML = '';  // Limpar o conteúdo antes de adicionar novos produtos
                data.forEach(function (produto) {
                    // Definir o estado do produto com base no status
                    var produtoStatusClass = produto.status === 'OFF' ? 'product-unavailable' : '';
                    var buttonContent = produto.status === 'OFF' ? '<span class="unavailable">COMPRADO</span>' : '<a href="' + produto.link + '" target="_blank" class="btn">Comprar agora</a>';

                    var produtoHTML =
                        '<div class="gift-item ' + produtoStatusClass + '">' +
                        '<img src="' + produto.img + '" alt="' + produto.nome + '">' +
                        '<h3>' + produto.nome + '</h3>' +
                        '<p class="price">R$ ' + produto.preco + '</p>' +
                        buttonContent +
                        '</div>';

                    container.innerHTML += produtoHTML;
                });
            })
            .catch(function (error) {
                console.error('Erro ao carregar os produtos:', error);
            });
    }

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "20px 0"
                });
                $('header .member-actions').css({
                    "top": "11px",
                });
                $('header .navicon').css({
                    "top": "15px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';

        // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Casamento Jhony e Joene",

            // Event start date
            start: new Date('2024-12-07T10:00:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('2024-12-07T18:00:00'),

            // Event Address
            address: 'Santuário de Nossa Senhora do Perpétuo Socorro, Av. Arthur Bernardes, 459 - Telégrafo, Belém - PA, 66115-000, Brasil',

            // Event Description
            description: "Esperamos por você, qualquer dúvida, entre em contato com a gente!"
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
    var rsvpApiUrl = 'https://script.google.com/macros/s/AKfycbw3oZxRF-yQm66297eIrz5pvMDfG7iMse-G7vRVJr8n-T37-OyfYSr8ewZrpqSbAi2f/exec';
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $('#alert-wrapper').html(alert_markup('info', '<strong>Só um minuto!</strong> Enviando...'));

        $.post(rsvpApiUrl, data)
            .done(function (data) {
                console.log(data);
                if (data.result === "error") {
                    $('#alert-wrapper').html(alert_markup('danger', data.message));
                } else {
                    $('#alert-wrapper').html('');
                    $('#rsvp-modal').modal('show');
                }
            })
            .fail(function (data) {
                console.log(data);
                $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
            });

    });

});

/********************** Extras **********************/

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}