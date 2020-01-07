
//contatori
var counter = 0;
var rotation_total;
var number;

//shaker
var value = 0;

//immagini
var surfer;
var surfer2;
var wave;
var sea;

function preload() {
  surfer = loadImage("./assets/surfer.png");
  wave = loadImage("./assets/wave.png");
  sea = loadImage("./assets/sea.png");
  surfer2 = loadImage("./assets/surfer_2.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  //impostazioni shaker
  setShakeThreshold(10);
}


function draw() {
  background('aquamarine');
  new backgroundImage(wave);

  //creo un counter
  counter++;


  push();

  //creo una rotazione automatica (auto_r) per far oscillare il surfer
  if (counter < 50) {
    auto_r = counter * 0.1;
  } else if (counter >= 50 && counter < 150) {
    auto_r = -counter * 0.1 + 10;
  } else if (counter >= 150 && counter < 200) {
    auto_r = counter * 0.1 - 20;
  } else if (counter == 200) {
    counter = 0;
  }

  //la rotazione totale del surfer è data dalla rotazione automatica + la rotation manuale dell'utente
  rotation_total = auto_r * 2.5 + rotationY * (number);
  number = 1;

  translate(windowWidth / 2, 2.2* (windowHeight / 3));
  rotate(rotation_total);

  //inserisco il surfer
  imageMode(CENTER);
  image(surfer, 0, -100, surfer.width / 14, surfer.height / 14);
  pop();

//se la rotazione totale è tra -14 e 14 tutto rimane normale
  if (rotation_total < 14 && rotation_total > -14) {
    number = 1;
    value = 0;

//se la rotazione totale esce dai parametri il surfer cade
  } else if (rotation_total >= 14 || rotation_total <= -14) {
    number = 10000;
    new backgroundImage(sea);
    number = 10000;

    fill('black');
    textSize(25);
    textAlign(CENTER);
    textFont('VT323');
    text('Oh no the surfer has fallen!', width / 2, height / 2 - 50);
    text('Shake your phone to bring it', width / 2, height / 2-30);
    text('to his surfboard', width / 2, height / 2-10);

    imageMode(CENTER);
    image(surfer2, windowWidth / 2, 3 * (windowHeight / 4) - value, surfer2.width / 14, surfer2.height / 14);
  }

//se si shakera il telefono fino ad un valore di 255 il surfer sale
  if (value >= 400) {
    new backgroundImage(wave);

    push();
    translate(windowWidth / 2, 2.2* (windowHeight / 3));
    image(surfer, 0, -100, surfer.width / 14, surfer.height / 14);
    pop();

    fill('white');
    textSize(30);
    textAlign(CENTER);
    text('YOU ARE SAVE!', width / 2, height / 2 + 170);

    noStroke();
    fill('red');
    rectMode(CENTER);
    rect(windowWidth/2, height / 2 + 220, 150, 50);

    fill('white');
    textSize(30);
    textAlign(CENTER);
    text('PLAY AGAIN', width / 2, height / 2 + 230);
  }

//end of draw
}


function backgroundImage(img) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, (img.height * scale));
  pop();
}




function deviceShaken() {
  value++;
  if ( value > 500){
    value = 500;
  }
}



function TouchMoved() {
  return false;
}



//dà il permesso di orientare il telefono
function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
