function runCircleCanvas() {
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");

	let width  = window.innerWidth;
	let height = window.innerHeight;
	let size = 0;
	let inc = 0;
    let hexes = [];

	let versionCount = 3;
	let version = Math.floor(Math.random() * (versionCount)) + 1
	//version = 3;

	class Hex {
		constructor(x, y, size, style) {
			this.intX = x;
			this.intY = y;
			this.hInc = this.intY;
			this.style = style;
			this.size = size;
			//this.anim(x, y, speed);
            this.draw(x, y, size);
		}

		anim() {
			this.draw(this.intX, this.hInc, this.size);

			this.hInc = this.hInc + (1*this.speed);

			if ((this.hInc) > height+40)
				this.hInc = -30;
		}

		draw(x, y, size) {
			ctx.strokeStyle = this.style;
			ctx.strokeWidth = 1.5;

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
            ctx.lineTo(w*0.25, 0)
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

			case 3:

			hex = new Hex(width/2+0.5, height/2+0.5, size*0.4, "rgba(255,255,255,1)");

			for (let i = -5; i < 6; i++) {
				let pos = -i > 0 ? -i : i;

				let h = new Hex(width/2+0.5, height/2+0.5, (size*0.4)+(inc*0.007*size*0.4+i)-(i*400), "rgba(255,255,255," + (((10-pos)*0.05)-(inc*0.004+i*0.1)) + ")");
				//let h = new Hex((width/2+0.5)+(i*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + (10-pos)*0.03 + ")");
			}

			break;
		}



		window.requestAnimationFrame(draw)
	}

	init();
}

document.querySelector("body").addEventListener('click', function(event) {
	document.querySelector(".info").classList.add("show");
});

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

runCircleCanvas();
