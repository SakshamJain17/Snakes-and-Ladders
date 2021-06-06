class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Your Name");
        this.button = createButton("Play");
        this.greeting = createElement('h1');
    }
    display(){
        this.title.html("Snakes And Ladders Game");
        this.title.position(width/2-50,height/5);
        this.input.position(width/2-50,height/2-80);
        this.button.position(width/2+30,height/2);
       

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(width/2-70,height/4);
         });
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }


}