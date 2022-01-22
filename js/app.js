$(document).ready(function(){
    $('.slider').slick({
            arrows:false,
            dots:true,
            appendDots:'.slider-dots',
            dotsClass:'dots'
    })    
})
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
 location.href = "http://127.0.0.1:5500/index.html#"; 
