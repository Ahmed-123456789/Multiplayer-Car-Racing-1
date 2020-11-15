class Player{
    constructor(){

    }
    getCount(){
        var getcount = database.ref('PlayerCount')
        getcount.on("value", function(data){
            PlayerCount=data.val();
        })

    }
    updateCount(count){
        database.ref('/').update({
            PlayerCount: count
        })
    }

    update(name){
        var playerindex = "Player"+PlayerCount
        database.ref(playerindex).set({
            name: name
        })
    }
}