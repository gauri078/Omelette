var eggX, eggY;
var eggFalling = false;
var omeletVisible = false;

function setup() {
  createCanvas(400, 400);
  eggX = mouseX;
  eggY = mouseY; 
}

function draw() {
  background(0);
  textSize(20);
  text("click anywhere to make an omelette", 40, 50);
  
  if (eggFalling) {
    eggY += 2;
    if (eggY >= height - 20) {
      
      eggFalling = false;
      omeletVisible = true; 
    }
  }

  if (eggFalling) {
    noStroke();
    fill(255, 255, 255);
    ellipse(eggX, eggY, 40, 60);
    // fill(227, 232, 67);
    // ellipse(eggX, eggY, 20);
    
  } else if (omeletVisible) {
    fill(255);
    ellipse(eggX, height - 20, 80, 40);
    ellipse(eggX - 50, height - 20, 80, 40);
    ellipse(eggX + 50, height - 20, 80, 40);
    fill(255, 237, 51);
    arc(eggX, height - 20, 100, 60, PI, TWO_PI);
  }
}

function mouseClicked() {
  eggFalling = true;
  eggX = mouseX;
  eggY = mouseY;
}
