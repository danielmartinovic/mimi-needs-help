function random(m){
	var r = Math.random()*m;
	return r
}

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
    window.requestAnimationFrame(draw());
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

function etriangle(x,y,s){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + s/2, y + s * Math.sqrt(3)/2);
    ctx.lineTo(x - s/2, y + s * Math.sqrt(3)/2);
    ctx.lineTo(x,y);
    ctx.stroke();
}




function draw() {
    var t = new Date()
    circle(.1*t.getTime()%800, .1*t.getTime()%800, 25)
    window.requestAnimationFrame(draw);
}

setUpCanvas(800,800)