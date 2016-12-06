function runCircleCanvas() {
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");

	let width  = window.innerWidth;
	let height = window.innerHeight;
	let size = 0;
	let inc = 0;
    let hexes = [];

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

		let hex = new Hex(width/2+0.5, height/2+0.5, size*0.25, "rgba(255,255,255,1)");
        for (let i = -10; i < 10; i++) {
			let pos = -i > 0 ? -i : i;
            let h = new Hex((width/2+0.5)+(Math.sin(i)*10*size/50), height/2+0.5, size*0.25, "rgba(255,255,255," + pos*0.03 + ")");
        }
        //hexes.push(hex);


        //hexes.push(hex);


		window.requestAnimationFrame(draw)
	}

	init();
}

runCircleCanvas();
