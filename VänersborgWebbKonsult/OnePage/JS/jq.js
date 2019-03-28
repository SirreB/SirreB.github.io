$( document ).ready(function() {
  $("#knapp1").show();
  $("#knapp2").show();
  $("nav").show();
  $("nav").css({"display":"flex"});
  $("body").css({"overflow-y":"hidden"});


  $("#username").keyup(function(){

        var re = /^[a-ö]{3,15}$/;    //måste börja med 2 st nollor, sedan 0-9 minst 6st max 15 där efter får de ej finnas något

        var OK = re.exec($('#username').val());

        if (!OK) {

        $("#text2").text("Användarnamnet måste vara mellan 3-15 bokstäver");

        }
        else{

          $('#text2').text("Godkänt");

        }

        if ($('#username').val().length===0){
            $("#text2").text("")

        }


        });
        $("#pass").keyup(function(){

              var re = /^[a-ö]{3,15}$/;    //måste börja med 2 st nollor, sedan 0-9 minst 6st max 15 där efter får de ej finnas något

              var OK = re.exec($('#pass').val());

              if (!OK) {

              $("#text3").text("Lösenordet måste vara mellan 3-15 bokstäver");

              }
              else{

                $('#text3').text("Godkänt");

              }

              if ($('#pass').val().length===0){
                  $("#text3").text("")

              }


              });
    });



$("nav").mouseenter(function(){
$("nav").css({opacity:1});


});
$("nav").mouseleave(function(){



$("nav").css({opacity:0.5});

});


$("#Services").click(function(){

      $('html, body').animate({
          scrollTop: $("#second").offset().top
      }, 2000);

});
$("#Home").click(function(){

      $('html, body').animate({
          scrollTop: $("#first").offset().top
      }, 2000);

});
$("#Info").click(function(){

      $('html, body').animate({
          scrollTop: $("#third").offset().top
      }, 2000);

});
$("#Contacts").click(function(){

      $('html, body').animate({
          scrollTop: $("#fourth").offset().top
      }, 2000);

});

$("#knapp1").click(function(){
var rv=$('#window').css('right');
if(rv=="1260px"){

$("#window").animate({right:"+=0px"});

}else{

$("#window").animate({right:"+=420px"});

}

});
$("#knapp2").click(function(){
  var rv=$('#window').css('right');   //rv är bara en variabel för att kolla vart Bilderna är
  if(rv=="0px"){

  $("#window").animate({right:"+=0px"});    //Gör så att den inte rör sig alls

  }else{

  $("#window").animate({right:"-=420px"});//Här är den vanliga koden så att den kan röra sig
}
});
