$('body').css({'overflow':'visible'});
$('#banner .holder').delay(1000).queue( function(next){$('#banner .holder').css({'opacity':'1','top':'110px'}); next();  });
// will fade out the white DIV that covers the website.
//height of divs
var viewport_width = window.innerWidth;
var viewport_height = window.innerHeight;
$('#banner').height((viewport_height)+10);
$('#repair').height((viewport_height)+10);
$('#story').height((viewport_height)+10);
$('#contact').height((viewport_height)+10);
$('#products').height((viewport_height)+10);

//set top about
$("#repair .content").css("margin-top", ($("#repair .content").height()/2)*(-1));
$("#products .content").css("margin-top", ($("#products .content").height()/2)*(-1));
//set top location
$(window).resize(function() {
	//height of divs
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;
	$('#banner').height((viewport_height)+10);
	$('#repair').height((viewport_height)+10);
	$('#story').height(viewport_height);
	$('#contact').height((viewport_height)+10);
	$('#products').height((viewport_height)+10);

	//set top
	$("#repair .content").css("margin-top", ($("#repair .content").height()/2)*(-1));
	$("#products .content").css("margin-top", ($("#products .content").height()/2)*(-1));
	//set top location
		
});	

//animate down icon
reanimate();
function reanimate(){
	$('.down-arrow').animate({bottom:60},1000).animate({bottom:80},1000, function(){
		setTimeout(reanimate, 0000);
	});
}

//page links
// Cache selectors
var lastId,
topMenu = $("#header .navbar-nav .link"),
topMenuHeight = topMenu.outerHeight(),
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
	  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
	  scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
	 if ($(this).offset().top < fromTop)
	   return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
	   lastId = id;
	   // Set/remove active class
	   menuItems
		 .parent().removeClass("active")
		 .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
$('a.down-arrow[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('.navbar-nav li a').removeClass('active');
		$('.navbar-nav li:first-child a').addClass('active');	
		$('html,body').animate({
		  scrollTop: target.offset().top+10
		}, 1000);
		return false;
	  }
	}
});	
$('a.ctabtn[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('.navbar-nav li a').removeClass('active');
		$('.navbar-nav li:first-child a').addClass('active');	
		$('html,body').animate({
		  scrollTop: target.offset().top+10
		}, 1000);
		return false;
	  }
	}
});	
$('.navbar-brand').click(function() {
	$('.navbar-nav li a').removeClass('active');
	$('html,body').animate({
	  scrollTop: 0
	}, 1000);
	return false;
});	


$(function(){
	// Trigger maximage
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout: 2000,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1,
			after: function(last,current){
				// console.log($(current).find('.light-text').html());
			}
		}
	});
});


$(function(){
	// Trigger maximage
	$('#maximage2').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout: 2000,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1,
			after: function(last,current){
				// console.log($(current).find('.light-text').html());
			}
		}
	});
});

