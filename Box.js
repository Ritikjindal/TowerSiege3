class Box {
    constructor(x, y,w,h){
      var options={
        restitution:0.4,
        friction:0.2
        
      }
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
      this.Visibility=255;
      World.add(world,this.body);
    }

    display(){
      var angle=this.body.angle;
      var pos=this.body.position;
      //console.log(this.body.speed);
      if (this.body.speed<3){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility);
        rectMode(CENTER);
        rect(1000,1000,this.w,this.h);
        pop();
       }
      
     
   }
   score(){
    if(this.Visibility<0 && this.Visibility>-105){
       score++;
     }
  }
}
   

