var rectY = 100;
   rectSpeed = 2;
   rectAcc = 0.5;
   ellX = 200;
   ellY = 200;
   ellSpeedX = 5;
   ellSpeedY = -4;
   ellR = 30;
   gameOver = 0;
   speed = [-3, -4, -5, 3, 4, 5];
   score = 0;

  function setup() {
     var cnv = createCanvas(480,550);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  
  ellX = random(100, canvas.width - 100);
  ellY = random(100, canvas.height - 100);
  ellSpeedY = random(speed);
  
  }

  function mousePressed() {
    rectSpeed = -7;
    rectAcc = -0.3;
    ellSpeedX = ellSpeedX * 1.2;
  }
  
  function keyPressed() {
    rectSpeed = -7;
    rectAcc = -0.3;
    ellSpeedX = ellSpeedX * 1.2;
    
    
  }

  function mouseReleased() {
    rectAcc = 0.5;
    ellSpeedX = ellSpeedX / 1.2;
     
     if (gameOver == 1) {
      ellX = random(100, canvas.width - 100);
  ellY = random(100, canvas.height - 100);
  ellSpeedY = random(speed);
  ellSpeedX = 5;
  gameOver = 0;
  score = 0;
  loop();
    }
  }

  function keyReleased() {
    rectAcc = 0.5;
    ellSpeedX = ellSpeedX / 1.2;
    
    if (gameOver == 1) {
      ellX = random(100, canvas.width - 100);
  ellY = random(100, canvas.height - 100);
  ellSpeedY = random(speed);
  ellSpeedX = 5;
  gameOver = 0;
  score = 0;
  loop();
    }
  }

  function draw() {
  background(230);
 
 if (ellX < 10) {
    gameOver = 1;
    score = ('Your score: ' + score + '  Press any key');
  noLoop();
  }
  
  textSize(35);
  fill(0, 102, 153);
  text(score, 15, 50);
  noStroke();
  rect(10, rectY, 10, 50);
  rectY = rectY + rectSpeed;
  rectSpeed = rectSpeed + rectAcc;
  if ((rectY + 50) > canvas.height - 10) {
  rectSpeed = 0;
  rectY = canvas.height - 60;
  }
  if ((rectY) < 10) {
  rectSpeed = 0;
  rectY = 10;
  }

  ellipse(ellX, ellY, ellR, ellR);
  ellX = ellX + ellSpeedX;
  ellY = ellY + ellSpeedY;
  if ((ellY + ellR/2 > canvas.height)
   || (ellY - ellR/2 < 0)) {
    ellSpeedY = -ellSpeedY;
  }
  if ((ellX - ellR/2 < 20) && (ellY > rectY-5) && (ellY < rectY + 55)) {
    ellX = 20 + ellR/2;
    ellSpeedX = -ellSpeedX;
    score ++;
  }
  if (ellX + ellR/2 > canvas.width)  {
    ellSpeedX = -ellSpeedX;
    
  }
  
  }
