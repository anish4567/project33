class Plinko{
    constructor(x,y){
       var options={
     isStatic:true,
     friction:0,
     restitution:1

       }
       this.r=10
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)

    
    }
    display(){
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}
