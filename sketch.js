var value = 0;

var maracas;

function preload(){
  maracas = loadSound("./assets/maracas_1.mp3");
  maracas2 = loadSound("./assets/maracas_1.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  setShakeThreshold(2);


    // put setup code here
}

function draw() {

  if (value>4){
    if (maracas.isPlaying() == false) {
      maracas.play();
    }
  }
  else {
  maracas.stop();
}

if (value>9 || value<6){
  if (maracas2.isPlaying() == false) {
    maracas2.play();
  }
}
else {
maracas2.stop();
}

//background
if (value<5 && value>=0){
  background('red');
  fill (0, 255, 0);
  textSize(90);
  textAlign(CENTER);
  textFont('Bebas Neue');
  text('TOUCH',width/2,height/2-40);
  textSize(80);
  textFont('Tomorrow');
  text('SHAKE',width/2,height/2+40);
}
else if (value>5 && value<10) {
  background('gold');
  fill ('blue');
  textSize(100);
  textAlign(CENTER);
  textFont('Bebas Neue');
  text('TOUCH',width/2+50,height/2-60);
  textSize(70);
  textFont('Tomorrow');
  text('SHAKE',width/2-40,height/2+90);
}
else {
  background('purple');
  fill ('yellow');
  textSize(80);
  textAlign(CENTER);
  textFont('Bebas Neue');
  text('TOUCH',width/2-30,height/2-85);
  textSize(90);
  textFont('Tomorrow');
  text('SHAKE',width/2+75,height/2+105);
}

textFont('Alata');
fill('white');
textSize(30);
text('volume on',width/2,height-50);




  }


function deviceShaken(){
  value++;
  if ( value > 15){
    value = 0;
  }
}

function TouchMoved(){
  return false;
}



//dà il permesso di orientare il telefono
function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
