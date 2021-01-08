class Rectangle {
constructor(length, height){
this.length = length;
this.height = height;
}
computeArea(){
return this.length * this.height;
}
}
//testing
let rect = new Rectangle(3,4);
console.log(rect.computeArea());
