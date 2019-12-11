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
    });
  });

});
