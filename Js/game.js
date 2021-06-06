class Game{
    constructor(){
        
    }

    async start(){
       if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists){
            playerCount = playerCountRef.val();
            player.getCount();
        }
           form = new Form();
           form.display();
           
       }
       for(var j=height-(height/10),k=0;j>=0,k<10;j-=(height/10),k++){
        for(var i = 0,l = width-(width/10) ;i< width,l>=0;i+=(width/10),l-=(width/10)){
                if(k % 2 === 0){
                    box = new Box(i,j,width/10,height/10);
                }
                else{
                    box = new Box(l,j,width/10,height/10);
                }
                boxes.push(box);
             }
        }

    }
    getState(){
        var gameStateRef= database.ref("gameState");       
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })     
    }

    update(state){
        database.ref("/").update({gameState: state})
    }

    play(){
        form.hide();  
        Player.getPlayerInfo();
        player.getRank();
        
        var k = 0; 
        for( var i = 0; i< 100;i++){
            if(k % 2 === 0){
                if(i%2==0){
                    fill("green")
                }
                else{
                    fill("yellow");
                }
                boxes[i].display(); 
            }
            else{
                if(i%2!==0){
                    fill("yellow")
                }
                else{
                    fill("red");
                }
                boxes[i].display(); 
            }
            push();
            textSize(30);
            fill("black")
            text(i+1,boxes[i].x+20,boxes[i].y+45)
            pop();
        }   
            
     drawSprites();                 
    }
}