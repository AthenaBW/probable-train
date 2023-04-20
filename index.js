// Import required modules and classes
const inquirer = require('inquirer')
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

// Define function to generate SVG file
function generateSVGFile(fileName, answers) {
  // Start with an empty SVG string
  let svgString = '';

  // Add SVG opening tag with width and height attributes
  svgString += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  // Wrap text tag in a group tag to enable user font input to layer on top 
  svgString += '<g>';

  // Add selected shape to SVG string based on user input
  svgString += answers.shape;

  // Set up shape properties and background color based on user input
  let shapeProperties, shapeBackgroundColor;
  switch (answers.shape) {
    case 'Triangle':
      shapeProperties = new Triangle();
      shapeBackgroundColor = answers.shapeBackgroundColor;
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${shapeBackgroundColor}"/>`;
      break;
    case 'Square':
      shapeProperties = new Square();
      shapeBackgroundColor = answers.shapeBackgroundColor;
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${shapeBackgroundColor}"/>`;
      break;
    case 'Circle':
      shapeProperties = new Circle();
      shapeBackgroundColor = answers.shapeBackgroundColor;
      svgString += `<circle cx="150" cy="115" r="80" fill="${shapeBackgroundColor}"/>`;
      break;
    default:
      break;
  }

  // Add text tag with user input text, font size and color
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  // Close group tag and SVG tag
  svgString += '</g>';
  svgString += '</svg>';

  // Use file system module to generate SVG file with given filename and SVG string
  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

// Define function to prompt user for input
function promptUser() {
  inquirer
    .prompt([
      // Text prompt
      {
        type: 'input',
        message: 'What text would you like your logo to display? (Enter up to three characters)',
        name: 'text',
      },
      // Text color prompt
      {
        type: 'input',
        message: 'Choose text color (Enter color keyword OR a hexadecimal number)',
        name: 'textColor',
      },
      // Shape choice prompt
      {
        type: 'list',
        message: 'What shape would you like the logo to render?',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',
      },
      // Shape color prompt
      {
        type: 'input',
        message: 'Choose shape color (Enter color keyword OR a hexadecimal number)',
        name: 'shapeBackgroundColor',
      },
    ])
    .then((answers) => {
      // Validate user input for text length
      if (answers.text.length > 3) {
        console.log('Must enter a value of no more than 3 characters');
        promptUser();
      } else {
        // Call function to generate SVG file with user input
        generateSVGFile('logo.svg', answers);
      }
    });
}

// Starts the application by prompting user for input
promptUser();
