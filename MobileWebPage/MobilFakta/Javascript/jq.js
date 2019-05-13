$(document).ready(function () {

/* Ha show grejerna här, borde bara vara Navbar men kanske även Bilderna */

$(".nav").show();
$(".nav").css({"display": "flex"});



});
$("#Home").click(function(){

      $('html, body').animate({
          scrollTop: $("#main").offset().top
      }, 2000);

      navWrapper.classList.remove("scale-in-hor-left");
      navWrapper.classList.remove("show");
      navWrapper.classList.add("hide");
});
  $("#textRuta1").click(function(){

        $('html, body').animate({
            scrollTop: $("#ruta1").offset().top
        }, 2000);

        navWrapper.classList.remove("scale-in-hor-left");
        navWrapper.classList.remove("show");
        navWrapper.classList.add("hide");
  });

  $("#textRuta2").click(function(){

        $('html, body').animate({
            scrollTop: $("#ruta2").offset().top
        }, 2000);

        navWrapper.classList.remove("scale-in-hor-left");
        navWrapper.classList.remove("show");
        navWrapper.classList.add("hide");
  });
  $("#textRuta3").click(function(){

        $('html, body').animate({
            scrollTop: $("#ruta3").offset().top
        }, 2000);

        navWrapper.classList.remove("scale-in-hor-left");
        navWrapper.classList.remove("show");
        navWrapper.classList.add("hide");
  });


  $("#datorHome").click(function(){

        $('html, body').animate({
            scrollTop: $("#main").offset()
        }, 2000);
  });

  $("#datorUtsida").click(function(){

        $('html, body').animate({
            scrollTop: $("#ruta1").offset().top
        }, 2000);
  });
  $("#datorSoC").click(function(){

        $('html, body').animate({
            scrollTop: $("#ruta2").offset().top
        }, 2000);
  });
  $("#datorDisplay").click(function(){

        $('html, body').animate({
            scrollTop: $("#ruta3").offset().top
        }, 2000);
  });
