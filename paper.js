class paper {
constructor(x,y,r){
    var opt={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }

this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,r,opt)
this.r=r
World.add(world,this.body)

}
display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop()
}
}