class Game{
    constructor(){

    }

  getState(){
      var gamestate=database.ref('gameState');

      gamestate.on("value",function(data){
          gs=data.val();
      })
  }
updategs(state){
    database.ref('/').update({
        'gameState':state 
    })

    
}
 start(){
     if (gs===0){
         player=new Player();
         player.getcount();
         form=new Form();
         form.display();
     }
 } 
}
