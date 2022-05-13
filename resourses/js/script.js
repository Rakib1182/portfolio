//MixitUp 
var mixer = mixitup('.grid-work-container');

//Scrollify 
$(function() {
    $.scrollify({
      section : ".scroll",
      setHeights: false,
      updateHash: false
    });
  });

  //Hamburger Menu
  function openMenu() {
    document.getElementById('navbar').style.height
    = "100%";
  }

  function closeMenu() {
    document.getElementById('navbar').style.height
    = "0%";
  }
  //Smoth scroll

 $(function(){
   $('.menu-items a').on('click', function(){
     $('html, body').animate({
      scrollTop: $($.attr(this,'href')).offset().top
     }, 1000);
   });
 });




 