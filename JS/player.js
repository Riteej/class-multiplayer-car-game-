class Player{
    constructor(){

    }
getcount (){
    var pcref=database.ref('playerCount');
    pcref.on("value",function(data){
        pc=data.val();
    })
}
    updateCount(count){
        database.ref('/').update({
            'playerCount':count
        })
    }
update(n){
    var index="player"+pc;
    database.ref(index).set({
       'name':n
    })
}
}