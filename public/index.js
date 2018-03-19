// ВСЕ ПРАВА ПРЕНАДЛЕЖАТ github.com/AndrewMos

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
var   wid, hei, wid0, hei0, k, button, canv;


  function setup() {
     createCanvas(windowWidth,windowHeight);
     
if (windowWidth < windowHeight) {
   wid = 500;
   hei = 600;
   wid0 = 0;
   hei0 = 0;
   k = windowWidth / 500;
   } else {
      k = (windowHeight / 500) * 0.7;
      scale(k, k);
      wid = 500;
      hei = 600;
      wid0 = 0;
      hei0 = 0;
   }
     scale(k, k);
     canv = createCanvas(wid * k, hei * k);
     canv.position(wid0, hei0);
  ellX = random(wid0 + 100, wid - 100);
  ellY = random(hei0 + 100, hei - 100);
  ellSpeedY = random(speed);
  }

  function mousePressed() {
    rectSpeed = -7;
    rectAcc = -0.3;
    ellSpeedX = ellSpeedX ;
  }

  function keyPressed() {
    rectSpeed = -7;
    rectAcc = -0.3;
    ellSpeedX = ellSpeedX ;
  }

  function mouseReleased() {
    rectAcc = 0.5;
    ellSpeedX = ellSpeedX ;

     if (gameOver == 1) {
  ellX = random(wid0 + 100, wid - 100);
  ellY = random(hei0 + 100, hei - 100);
  ellSpeedY = random(speed);
  ellSpeedX = 5;
  gameOver = 0;
  score = 0;
  loop();
    }
  }

  function keyReleased() {
    rectAcc = 0.5;
    ellSpeedX = ellSpeedX ;
                                
    if (gameOver == 1) {
  ellX = random(wid0 + 100, wid - 100);
  ellY = random(hei0 + 100, hei - 100);
  ellSpeedY = random(speed);
  ellSpeedX = 5;
  gameOver = 0;
  score = 0;
  loop();
    }
  }

  function draw() {
     scale(k, k);
     canv.background(230);
 //    fill(230);
 // rect(wid0, hei0, (wid+5), (hei+5));

 if (ellX < 10) {
    gameOver = 1;
    score = ('Your score: ' + score + '  Press any key');
         canv.background(160);

  noLoop();
  }

  textSize(20);
  fill(240, 50, 50);
  text(score , wid0 + 35, hei0 + 45);
  noStroke();
  rect(wid0 + 10, rectY, 10, 70);
  rectY = rectY + rectSpeed;
  rectSpeed = rectSpeed + rectAcc;
     
     
  if ((rectY + 70) > (hei - 10)) {
  rectSpeed = 0;
  rectY = (hei - 80);
  }
  if ((rectY) < 10) {
  rectSpeed = 0;
  rectY = 10;
  }

  ellipse(ellX, ellY, ellR, ellR);
  ellX = ellX + ellSpeedX;
  ellY = ellY + ellSpeedY;
  if (((ellY + ellR/2) > hei)
   || ((ellY - ellR/2) < hei0)) {
    ellSpeedY = -ellSpeedY;
  }
  if (((ellX - ellR/2) < 20) && (ellY > (rectY-5)) && (ellY < (rectY + 75))) {
    ellX = 20 + ellR/2;
    ellSpeedX = -ellSpeedX;
    score ++;
     if (score > 3) {
        ellSpeedX = ellSpeedX * 1.02;
         ellSpeedY = ellSpeedY * 1.03;
  }
  }
  if ((ellX + ellR/2) > wid)  {
    ellSpeedX = -ellSpeedX;

  }

  }
