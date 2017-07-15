document.addEventListener('DOMContentLoaded', function(event) {
  var navTrigger = document.getElementById('nav-trigger');
  var menuList = document.getElementsByClassName('menu__list');
  var menuContainer = document.getElementsByClassName('menu__container')[0];

  menuAnimation();

  function menuAnimation() {
    var navContainer = document.getElementsByClassName('container--nav');
    navTrigger.addEventListener('click', function(event) {
      event.stopPropagation();
      navTrigger.classList.toggle('active');
      menuList[0].classList.toggle('list-visable');
      menuContainer.classList.toggle('menu-higher');
      navContainer[0].classList.toggle('menu-higher');
      document.addEventListener('click', function() {
        menuContainer.classList.remove('menu-higher');
        navTrigger.classList.remove('active');
        navContainer[0].classList.remove('menu-higher');
        menuList[0].classList.remove('list-visable');
      });

    });
  }
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      if ($(window).width() < 768) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 60
        }, 1000);
      } else {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 90
        }, 1000);
      }
    }
  });

  
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 250) { // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 500);
  });
});
