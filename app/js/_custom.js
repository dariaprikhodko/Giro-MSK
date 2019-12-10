document.addEventListener("DOMContentLoaded", function() {
  var slideNow = 1;
  var slideCount = $('#slidewrapper').children().length;
  var slideInterval = 2000;
  var navBtnId = 0;

  // Логика работы большого слайдер
  // перелистывание
  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
  }
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

  //Слайдер товаров



});
