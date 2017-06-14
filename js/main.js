// Our various types of water bottle brands stored in an array
var waterBottles = [
      'Aquafina','Arrowhead Water', 'Crystal Geyser', 'Dasani', 'Dejà Blue', 'Evian', 'Fiji Water', 'Glaceau',
      'Mountain Valley Spring Water', 'Nestlé Pure Life', 'Panama Blue', 'Perrier', 'San Pellegrino', 'Sierra Springs',
      'Smart Water', 'VOSS'
      ]

var waterBottleImgs = [];
// Auto complete method
fuzzyAutocomplete($('#bottleInput'), waterBottles);

// User generated bottle values will go in this array
var userBottles = [];


// Grab the users input of water bottle name
function getBottles(){
      console.log('working');
      var userInput = document.getElementById('bottleInput').value;
      userBottles.push(userInput);
      console.log(userInput);

      var createImg = '';
      createImg = document.createElement('img');

      var bottleArea = document.getElementById('bottle-area');

      // We're iterating through our entire waterBottles array 
      for (var i = 0; waterBottles.length > i; i++){
            if(userInput == waterBottles[i] || userInput !== waterBottles[i]){
                  var newText = document.createTextNode(userInput);
                  bottleArea.appendChild(newText);
                  break;
            }
      }
};
























