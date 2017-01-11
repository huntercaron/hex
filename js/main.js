function runCircleCanvas() {
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");

	let width  = window.innerWidth;
	let height = window.innerHeight;
	let size = 0;
	let inc = 0;
    let hexes = [];
	let booleans = [randomBoolean(), true,randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean()]
	let versionCount = 5;
	let version = Math.floor(Math.random() * (versionCount)) + 1
	//version = 3;

	function randomize() {
		let randos = [0,0,0,0,0,0,0,0,0,0];
		for (let i in randos) {
			randos[i] = (Math.random() * (30 - 0))-15;
		}
		return randos;
	}

	let randoms = [ [randomize(), randomize(), randomize(), randomize(), randomize()], [randomize(), randomize(), randomize(), randomize(), randomize()], [randomize(), randomize(), randomize(), randomize(), randomize()], [randomize(), randomize(), randomize(), randomize(), randomize()], [randomize(), randomize(), randomize(), randomize(), randomize()], [randomize(), randomize(), randomize(), randomize(), randomize()]];


	function randomBoolean() {
		return Math.random() >= 0.3;
	}

	class Hex {
		constructor(x, y, size, style, decon) {

			this.intX = x;
			this.intY = y;
			this.hInc = this.intY;
			this.style = style;
			this.size = size;
			//this.anim(x, y, speed);
			if (decon) {

			} else {
				this.draw(x, y, size);
			}

		}

		anim() {
			this.draw(this.intX, this.hInc, this.size);

			this.hInc = this.hInc + (1*this.speed);

			if ((this.hInc) > height+40)
				this.hInc = -30;
		}

		draw(x, y, size) {
			ctx.strokeStyle = this.style;

            let w = size;
            let h = w*0.865;

            ctx.save();
            ctx.translate(x-w/2,y-h/2);

    		ctx.beginPath();
    		ctx.moveTo(0,h/2);

            //outline
    		ctx.lineTo(w,h*0.5);
            ctx.lineTo(w*0.75, h);
            ctx.lineTo(w*0.25, h);
            ctx.lineTo(0, h*0.5);
            ctx.lineTo(w*0.25, 0);
            ctx.lineTo(w*0.75, 0);
            ctx.lineTo(w, h*0.5);

            //triangle 1
            ctx.lineTo(w*0.25, h);
            ctx.lineTo(w*0.25, 0);
            ctx.lineTo(w, h*0.5);

            //triangle 2
            ctx.moveTo(0, h*0.5);
            ctx.lineTo(w*0.75, 0);
            ctx.lineTo(w*0.75, h);
            ctx.lineTo(0, h*0.5);

            //middle cris crosses
            ctx.moveTo(w*0.25, 0);
            ctx.lineTo(w*0.75, h);
            ctx.moveTo(w*0.75, 0);
            ctx.lineTo(w*0.25, h);

            //middle lines
            ctx.moveTo(w*0.5, 0);
            ctx.lineTo(w*0.5, h);
            ctx.moveTo(w*0.125, h*0.75);
            ctx.lineTo(w*0.875, h*0.25);
            ctx.moveTo(w*0.125, h*0.25);
            ctx.lineTo(w*0.875, h*0.75);

    		ctx.closePath();
    		ctx.stroke();

            ctx.restore();
		}

		decuntstruct(rands) {
			let chg = 4*(Math.sin((inc*inc*0.0000006))*2);
			ctx.strokeStyle = this.style;

            let w = this.size;
            let h = w*0.865;

            ctx.save();
            ctx.translate(rands[0]*chg+this.intX-w/2,rands[0]*chg+this.intY-h/2);

    		ctx.beginPath();
    		ctx.moveTo(rands[0]*chg,rands[1]*chg+h/2);

            /*outline
    		ctx.lineTo(rands[4]*chg+w,rands[4]*chg+h*0.5);
			ctx.moveTo(rands[4]*chg+w,rands[4]*chg+h*0.5);
            ctx.lineTo(rands[8]*chg+w*0.75, rands[9]*chg+h);
			ctx.moveTo(rands[8]*chg+w*0.75, rands[9]*chg+h);
            ctx.lineTo(rands[5]*chg+w*0.25, rands[6]*chg+h);
			ctx.moveTo(rands[5]*chg+w*0.25, rands[6]*chg+h);
            ctx.lineTo(rands[4]*chg, rands[1]*chg+h*0.5);
			ctx.moveTo(rands[4]*chg, rands[1]*chg+h*0.5);
            ctx.lineTo(rands[2]*chg+w*0.25, rands[7]*chg);
			ctx.moveTo(rands[2]*chg+w*0.25, rands[7]*chg);
            ctx.lineTo(rands[3]*chg+w*0.75, rands[5]*chg);
			ctx.moveTo(rands[3]*chg+w*0.75, rands[5]*chg);
            ctx.lineTo(rands[4]*chg+w, rands[1]*chg+h*0.5);
			ctx.moveTo(rands[4]*chg+w, rands[1]*chg+h*0.5);
			*/

			ctx.lineTo(w,h*0.5);
            ctx.lineTo(w*0.75, h);
            ctx.lineTo(w*0.25, h);
            ctx.lineTo(0, h*0.5);
            ctx.lineTo(w*0.25, 0);
            ctx.lineTo(w*0.75, 0);
            ctx.lineTo(w, h*0.5);


            //triangle 1
            ctx.lineTo(rands[1]*chg+w*0.25, rands[7]*chg+h);
			ctx.moveTo(rands[1]*chg+w*0.25, rands[7]*chg+h);
            ctx.lineTo(rands[5]*chg+w*0.25, rands[6]*chg);
			ctx.moveTo(rands[5]*chg+w*0.25, rands[6]*chg);
            ctx.lineTo(rands[3]*chg+w, rands[0]*chg+h*0.5);
			ctx.moveTo(rands[3]*chg+w, rands[0]*chg+h*0.5);

            //triangle 2
            ctx.moveTo(rands[0]*chg, rands[7]*chg+h*0.5);
            ctx.lineTo(rands[6]*chg+w*0.75, rands[1]*chg);
			ctx.moveTo(rands[6]*chg+w*0.75, rands[1]*chg);
            ctx.lineTo(rands[8]*chg+w*0.75, rands[7]*chg+h);
			ctx.moveTo(rands[8]*chg+w*0.75, rands[7]*chg+h);
            ctx.lineTo(rands[9]*chg, rands[3]*chg+h*0.5);
			ctx.moveTo(rands[9]*chg, rands[3]*chg+h*0.5);

            //middle cris crosses
            ctx.moveTo(rands[7]*chg+w*0.25, rands[2]*chg);
            ctx.lineTo(rands[7]*chg+w*0.75, rands[0]*chg+h);
            ctx.moveTo(rands[3]*chg+w*0.75, rands[4]*chg);
            ctx.lineTo(rands[4]*chg+w*0.25, rands[0]*chg+h);

            //middle lines
            ctx.moveTo(rands[7]*chg+w*0.5, rands[1]*chg);
            ctx.lineTo(rands[9]*chg+w*0.5, rands[7]*chg+h);
            ctx.moveTo(rands[3]*chg+w*0.125, rands[3]*chg+h*0.75);
            ctx.lineTo(rands[5]*chg+w*0.875, rands[6]*chg+h*0.25);
            ctx.moveTo(rands[1]*chg+w*0.125, rands[0]*chg+h*0.25);
            ctx.lineTo(rands[4]*chg+w*0.875, rands[3]*chg+h*0.75);

    		ctx.closePath();
    		ctx.stroke();

            ctx.restore();
		}
	}

    //.865

	function init() {
		ctx.globalCompositeOperation = 'destination-over';
		ctx.canvas.width = width;
		ctx.canvas.height = height;
		size = width > height ? width : height;

		window.requestAnimationFrame(draw);
	}

	function draw() {
        ctx.clearRect(0,0, width, height);
		inc++;
		let hexSize = width/32;
		let heightAmount = height/(hexSize+hexSize*0.2);

		let hex;

		switch (version) {
		  case 1:
			hex = new Hex(width/2+0.5, height/2+0.5, size*0.25, "rgba(255,255,255," + (1-Math.sin(inc*0.013)) + ")");
			for (let i = -5; i < 6; i++) {
				let pos = -i > 0 ? -i : i;

				let h = new Hex((width/2+0.5)+(Math.sin(i*inc*0.0005)*size*0.4), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.05 + ")");
				//let h = new Hex((width/2+0.5)+(i*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.03 + ")");
			}
		    break;

		  case 2:
		  	hex = new Hex(width/2+0.5, height/2+0.5, size*0.4, "rgba(255,255,255,1)");

			for (let i = -5; i < 6; i++) {
				let pos = -i > 0 ? -i : i;

				let h = new Hex(width/2+0.5, height/2+0.5, (size*0.4)+(Math.sin(i*inc*0.0007)*size*0.4), "rgba(255,255,255," + (10-pos)*0.05 + ")");
				//let h = new Hex((width/2+0.5)+(i*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.03 + ")");
			}

		    break;

		case 6:

			hex = new Hex(width/2+0.5, height/2+0.5, size*0.4, "rgba(255,255,255,1)");

			for (let i = -2; i < 6; i++) {
				let pos = -i > 0 ? -i : i;

				let h = new Hex(width/2+0.5, height/2+0.5, (size*0.4)+(inc*0.007*size*0.4+i)-(i*400), "rgba(255,255,255," + (((10-pos)*0.05)-(inc*0.003+i*0.1)) + ")");
				//let h = new Hex((width/2+0.5)+(i*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.03 + ")");
			}

			break;

		case 100:
			ctx.lineWidth = 0.4;

			for (let x = 0; x < 32; x++) {
				for (let y = 0; y < heightAmount; y++) {
					//if ()

					if (x % 2 == 0) {
						let h = new Hex(x*(hexSize+hexSize*0.14), y*(hexSize+hexSize*0.2), hexSize, "rgba(255,255,255," + Math.sin(x*y+inc*0.05) + ")");
					} else {
						let h = new Hex(x*(hexSize+hexSize*0.14), y*(hexSize+hexSize*0.2)+(hexSize+hexSize*0.2)/2, hexSize, "rgba(255,255,255," + Math.sin(x*y+inc*0.01) + ")");
					}
				}
			}

			break;

		case 4:
			ctx.lineWidth = 0.4;
			let offset = 4;
			let hexLogo = [[true, true, true, true, true, false], [false, true, true, false, false, false], [false, false, true, true, true, false], [false, false, false, false, false, false], [false, false, true, true, true, false], [false, true, false, true, true, false], [false, false, true, true, false, true, false], [false, false, false, false, false, false], [false, false, true, false, true, false], [false, false, true, true, false, false], [false, false, true, false, true, false], [false, false, false, false, false, false], [false, true, false, true, true, false], [false, true, true, false, true, false], [false, false, true, true, true, false], [false, false, false, false, false, false], [false, false, true, true, false, true], [false, true, false, true, true, false], [false, true, true, true, true, false], [false, false, false, false, false, false], [false, false, true, true, true, false], [false, true, false, true, true, false], [false, false, true, true, true, false], [false, false, false, false, false, false], [false, false, true, true, true, false], [false, true, true, false, false, false], [false, false, true, true, true, false]];
			let heightStart = Math.floor(heightAmount/2);

			for (let x = 0; x < 28; x++) {
				for (let y = 0; y < heightAmount; y++) {

					if (x >= 1 & y >= (heightStart-3)) {
						if (hexLogo[x-1][y-(heightStart-3)] == true) {
							if ((x - 1) % 2 == 0) {
								let h = new Hex(x*(hexSize+hexSize*0.14), y*(hexSize+hexSize*0.2), hexSize, "rgba(255,255,255," + (1-Math.sin(x*y+inc*0.015)+0.45) + ")");
							} else {
								let h = new Hex(x*(hexSize+hexSize*0.14), y*(hexSize+hexSize*0.2)+(hexSize+hexSize*0.2)/2, hexSize, "rgba(255,255,255," + (1-Math.sin(x*y+inc*0.015)+0.45) + ")");
							}
						}
					}

					if ((x - 1) % 2 == 0) {
						let h = new Hex(x*(hexSize+hexSize*0.14), y*(hexSize+hexSize*0.2), hexSize, "rgba(255,255,255," + (Math.sin((x+1)*y+(inc*0.001))-0.2+(100-inc)*0.004) + ")");
					} else {
						let h = new Hex(x*(hexSize+hexSize*0.14), y*(hexSize+hexSize*0.2)+(hexSize+hexSize*0.2)/2, hexSize, "rgba(255,255,255," + (Math.sin((x+1)*y+inc*0.01)-0.2+(100-inc)*0.005) + ")");
					}

				}
			}

			break;

			case 5:
			  	hex = new Hex(width/2+0.5, height/2+0.5, size*0.25, "rgba(255,255,255," + (1-Math.sin(inc*0.013)) + ")");
			  for (let i = -6; i < 7; i++) {

				if (i != 0) {
				let pos = -i > 0 ? -i : i;
					if (i % 2 == 0) {
					  	let h = new Hex((width/2+0.5)+(Math.sin(i*inc*0.0005)*size*0.4), height/2+0.5, size*0.25, "rgba(200,90,90," + (10-pos)*0.065 + ")");
					} else if (i % 3 == 0) {
						let h = new Hex((width/2+0.5)+(Math.sin(i*inc*0.0005)*size*0.4), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.065 + ")");
					} else {
						let h = new Hex((width/2+0.5)+(Math.sin(i*inc*0.0005)*size*0.4), height/2+0.5, size*0.25, "rgba(90,90,200," + (10-pos)*0.065 + ")");
					}
				}


			  }

			  break;

			  case 3:

				for (let x = -2; x <= 2; x++) {
					for (let y = -2; y <= 2; y++) {
						if (booleans[x+y+4]) {
							if (x % 2 == 0) {
								var colorBase = "rgba(255,255,255,";

								if ((x+y+4) % 4 == 0 ) {
									colorBase = "rgba(200,90,90,"
								}
								if ((x+y+4) % 3 == 0) {
									colorBase = "rgba(90,90,200,";
								}

			  					let h = new Hex((width/2+0.5)+(((size*0.05)+50)*0.75)*x, (height/2+0.5)+(((size*0.05)+50)*0.865)*(y+0.5), (size*0.05)+50, colorBase + (Math.sin(((10+inc)*0.0018*(randoms[x+2][y+2][0]+5)))+1)*0.5 + ")", true);
								h.decuntstruct(randoms[x+2][y+2]);
							} else {
								let h = new Hex((width/2+0.5)+(((size*0.05)+50)*0.75)*x, (height/2+0.5)+(((size*0.05)+50)*0.865)*y, (size*0.05)+50, colorBase + (Math.sin(((10+inc)*0.0018*(randoms[x+2][y+2][0]+5)))+1)*0.5 + ")", true);
								h.decuntstruct(randoms[x+2][y+2]);

							}
						}

		  				//let h = new Hex((width/2+0.5)+(i*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.03 + ")");
					}
	  			}

	  			break;

			case 8:

				  for (let i = -6; i < 6; i++) {
					  if (i != 0) {
						  let pos = -i > 0 ? -i : i;

						  let h = new Hex(width/2+0.5, height/2+0.5, (size*0.02)+(inc*0.007*size*0.2+i)-(i*400), "rgba(255,255,255," + (10-i)*0.05 + ")", true);
						  h.decuntstruct([chg*-1.42, chg*0.124, chg*2.5038, chg*-3.012, chg*1.234, chg*-1.83, chg*0.92, chg*-2.09, chg*-0.89, chg*0.412, chg*1.845, chg*0.58, chg*0.34]);
						  //let h = new Hex((width/2+0.5)+(i*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.03 + ")");
					  }
				  }

				  break;

			case 7:

			   //hex = new Hex(width/2+0.5, height/2+0.5, size*0.4, "rgba(255,255,255,1)");
			   chg = Math.pow(inc, 6)*0.00000000001;

			   for (let i = -6; i < 6; i++) {
				   if (i != 0) {
					   let pos = -i > 0 ? -i : i;

					   let h = new Hex(width/2+0.5, height/2+0.5, (size*0.02)+(inc*0.007*size*0.2+i)-(i*400), "rgba(255,255,255," + (10-i)*0.05 + ")", true);
					   h.decuntstruct([chg*-1.42, chg*0.124, chg*2.5038, chg*-3.012, chg*1.234, chg*-1.83, chg*0.92, chg*-2.09, chg*-0.89, chg*0.412, chg*1.845, chg*0.58, chg*0.34]);
					   //let h = new Hex((width/2+0.5)+(i*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.03 + ")");
				   }
			   }

			   break;


		}





		window.requestAnimationFrame(draw)
	}

	init();
}

document.querySelector("canvas").addEventListener('click', function(event) {

	document.querySelector(".info").style.transform = "translateY(0)";
	document.querySelector(".info").style.opacity = "1";

	setTimeout(function() {document.querySelector(".info").classList.add("show")}, 600);
	setTimeout(function() {document.querySelector("body").classList.add("scroll")}, 1000);


});

document.getElementById("chef").addEventListener('click', function(event) {
	document.querySelector(".bio").classList.remove("hide-bio");
});

document.querySelector(".bio").addEventListener('click', function(event) {
	document.querySelector(".bio").classList.add("hide-bio");
});

function getMousePos(evt) {
	let canvas = document.getElementById("canvas");
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

runCircleCanvas();
