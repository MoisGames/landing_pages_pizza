// Can also be used with $(document).ready()
$(window).on('load', function() { /*on v 3.0 Jquery*/
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 300,
      itemMargin: 70,
      useCSS: true,	
      touch: true,
      minItems: 1,
      maxItems: 3,
      move: 1
    });
  });