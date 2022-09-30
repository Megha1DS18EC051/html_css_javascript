/*1.Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
 The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) 
 which give both respective areas and perimeter (circumference).
 
*/
class Circle{
    constructor(radius)
    {
        this.radius=radius;
    }
    setRadius=(radius)=>{this.radius=radius}
    getArea=()=>{return (3.142*this.radius*this.radius)}
    

    getPerimeter=()=>{return (2*3.142*this.radius)}
    
}
circle1=new Circle()
circle1.setRadius(5)
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
