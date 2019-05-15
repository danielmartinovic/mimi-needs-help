function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
var randomColor = random_rgba();

function setUpCanvas(w, h) {
  // get canvas element from html page using the unique id we gave it (#)
	canvas = document.querySelector("#myCanvas");
	// change the size of the canvas
	//// we don't want to use css for changing the size.
	canvas.width = w;
	canvas.height = h;
	// give it a border -- need css
	canvas.style.border = "1px dotted brown";
	// get the canvas drawing context
	ctx = canvas.getContext("2d");
}

function square(x, y, s){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + s, y);
    ctx.lineTo(x + s, y + s);
    ctx.lineTo(x, y + s);
    ctx.lineTo(x,y);
    ctx.stroke();
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}

class ball {
    constructor(x_val = 0,y_val = 0,radius = 10) {
        this.x_val = x_val
        this.y_val = y_val
        this.radius = radius
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x_val, this.y_val, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
	ctx.strokeStyle = randomColor;
    }
}

function bounce() {
    var t = new Date()/10;
    x = t%200
    ctx.save();
    ctx.clearRect(0, 0, 800, 800);
    new ball(t%800,(t%200 === t%400) ? (1/100) * Math.pow(x, 2) + 400 : (1/100) * Math.pow(x-200, 2) + 400,15).draw()
    requestAnimationFrame(bounce)
}
setUpCanvas(800, 800)
window.requestAnimationFrame(bounce)
