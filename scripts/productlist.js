
function myFunction(x) {
    $("#navbar div").click(function() {
        $("#navbar ul").slideToggle();
        $("#navbar ul ul").css("display", "none");
    });
    
    $("#navbar ul li").click(function() {
        $("ul ul").slideUp();
        $(this).find('ul').slideToggle();
    });
    
    $(window).resize(function() {
        if($(window).width() > 768) {
              $("navbar ul").removeAttr('style');
        }
        $("#navbar ul ").css("display", "");
    });
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
//  x.addListener(myFunction) // Attach listener function on state changes