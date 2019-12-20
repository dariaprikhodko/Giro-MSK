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

  // var fActive = '';
 
  // function filterColor(color){
  //  if(fActive != color){
  //  $('product-list__item').filter('.'+color).slideDown();
  //  $('product-list__item').filter(':not(.'+color+')').slideUp();
  //  fActive = color;
  //  }
  // }
   
  // $('.f-red').click(function(){ filterColor('red'); });
  // $('.f-blue').click(function(){ filterColor('blue'); });
  // $('.f-green').click(function(){ filterColor('green'); });
   
  // $('.f-all').click(function(){
  //  $('div').slideDown();
  //  fActive = 'all';
  // });

// <div class="wrapper"> 
//   <ul class="clear">
//     <li class="button all-i" data-filter="all" tabindex="-1">all</li>
//     <li class="button site-i" data-filter="site" tabindex="-2">site</li>
//     <li class="button foto-i" data-filter="foto" tabindex="-3">foto</li>
//     <li class="button template-i" data-filter="template" tabindex="-4">template</li>
//   </ul>
//   <div class="items clear">

//     <div class="item elem site">site</div>
//     <div class="item elem foto">foto</div>
//     <div class="item elem site">site</div>
//     <div class="item elem foto">foto</div>
//     <div class="item elem template">template</div>
//     <div class="item elem foto">foto</div>
//     <div class="item elem template">template</div>
//     <div class="item elem site">site</div>
//     <div class="item elem template">template</div>
//     <div class="item elem site">site</div>
//     <div class="item elem foto">foto</div>
//     <div class="item elem site">site</div>
//     <div class="item elem foto">foto</div>
//     <div class="item elem template">template</div>
//     <div class="item elem foto">foto</div>
//     <div class="item elem template">template</div>
//     <div class="item elem site">site</div>
//     <div class="item elem template">template</div>
//   </div>
// </div>

  // $(document).ready(function(){
  //   $('.new-ones').click(function(){
  //     var value = $(this).attr('data-filter');
  //     var elem = $('.product-list__item');
  //     if(value == 'new'){
  //       $(elem).show("500");
  //     }
  //     else{
  //       $(elem).not("."+value).hide("500");
  //       $(elem).filter("."+value).show("500");
  //     }
  //   });
  // })




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
