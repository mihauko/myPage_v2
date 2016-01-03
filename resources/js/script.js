$(document).ready(function(){
/*Sticky navigation*/ 
	$('.js--section-profile').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px'
	});

/*Scroll on buttons*/ 
	// $('.js--scroll-to-profile').click(function(){
	// 	$('html, body').animate({scrollTop: $('.js--section-profile').offset().top}, 1000);
	// })
	// $('.js--scroll-to-hobby').click(function(){
	// 	$('html, body').animate({scrollTop: $('.js--section-').offset().top}, 1000);
	// })

	/*navigation scroll*/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /* Hobby Gallery*/ 
  $(".hobby-col-1").mouseover(function(){
  	$(".hobby-col-1 .hobby").css({"visibility": "visible","opacity": "1", "transition": "visibility 1s, opacity 1s"});
  });
  $(".hobby-col-1").mouseout(function(){
  	$(".hobby-col-1 .hobby").css({"visibility": "hidden", "opacity": "0", "transition": "visibility 1s, opacity 1s"});
  });
  $(".hobby-col-2").mouseover(function(){
  	$(".hobby-col-2 .hobby").css({"visibility": "visible","opacity": "1", "transition": "visibility 1s, opacity 1s"});
  });
  $(".hobby-col-2").mouseout(function(){
  	$(".hobby-col-2 .hobby").css({"visibility": "hidden", "opacity": "0", "transition": "visibility 1s, opacity 1s"});
  });
  $(".hobby-col-3").mouseover(function(){
  	$(".hobby-col-3 .hobby").css({"visibility": "visible","opacity": "1", "transition": "visibility 1s, opacity 1s"});
  });
  $(".hobby-col-3").mouseout(function(){
  	$(".hobby-col-3 .hobby").css({"visibility": "hidden", "opacity": "0", "transition": "visibility 1s, opacity 1s"});
  });

  $(".profile-education-buttons > .btn").click(function(){
    $('.popup').css("display", "block");
    $('body, html').addClass("popup-on-body");
    if($(this).hasClass("btn-work")){
      $('.profile-work').css("display", "block");
    }
    else {
      $('.profile-studies').css("display", "block");
    }
    
  })
  $(".popup-exit").click(function(){
    $('.popup, .profile-work, .profile-studies').css("display", "none");
    $('body, html').removeClass("popup-on-body");
  })
});