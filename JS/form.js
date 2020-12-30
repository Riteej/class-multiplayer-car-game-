class Form{
    constructor(){



    }

    display(){
        var title=createElement('h2') ;
    title.html("CAR RACING GAME") 
title.position(550,50) ;

var input=createInput("ENTER NAME TO PLAY");
var button=createButton("play");
var greeting=createElement('h3');
input.position(580,180);
button.position(580,200)
button.mousePressed(function(){
    input.hide();
    button.hide();

    var name=input.value();
    pc=pc+1;
    player.update(name)
    player.updateCount(pc);
greeting.html("HELLO "+name)
greeting.position(580,200);
})


}
}