$(function(){

  var one = Math.floor($('.about').position().top)+10;
  var  val = false;
  var nav = $('.navbar').offset().top + $('.navbar').outerHeight(true);
  var vr = Math.floor($('.work').position().top)-10;
  var lan = vr+$('#vr').height();
  var rest = lan+$('#lan').height();
  var net = rest+$('#rest').height()


///////////// Skills effects ///////////////////////
  $(window).scroll(function() {

    if($(window).scrollTop() >= one && val === false)
      {
         $('.1').animate({width:'90%'},150);
         $('.2').animate({width:'85%'},200);
         $('.3').animate({width:'80%'},250);
         $('.4').animate({width:'80%'},300);
         $('.5').animate({width:'70%'},350);
         $('.6').animate({width:'70%'},400);
         $('.7').animate({width:'50%'},450);
         $('.8').animate({width:'50%'},500);
         val = true;
       }
    });

/////////// Navbar effects //////////////////////

$(window).scroll(function() {

  if($(window).scrollTop() >= nav )
  {
    $('.navbar').addClass('navbar-fixed-top animated fadeInLeft ');
  }
  else{

    $('.navbar').removeClass('navbar-fixed-top animated fadeInLeft').addClass('animated bounce');
  }
});

///////////// work effects //////////////////////

$(window).scroll(function() {

  if($(window).scrollTop() >= vr )
    {
      $('#vr').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
    }

    if($(window).scrollTop() >= lan)
    {
      $('#lan').removeClass('animated fadeOutRight').addClass('animated fadeInRight');
    }

    if($(window).scrollTop() >= rest)
    {
      $('#rest').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
    }

    if($(window).scrollTop() >= net)
    {
      $('#net').removeClass('animated fadeOutRight').addClass('animated fadeInRight');
    }

  });

////////////////Scrolling effects/////////////////////

  $('li>a').on('click',function (e) {
    e.preventDefault();
     $("body,html").animate({
       scrollTop: $( $(this).attr('href') ).offset().top},1800);
  });


});
