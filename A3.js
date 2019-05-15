function random(m){
	var r = Math.random()*m;
	return r
}

function setUpCanvas() {
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
