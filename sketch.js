
var database,pc,form,player,game;
var gs=0;
function setup(){
    database=firebase.database();
    createCanvas(500,500);

   game=new Game();
   game.getState();
   game.start();
}

function draw(){
  
}

