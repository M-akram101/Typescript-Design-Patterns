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

class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {}
  display(): void {
    console.log(
      `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`,
    );
  }
}

class Book extends Product {
  constructor(
    public Author: string,
    public Title: string,
    public id: string,
    public price: number,
    public description: string,
  ) {
    super(id, price, description);
  }

  display(): void {
    // not necessary, it gets whatever parent fn do
    super.display();
    console.log(`Author: ${this.Author}, Title: ${this.Title}`);
  }
}

class Electronic extends Product {
  constructor(
    public brand: string,
    public model: string,
    public id: string,
    public price: number,
    public description: string,
  ) {
    super(id, price, description);
  }

  display(): void {
    // not necessary, it gets whatever parent fn do
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

let myBook = new Book('Akram', 'Ktab Hayaty', '1', 21, 'ktab mlyan hagat');
myBook.display();
