var colors = ["#e51414", "#f9a82d", "#fdef69", "#78f048", "#0954f2", "#abf958", "#816dfd"];

function colorPicker(){
	var r = Math.floor(Math.random() * 7 );
	return colors[r];
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
    constructor(x_val = 0,y_val = 0,radius = 10, color = "#000000") {
        this.x_val = x_val
        this.y_val = y_val
        this.radius = radius
        this.color = color
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x_val, this.y_val, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.strokeStyle = this.color;
    }
}

function bounce() {
    var t = Math.floor (new Date().getTime()/10)

    console.log(t%400)
    if(t%400 <= 390 && t%400 >= 389) {
        cp = colorPicker()
    }

    ctx.save();
    ctx.clearRect(0, 0, 800, 800);

    for (var i = 1; i <= 5; i++) {
        var t_delay = t + i * 5

        var projectile_x = (t_delay-200)%800
        var projectile_y = (1/100) * Math.pow(t_delay%400 -200, 2) + 400

        var my_ball = new ball(projectile_x, projectile_y, 5*i, cp)
        my_ball.draw()

    }

    requestAnimationFrame(bounce)
}
setUpCanvas(800, 800)
var cp = '#000'

requestAnimationFrame(bounce)

