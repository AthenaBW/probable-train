// Define Shape class with a constructor that sets color to an empty string
class Shape {
    constructor() {
      this.color = "";
    }
    
    // Add setColor method to Shape prototype
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // Define Triangle class as a class that extends Shape
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Define Square class as a class that extends Shape
  class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Define Circle class as a class that extends Shape
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // Exports classes (Triangle, Square, Circle)
  module.exports = { Triangle, Square, Circle };
  