class Badges{
    constructor(){
this.points=createElement("h1")
this.getPoints=getPoints
this.badge1= createImg("Images/green.png")
this.badge2= createImg("Images/red.png")
this.badge3= createImg("Images/gold.png")
this.badge1.hide()
this.badge2.hide()
this.badge3.hide()

    }
    display(){
       
        console.log(getPoints)
        this.points.html("Total Points Gained-"+this.getPoints)
        this.points.position(width/2-100,height/2-300)
        this.badge1.position(width/2-300, height/2-100)
        this.badge1.style("width","200px")
        this.badge2.position(width/2, height/2-100)
        this.badge2.style("width","200px")
        this.badge3.position(width/2+300, height/2-80)
        this.badge3.style("width","150px")
        if(this.getPoints>=30){
this.badge1.show()
}   
 if(this.getPoints>=50){
    this.badge2.show()
    }
    if(this.getPoints>=100){
        this.badge3.show()
        }
    }
}