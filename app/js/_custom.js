document.addEventListener("DOMContentLoaded", function() {
  var slideNow = 1;
  var slideCount = $('#slidewrapper').children().length;
  var navBtnId = 0;
  var productNow = 1;
  var productCount = $('#slidewrapper-product').children().length;
  var productBtnId = 0;
  var navBtn = $('.slide-nav-btn')

  // перелистывание по кнопкам
  $('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
        translateWidth = -$('#viewport').width() * (navBtnId);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = navBtnId + 1;
    }
    // подсвечиваем активную точку
    $('.slide-nav-btn').each(function () {
      var navBtnIndex = $(this).index();
      if (navBtnIndex + 1 === slideNow) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    });
  });

  // Логика появления модального окна
  // Открыть по клику
  $('.call__link').click(function() {
    $('#modalId').removeClass('visually-hidden')
    $('#modalId').fadeIn();
  })

  // Закрыть по крестику
  $('.button-close').click(function() {
    $('#modalId').fadeOut();
    $('#modalId').addClass('visually-hidden')
  })

  // Закрыть по нажатию на Esc
  $(document).ready(function(){
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27)
        $('#modalId').fadeOut();
        $('#modalId').addClass('visually-hidden')
    })
  })
  // бургер меню
  $(function(){
    $('.icon-burger').on('click', function() {
      $(this).closest('.main-nav').toggleClass('main-nav--opened');
      $('body').addClass('stop-scroll');
      $('.icon-burger').fadeOut();
    });
  });

  // фильтр товаров
  // новинки
  $(document).ready(function(){
    $('.control-list__item[filter="new"]').click(function() {
      if ($(this).attr('val')==='off') {
        $('.control-list__item[filter]').attr('val', 'off')
        $(this).attr('val', 'on')
        $(this).addClass('focused');
        $('.control-list__item[filter="pop"]').removeClass('focused');
        console.log('!!!!!!!!')
        console.log($('.product-list__item'))
        console.log($('.product-list__item[filter="new"]'))


        $('.product-list__item').hide(300);
        $('.product-list__item[filter="new"]').show(300);
      }
    })
  });
  // популярное
  $(document).ready(function(){
    $('.control-list__item[filter="pop"]').click(function() {
      if ($(this).attr('val')==='off') {
        $('.control-list__item[filter]').attr('val', 'off')
        $(this).attr('val', 'on')
        $(this).addClass('focused');
        $('.control-list__item[filter="pop"]').removeClass('focused');
        $('.product-list > div').hide(300);
        $('.product-list > div[filter="pop"]').show(300);
      }
    })
  });

  // скидки
  $(document).ready(function(){
    $('.control-list__item[filter="discount"]').click(function() {
      if ($(this).attr('val')==='off') {
        $('.control-list__item[filter]').attr('val', 'off')
        $(this).attr('val', 'on')
        $(this).addClass('focused');
        $('.control-list__item[filter="pop"]').removeClass('focused');
        $('.product-list > div').hide(300);
        $('.product-list > div[filter="discount"]').show(300);
      }
    })
  });

  // slick slider
  $(document).ready(function(){
    $('.responsive').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.nav-btn-prev'),
      nextArrow: $('.nav-btn-next'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

});
