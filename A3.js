var warm = ["#f609d3", "#f60954", "#f9924e", "#f9cd5d", "#c55df9"];
var cool = ["#7ffadc", "#7fb7fa", "#58f96a", "#abf958", "#7358f9"];
var col;

function random(){
	var r = Math.floor(Math.random() * 5 ) + 1;
	return r
}

function warmClock() {
	var col = warm[random()];
	return Clock(col);
}

function coolClock(){
	var col = cool[random()];
	return Clock(col);
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
    window.requestAnimationFrame(draw);
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

function bounce() {
    var t = new Date();
    var ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 800, 800);
    circle(t%800,t%800,15)
    requestAnimationFrame(bounce)
}

window.requestAnimationFrame(bounce);

setUpCanvas(800,800)
