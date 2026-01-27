// /////////////////////////////// Abstraction
// // Shapes
// // Area, Perimeter
// // simple - single function calculateTotalAre

// // Interface A shape

// interface Shape {
//   area(): number;
//   perimeter(): number;
// }

// class Circle implements Shape {
//   constructor(private radius: number) {}

//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   perimeter(): number {
//     return 2 * Math.PI * this.radius;
//   }
// }

// class Rectangle implements Shape {
//   constructor(
//     private width: number,
//     private height: number,
//   ) {}
//   area(): number {
//     return this.width * this.height;
//   }
//   perimeter(): number {
//     return 2 * (this.width + this.height);
//   }
// }

// function calculateTotalArea(shape: Shape): number {
//   return shape.area();
// }

// let circle: Circle = new Circle(5);
// let rectangle: Rectangle = new Rectangle(3, 4);

// console.log('Area of Circle: ', calculateTotalArea(circle));
// console.log('Area of Rectangle: ', calculateTotalArea(rectangle));

//////////////// Abstraction Implementation

const today = new Date();
const year = today.getFullYear();
const Month = today.getMonth();
const Curr = today.getDate();
console.log('year: ', year);
console.log('Month: ', Month);
console.log('Current: ', Curr);
