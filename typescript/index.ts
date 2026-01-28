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
// supports polymorphism tooo
// console.log('Area of Circle: ', calculateTotalArea(circle));
// console.log('Area of Rectangle: ', calculateTotalArea(rectangle));

//////////////// Abstraction Implementation
// real life implementation of abstraction, you just call these methods without worrying of the background implementation

// const today = new Date();
// const year = today.getFullYear();
// const Month = today.getMonth() + 1;
// const Curr = today.getDate();
// console.log('year: ', year);
// console.log('Month: ', Month);
// console.log('Current: ', Curr);

/////////////////////////////////// Encapsulation
//Bank Account
// Depositing | withdrawing
// // Balance hidden or encapsulated

// class BankAccount {
//   private _balance: number;
//   constructor(initialbalance: number) {
//     this._balance = initialbalance;
//   }
//   // Getter to get balance of bank account

//   public get balance(): number {
//     return this._balance;
//   }

//   // Method deposits money
//   public deposit(amount: number): void {
//     if (amount < 0) {
//       console.log('Invalid deposit amount');
//       return;
//     }
//     this._balance += amount;
//   }

//   // Method withdraws money
//   public withdraw(amount: number): void {
//     if (amount < 0) {
//       console.log('Invalid withdrawal amount');
//       return;
//     }
//     if (this._balance - amount < 0) {
//       console.log('Insufficient funds');
//     }
//     this._balance -= amount;
//   }
// }

// const myAccount = new BankAccount(1000);
// console.log(myAccount.balance);

// myAccount.deposit(500);
// myAccount.withdraw(280);

// console.log('Last Balance: ', myAccount.balance);

/// Balance property perfectly encapsulated

///////////////////////Inheritance

// class Animal {
//   constructor(public name: string) {}
//   move(distance: number): void {
//     console.log(`${this.name} moved ${distance} meters`);
//   }
// }

// class Dog extends Animal {
//   constructor(public name: string = 'dog') {
//     super(name);
//   }
// }

// let myDog = new Dog();
// myDog.move(5);
// console.log(myDog);

///////////// Inheritance Implementation

// class Product {
//   constructor(
//     public id: string,
//     public price: number,
//     public description: string,
//   ) {}
//   display(): void {
//     console.log(
//       `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`,
//     );
//   }
// }

// class Book extends Product {
//   constructor(
//     public Author: string,
//     public Title: string,
//     public id: string,
//     public price: number,
//     public description: string,
//   ) {
//     super(id, price, description);
//   }

//   display(): void {
//     // not necessary, it gets whatever parent fn do
//     super.display();
//     console.log(`Author: ${this.Author}, Title: ${this.Title}`);
//   }
// }

// class Electronic extends Product {
//   constructor(
//     public brand: string,
//     public model: string,
//     public id: string,
//     public price: number,
//     public description: string,
//   ) {
//     super(id, price, description);
//   }

//   display(): void {
//     // not necessary, it gets whatever parent fn do
//     super.display();
//     console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//   }
// }

// let myBook = new Book('Akram', 'Ktab Hayaty', '1', 21, 'ktab mlyan hagat');
// myBook.display();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// Solid design Patterns
///// Single Responsibility Principle
// class User {

//   constructor(name:string, email:string){}
// }

// // If want to make user authentication , it will have a different class that implements that functionality, not a method inside User

// class UserAuthentication {
//   constructor(user:User){}
//   authenticate(password:string){

//   }
// }

// class BlogPost {
//   title: string;
//   content: string;

//   constructor(title: string, content: string) {
//     this.title = title;
//     this.content = content;
//   }

//   createPost() {}
//   updatePost() {}
//   deletePost() {}
//   // displayHTML() {
//   //   return `<h1> ${this.title}</h1><p>${this.content}`;
//   // }
// }

// class BlogPostDisplay {
//   constructor(public blogPost: BlogPost) {}
//   displayHTML() {
//     return `<h1> ${this.blogPost.title}</h1><p>${this.blogPost.content}`;
//   }
// }

// class BlogPostJSON {
//   constructor(public blogPost: BlogPost) {}
//   returnJSON() {
//     return { title: this.blogPost.title, content: this.blogPost.content };
//   }
// }

/////////////////////// Open-closed Principle
/// regular -10 discount
//// premium -20 // // //
///////////////////// Bad example
// class Discount {
//   giveDiscount(customerType: 'premium' | 'regular'): number {
//     if (customerType === 'regular') {
//       return 10;
//     }
//     if (customerType === 'premium') {
//       return 20;
//     }
//   }
// }

// interface Customer {
//   giveDiscount(): number;
// }

// class RegularCustomer implements Customer {
//   giveDiscount(): number {
//     return 10;
//   }
// }

// class PremiumCustomer implements Customer {
//   giveDiscount(): number {
//     return 20;
//   }
// }
//
// // encapsulation+openclosed
// class Discount {
//   giveDiscount(customer: Customer): number {
//     return customer.giveDiscount();
//   }
// }

// let premiumCustomer: PremiumCustomer = new PremiumCustomer();
// let discount: Discount = new Discount();

// let finalvalue = discount.giveDiscount(premiumCustomer);
// console.log(finalvalue);

////////////////////////////// Liskov Substitution principle
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }
  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  public calculateArea(): number {
    return this.side * this.side;
  }
}

function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangle = new Rectangle(10, 12);
let square = new Square(8);
// implementing with sub type of shape rectangle, and square
area(rectangle);
area(square);

// real world implementation

// Payment Processor
// Credit Card
// Debit Card
// paypal

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCard extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Credit Card Payments - Amount $${amount}`);
  }
}
class DebitCard extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Debit Card Payments - Amount $${amount}`);
  }
}
class Paypal extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Paypal Card Payments - Amount $${amount}`);
  }
}

function executePayment(
  paymentProcessor: PaymentProcessor,
  amount: number,
): void {
  paymentProcessor.processPayment(amount);
}

let creditCardProcessor = new CreditCard();
let debitCardProcessor = new DebitCard();
let paypalCardProcessor = new Paypal();

executePayment(creditCardProcessor, 100);
executePayment(debitCardProcessor, 100);
executePayment(paypalCardProcessor, 50);
