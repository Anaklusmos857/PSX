function setup() {
  createCanvas(windowWidth, windowHeight);
}

const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const SAVE_DATA = '';
var scene = 'play';
var keys = [];
const pets = {
  
}

//Player Constructor
function player(x, y){
    this.pos = new p5.Vector(x, y);
    this.inv = [];
    this.equipped = [];
    this.MAX_SPEED = 4;
    this.MAX_INV = 0;
    this.MAX_PETS_EQUIP = 4;
}

player.prototype.draw = function(){
  //Player Code
  fill(255, 0, 0);
  ellipse(this.pos.x, this.pos.y, 20, 20);
};

player.prototype.update = function(){
  //player update function
  if(keys[UP]){
    this.pos.y -= this.MAX_SPEED;
    print('deez');
  }
  if(keys[DOWN]){
    this.pos.y += this.MAX_SPEED;
  }
  if(keys[LEFT]){
    this.pos.x -= this.MAX_SPEED;
  }
  if(keys[RIGHT]){
    this.pos.x += this.MAX_SPEED;
  }
};

var p = new player(300, 300)

function equip(){

}

function play(){
  p.draw();
  p.update();
}

function scene_manager(){
  switch(scene){
    case 'load':
      break;
    case 'play':
      play();
      break;
  }
};

function draw(){
  background(255);
  scene_manager();
}

keyPressed = function(){
  keys[keyCode] = true;
};

keyReleased = function(){
  keys[keyCode] = false;
};