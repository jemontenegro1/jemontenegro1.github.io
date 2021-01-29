$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $("nav").addClass("sticky-top navbar-light bg-light");
        $("nav").removeClass("navbar-dark");
        //$(".goTop").fadeIn();
      }
      else{
        $("nav").removeClass("sticky-top navbar-light bg-light");
        $("nav").addClass("navbar-dark");
        //$(".goTop").fadeOut();
      }
    });
  
    $('.navbar-toggler').click(function(){
        $("nav").toggleClass("navbar-dark navbar-light bg-light");
    });
  
//    $(".goTop").click(function(){scroll(0,0)});
});