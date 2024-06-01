# ES6 Classes in JavaScript

ES6 (ECMAScript 2015) introduced a new syntax for creating classes in JavaScript, known as ES6 Classes. Classes provide a way to define blueprints for creating objects with similar properties and methods.

## Syntax

To define a class, use the `class` keyword followed by the class name. Inside the class, you can define properties and methods using the familiar syntax.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 3);
console.log(rectangle.getArea()); // Output: 15
console.log(rectangle.getPerimeter()); // Output: 16
```
