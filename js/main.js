// Our various types of water bottle brands stored in an array
var bottles = [
      'Aquafina','Arrowhead Water', 'Crystal Geyser', 'Dasani', 'Dejà Blue', 'Evian', 'Fiji', 'Glaceau',
      'Mountain Valley Spring Water', 'Nestlé Pure Life', 'Panama Blue', 'Perrier', 'San Pellegrino', 'Sierra Springs',
      'Smart Water', 'VOSS'
      ]

var bottleObjectArray = [
{
      name: 'Fiji',
      image: 'img/fiji.png'
},

{
      name: 'Coke',
      image: 'img/coke.png'
},

{
      name: 'Crystal Geyser',
      image: 'img/crystalgeyser.png'
}
];

// User generated bottle values will go in this array
var userBottles = [];


// Auto complete method
fuzzyAutocomplete($('#bottleInput'), bottles);

// Grab the users input of water bottle name
function getBottles(){
      var userInput = document.getElementById('bottleInput').value;
      userBottles.push(userInput);
      console.log(userInput);

      var bottleArea = document.getElementById('bottle-area');

      // We're iterating through our entire bottles array 
      for (var i = 0; bottleObjectArray.length > i; i++){

      // Needs a regex error handling expression
            if (userInput.toLowerCase() == bottleObjectArray[i].name.toLowerCase()) {
                  for(var y = 0; bottleObjectArray.length > y; y++) {
                  var createImg = '';
                  var createImg = document.createElement('img');
                  createImg.setAttribute('src', bottleObjectArray[i].image);
                  createImg.setAttribute('width', '65');
                  createImg.setAttribute('height', '65');
                  createImg.setAttribute('id', 'userBottle');
                  createImg.setAttribute('class', 'animated bounceInDown');
                  bottleArea.appendChild(createImg);
                  break;
            }

            }
      }
};
























