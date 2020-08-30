class Umbrella{
    constructor(x,y){
        var options={
            restitution:0.2,
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.image=loadImage("boy.png");
        this.scale=0.5;
    }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
    
}