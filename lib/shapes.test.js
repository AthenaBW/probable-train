const {Circle, Square, Triangle} = require("./shapes")
// Imports Circle, Square, & Triangle shape class from 'shapes.js'. defines a test for the shape class.  

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`circle cx="150" cy="115" r="80" fill="${color}">`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`rect x="73" y="40" width="160" height="160" fill="${color}">`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        var color =('purple')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="150, 18 244, 182 56, 182" fill="${color}">`);
      });
    });