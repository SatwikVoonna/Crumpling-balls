class Dustbin {
    constructor(x,y,widht,height){
        var options = {
        'isStatic' : 1

        }
        this.body = Bodies.rectangle(550,600,this.width,this.height,options);
        this.width = 20;
        this.height = height;
        
        World.add(world, this.body);
        }
        display(){
        fill("red");
        rect(0, 0, this.width, this.height);
        
        }
    };
    
    

    
