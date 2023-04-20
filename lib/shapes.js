// Define Shape class as a function that returns an object with a color property
function Shape() {
    return {
      color: "",
    };
  }
  
  // Add setColor method to Shape prototype
  Shape.prototype.setColor = function(colorVar) {
    this.color = colorVar;
  };
  
  // Define Triangle class as a function that returns an object inheriting properties from Shape
  function Triangle() {
    return Object.create(Shape());
  }
  
  // Add render method to Triangle prototype
  Triangle.prototype.render = function() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  };
  
  // Define Square class as a function that returns an object inheriting properties from Shape
  function Square() {
    return Object.create(Shape());
  }
  
  // Add render method to Square prototype
  Square.prototype.render = function() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  };
  
  // Define Circle class as a function that returns an object inheriting properties from Shape
  function Circle() {
    return Object.create(Shape());
  }
  
  // Add render method to Circle prototype
  Circle.prototype.render = function() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  };
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };
  