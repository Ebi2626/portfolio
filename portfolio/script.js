$(document).ready(function Menu(){
	$("#menuToggleBar").hide();
	var mainMenu = '<section id="menuSection" class="menuSection row justify-content-center text-center" style="height: 100vh;"><div class="col-3 text-center" id="leftMenu"><p class="menuText"><a id="menuAboutMe">About Me</a></p></div><div class="col-6" id="matrixCode"><canvas id="canvas" style="width:100%; height:100vh; font-size: 32px;"></canvas></div><div class="col-3 text-center" id="rightMenu"><p class="menuText"><a id="menuProjects">My projects</a></p></div></section>'
	var header = '<h1 class="mainHeaderText display-1 col-8 offset-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">Edwin Harmata</h1><h1 class="mainHeaderText display-1">Web Developer</h1>'
	var aboutMe = ''
	setTimeout(function(){
		$("header").append(header).hide().fadeIn(2500).addClass("align-self-center");
		$(".welcomeSection").css("box-shadow","0px 0px 3vw inset black", 2000);
		}, 500);
	setTimeout(function(){
		$("#menuToggleBar").fadeIn(2000);
	}, 3000);

	if ($("#backgroundPhoto").height() < $(window).height()){
		$("#backgroundPhoto").attr("style","height: 100vh;");
	};

	if ($(window).resize()){
		if ($("#backgroundPhoto").height() < $(window).height()){
		$("#backgroundPhoto").attr("style","height: 100vh;");
	};
	};
//Funkcja zmiany menu
$("#menuToggleBar").click(function(){
	$(".welcomeSection").remove();
	$("body").after(mainMenu);
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var t = text();
		var logo = document.getElementById('logo');
		var lines = [];
		window.setInterval(draw, 110);

		function draw() {
		  if (Math.floor(Math.random() * 2) === 0 && lines.length < 100) {
		    lines.push(new textLine());
		  }
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
		  lines.forEach(function(tl) {

		    ctx.drawImage(tl.text, tl.posX, tl.animate(), 20, 1000);
		  });
		  ctx.drawImage(logo, 100, 155, 400, 70);
		}
		function textLine() {
		  this.text = t;
		  this.posX = (function() {
		    return Math.floor(Math.random() * canvas.width);
		  })();
		  this.offsetY = -1000;
		  this.animate = function() {
		    if (this.offsetY >= 0) {
		      this.offsetY = -1000;
		    }
		    this.offsetY += 10;
		    return this.offsetY;
		  };
		}
		function text() {
		  var offscreenCanvas = document.createElement('canvas');
		  offscreenCanvas.width = "30";
		  offscreenCanvas.height = "1000";
		  offscreenCanvas.style.display = "none";
		  document.body.appendChild(offscreenCanvas);
		  var octx = offscreenCanvas.getContext('2d');
		  octx.textAlign = "center";
		  octx.shadowColor = "lightgreen";
		  octx.shadowOffsetX = 2;
		  octx.shadowOffsetY = -5;
		  octx.shadowBlur = 1;
		  octx.fillStyle = 'darkgreen';
		  octx.textAlign = "left";
		  var step = 10;
		  for (i = 0; i < 100; i++) {
		    var charCode = 0;
		    while (charCode < 60) {
		      charCode = Math.floor(Math.random() * 100);
		    }
		    octx.fillText(String.fromCharCode(charCode), 0, step);
		    step += 10;
		  }
		  return offscreenCanvas;
		};
		$("#menuToggleBar").hide();
//Koniec funkcji włączającej menu -> przejście do konkretnych sekcji

//Sekcja O mnie
		$("#leftMenu").click(function(){
			$("#menuSection").replaceWith();
		});
// Sekcja Moje projekty
		$("#rightMenu").click(function(){
			$("#menuSection").remove();
		});
		});



		
});




