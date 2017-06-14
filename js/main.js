// Our various types of water bottle brands stored in an array
var waterBottles = [
      'Aquafina','Arrowhead Water', 'Crystal Geyser', 'Dasani', 'Dejà Blue', 'Evian', 'Fiji Water', 'Glaceau',
      'Mountain Valley Spring Water', 'Nestlé Pure Life', 'Panama Blue', 'Perrier', 'San Pellegrino', 'Sierra Springs',
      'Smart Water', 'VOSS'
      ]
// Auto complete method
fuzzyAutocomplete($('#bottleInput'), waterBottles);

// User generated bottle values will go in this array
var userBottles = [];


// Grab the users input of water bottle name
function getBottles(){
      console.log('working');
      var userInput = document.getElementById('bottleInput').value;
      userBottles.push(userInput);
};
























