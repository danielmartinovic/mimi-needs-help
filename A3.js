var colors = ["#e51414", "#f9a82d", "#fdef69", "#78f048", "#0954f2", "#abf958", "#816dfd"];
var randomColor = colorPicker();

function colorPicker(){
	var r = Math.floor(Math.random() * 7 ) + 1;
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
    ctx.save();
    ctx.clearRect(0, 0, 800, 800);

    for (var i = 1; i <= 5; i++) {
        var t_delay = t + i * Math.pow(25,1/2)

        var bounce_state

        if (t_delay%200 === t_delay%400){
            bounce_state = (1/100) * Math.pow(t_delay%200, 2) + 400
        }
        else{
            bounce_state = (1/100) * Math.pow(t_delay%200-200, 2) + 400
        }
        new ball(t_delay%800, bounce_state, 5*i).draw()

    }

    requestAnimationFrame(bounce)
}
setUpCanvas(800, 800)
window.requestAnimationFrame(bounce)

