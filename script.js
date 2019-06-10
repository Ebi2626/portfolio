(function ($) {
// Variables necessery to intro animation
const logo = '<div class="mainLogoBox"><img class="mainLogo mx-auto" src="logo.PNG" style="position: relative;"></div>';
const header = '<div class="mainDisplay"><h1 class="mainHeaderText display-4">Edwin Harmata<br>Web Developer</h1></div>';
const height = $(window).outerHeight(true) - $("nav").outerHeight(true);
const html = '<p id="html">HTML (<b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>anguage) is the standard markup language for creating Web pages</p>'
const css = '<p id="css">CSS (<b>C</b>ascading <b>S</b>tyle <b>S</b>heets) is a language that describes the style of an HTML document.</p>'
const rwd = '<p id="rwd">RWD (<b>R</b>esponsive <b>W</b>eb <b>D</b>esign) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.</p>'
const bootstrap = '<p id="bootstrap"><b>Bootstrap</b> is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.</p>'
const jquery = '<p id="jq"><b>jQuery</b> is a lightweight, "write less, do more", JavaScript library. </p>'
// First part intro animation - displaying text
$(document).ready(function(){
	$("body").height(height);
	$("nav").hide();
	$("img").hide();
	$("ul").hide();
	$("main").hide();
	$("footer").hide();
	$("header").append(header).hide().fadeIn(2000).addClass("align-self-center");
	});
// Second part intro animation - displaying everything
$(document).ready(function(){
	$(".mainDisplay").append(logo);
	$("img").fadeOut(0);
	setTimeout(function(){
		$("img").fadeIn(1500);
	},1500);
	setTimeout(function(){
		$(".mainDisplay").slideUp(1000);
	},3000);
	setTimeout(function(){
		$(".mainLogoBox").slideUp(1000);
	},3000);
});
$(document).ready(function(){
	setTimeout(function(){
		$("img").fadeIn(500);
	}, 4000);
	setTimeout(function(){
	$("nav").slideDown(500);
	}, 5500);
	setTimeout(function(){
	$("ul").slideDown(500);
	$("main").fadeIn(500);
	$("footer").fadeIn(500);
	}, 6000);
});
// Animation of text below the animated circle with technology icons
$(document).ready(function(){
	$("#si1").hover(function(){
		$("#changingText").append(html);
		},
		function(){
			$("#html").remove();
		});
	$("#si2").hover(function(){
		$("#changingText").append(css);
		},
		function(){
			$("#css").remove();
		});
	$("#si3").hover(function(){
		$("#changingText").append(rwd);
		},
		function(){
			$("#rwd").remove();
		});
	$("#si4").hover(function(){
		$("#changingText").append(bootstrap);
		},
		function(){
			$("#bootstrap").remove();
		});
	$("#si5").hover(function(){
		$("#changingText").append(jquery);
		},
		function(){
			$("#jq").remove();
		});
	});
// Script for displaying gifs in myProjects page
		$(document).ready(function(){
		var curtain = '<div class="curtain"></div>';
		var displaySurvey = '<div class="gifDisplay" id="gifPlace"><img class="gif" src="survey.gif"></div>';
		var displayjQuery = '<div class="gifDisplay" id="gifPlace"><img class="gif"src="jQuery.gif"></div>'; 
		var displayGame = '<div class="gifDisplay" id="gifPlace"><img class="gif"src="game.gif"></div>'; 
		var displayPage = '<div class="gifDisplay" id="gifPlace"><img class="gif"src="otg.gif"></div>';

			$("#survey").click(function Survey(){
				setTimeout(function(){
					$("#wholeProject").append(displaySurvey);
			},300);
				$("#quote").addClass(".opc-off");
				$(displaySurvey).ready(function(){
					$("*").click(function(){
						$("#gifPlace").remove();
						$("#quote").removeClass(".opc-off");
					});
				});
			});

			$("#jquery").click(function jQuery(){
				setTimeout(function(){
					$("#wholeProject").append(displayjQuery);
			},300);
				$(".quote").css('opacity', '0.3');
				$(displayjQuery).ready(function(){
					$("*").click(function(){
						$("#gifPlace").remove();
						$(".quote").css('opacity', '1');
					});
				});
			});
				
			$("#game").click(function Game(){
				setTimeout(function(){
					$("#wholeProject").append(displayGame);
			},300);
				$(".quote").css('opacity', '0.3');
				$(displayGame).ready(function(){
					$("*").click(function(){
						$("#gifPlace").remove();
						$(".quote").css('opacity', '1');
					});
				});
			});
	
			$("#otg").click(function OTG(){
				setTimeout(function(){
					$("#wholeProject").append(displayPage);
			},300);
				$(".quote").css('opacity', '0.3');
				$(displayPage).ready(function(){
					$("*").click(function(){
						$("#gifPlace").remove();
						$(".quote").css('opacity', '1');
					});
				});
			});
		});
// Script to removing or adding feather img in contact
			$(document).ready(function(){
				if ($(window).outerWidth(true) < 992){
							$("#feather").remove();
				};
			});
		$(document).ready(function(){
			$(window).resize(function(){
				if ($(window).outerWidth(true) < 992){
					$("#feather").remove();
				};
			});
		});

		$(document).ready(function(){
			$(window).resize(function(){
				if ($("#feather").length > 0){
					$("#feather").css('opacity', '0.3');
				} else if ($(window).outerWidth(true) > 992){
						$("#form").after('<div class="offset-1 offset-md-0 col-4 pl-4" id="feather"><img src="feather.png" alt="feather" class="feather pl-4"></div>');
					};
			});
		});
// Fixing bootstrap menu with automatic hiding after choosing its one element
				$(document).ready(function(){
					$(".nav-link").click(function(){
						setTimeout(function(){
							$("#collapsibleNavbar").toggle(300);
						}, 300);
					});
					$("button").click(function(){
						$("#collapsibleNavbar").toggle(300);
					});
				});
})(jQuery);
