(function($){
  $(function(){

        $(document).ready(function(){
            
            $("img").unveil(500, function() {
              $(this).load(function() {
                this.style.opacity = 1;
              });
            });

            $('#nav').localScroll(800);
            //.parallax(xPosition, speedFactor, outerHeight) options:
            //xPosition - Horizontal position of the element
            //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
            //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
            $('body').parallax("25%", -0.25, true);
            $('#intro').parallax("25%", 0.1);
            $('#third').parallax("25%", 0.15);
            $('#render').parallax("25%", 0.15);
        })

  }); // end of document ready
})(jQuery); // end of jQuery name space