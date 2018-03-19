var k;
var col = 15;
row = 20;
var bricks = [];
var fps = 2;
var fpscount = 0;
var minus = 0;
var mouse = 0;

function setup() {
  //frameRate(1);
	//createCanvas(windowWidth,windowHeight);
		if (windowWidth > windowHeight) {
			k = (windowHeight/row)*0.9;
			cnv = createCanvas(k*col, k*row);
			//cnv.position(windowWidth/2-k*col/2, 0);
	} else {
			k = (windowWidth/col)*0.9;
			cnv = createCanvas(k*col, k*row);
			//cnv.position(windowWidth/2-k*col/2, 0);
	}
	bricks[0] = new Brick(bricks.length, 0, ceil(col/2));
}//setup

function keyPressed() {
  bricks = [];
  bricks[0] = new Brick(bricks.length, 0, ceil(col/2));
}


function mousePressed() {
if (mouse > 20) {
mouse = 0;
  if (bricks.length > 1 ) {
  minus = abs(bricks[bricks.length - 2].start - bricks[bricks.length - 1].start);
  if (minus > 0) {
    if ((bricks[bricks.length - 2].start - bricks[bricks.length - 1].start) > 0 ) {
          bricks[bricks.length - 1].number = bricks[bricks.length - 1].number - minus;
          bricks[bricks.length - 1].start = bricks[bricks.length - 1].start + minus;
        } else {
            bricks[bricks.length - 1].number = bricks[bricks.length - 1].number - minus;
          }
        }
      }
   bricks[bricks.length] = new Brick(bricks.length, minus, bricks[bricks.length - 1].number);
}
}//mouse

function draw() {
mouse ++;

  if(fpscount > fps) {
    fpscount = 0;
  cnv.background(58, 158, 131);
//  translate(cnv.position);
 // lines();
bricks[bricks.length - 1].move();
for (var i = 0; i < bricks.length; i++) {
	bricks[i].show();
}
  } else { fpscount ++ }
} //draw

function Brick(lvl, mini, num) {
  this.level = 20 - lvl;
  this.number = num;
  this.start = ceil(random(1 ,col - this.number));
  this.speed = 1;


    this.show = function() {
            for (var i = 0; i < this.number; i++){
		    stroke(20);
		    noStroke();
                rect(k * (this.start - 1 + i) + 2, k *(this.level - 1) + 2, k - 4, k - 4);
            }
    }//show

    this.move = function() {
            if (this.start == col - this.number + 1 || this.start == 1) {
                       this.speed = this.speed * -1;
            }
        this.start = this.start + this.speed;
    }


}//Brick


function lines() {
  	stroke(200,200,200);
	   for(var i = 1; i < col; i++) {
	    line(i*k, 0, i*k, k*row);
	}
	   for(var i = 1; i < row; i++) {
	    line(0, i*k, k*col, k*i);
	}
}


function windowResized() {
  	if (windowWidth > windowHeight)
	{
			k = (windowHeight/row)*0.9;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
	} else
	{
			k = (windowWidth/col)*0.9;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
	}
}
