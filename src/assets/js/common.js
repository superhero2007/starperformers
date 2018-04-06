$(document).ready(function() {

    $(".owl-1").owlCarousel({
      items: 1,
      nav: false,
      dots: false,
      smartSpeed : 1000,
      loop: true,
    });

    // $('select').niceSelect();

    $(".section-3 .btn-group").on("click", "button", function () {
    	$(this).siblings("button").removeClass("btn-active");
    	$(this).addClass("btn-active");
    	$(this).closest(".section-3").removeClass("professionals owners customers");
    	if($(this).hasClass("professionals-link")) 
    		$(this).closest(".section-3").addClass("professionals")
    	if($(this).hasClass("owners-link")) 
    		$(this).closest(".section-3").addClass("owners")
    	if($(this).hasClass("customers-link")) 
    		$(this).closest(".section-3").addClass("customers")
    })

    $("#sandwich").on("click", function() {
      $(this).toggleClass('active');
      $("body").toggleClass('sidebar-in');
    });

})