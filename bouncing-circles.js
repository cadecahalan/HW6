var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-2, 2),
      yd: random(-2, 2),
			r: random(10, 30),
      c: color(random(360), 60, 100),
    }
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];

    // draw it
    fill(circle.c);
    ellipse(circle.x, circle.y, circle.r);

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.x > width || circle.x < 0) {
      circle.xd = -circle.xd;
			circle.r = circle.r - 5;
			background (0);
		}
			
    if (circle.y > height || circle.y < 0) {
      circle.yd = -circle.yd;
			circle.r = circle.r - 5;
			background (255);
    }
		
		if (circle.r  < 0) {
			circle.x = width/2;
			circle.y = height/2;
			circle.r = random(10, 30)
		}
  }
}
