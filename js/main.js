// Our various types of water bottle brands stored in an array
var bottles = [
      'Aquafina','Arrowhead', 'Crystal Geyser', 'Dasani', 'Dejà Blue', 'Evian', 'Fiji', 'Glaceau',
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

// An object constructor is created so we can make more botle objects
function Bottle(name, image) {
  this.name = name;
  this.image = image; 
}

// Creating bottle objects
var aquafinaBottle = new Bottle('Aquafina','img/aquafina.png');
var pepsiCan = new Bottle('Pepsi','img/pepsi.png');
var vossBottle = new Bottle('Voss','img/voss.png');
var evianBottle = new Bottle('Evian','img/evian.png');
var dasaniBottle = new Bottle('Dasani','img/dasani.png');
var arrowheadBottle = new Bottle('Arrowhead','img/arrowhead.png');

bottleObjectArray.push(aquafinaBottle, pepsiCan, vossBottle, evianBottle, dasaniBottle, arrowheadBottle); 

// User generated bottle values will go in this array
var userBottles = [];

// Array of CSS class name animations from animate.css
var animationArray = ['bounce', 'flash', 'pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown',
    'bounceInLeft','bounceInRight','bounceInUp','fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 
    'fadeInRightBig', 'fadeInUp', 'fadeInUpBig','flipInX','flipInY','lightSpeedIn','rotateIn','rotateInDownLeft',
    'rotateInDownRight','rotateInUpLeft','rotateInUpRight','jackInTheBox','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp',
    'slideInDown','slideInLeft','slideInRight','slideInUp' ];

// Auto complete method
fuzzyAutocomplete($('#bottleInput'), bottles);



// Function that creates our bottles/cans
function getBottles(){
// Grab the users input of bottle/can name  
      var userInput = document.getElementById('bottleInput').value;
// Push the users input in our userBottles array
      userBottles.push(userInput);
// Print to the console the user's input 
      console.log(userInput);
// Grab in a variable the element in our .html file with id of 'bottle-area'
      var bottleArea = document.getElementById('bottle-area');

// We're iterating through our entire bottles array 
      for (var i = 0; bottleObjectArray.length > i; i++){

// IF user's input equals the name key value of our bottleObjectArray
            if (userInput.toLowerCase() == bottleObjectArray[i].name.toLowerCase()) {
                  for(var y = 0; bottleObjectArray.length > y; y++) {
// Create an image element in our index.html document
                  var createImg = document.createElement('img');
// Set the attribute of that <img> to 'src' and corresponding index image
                  createImg.setAttribute('src', bottleObjectArray[i].image);
// Set another attribute for image size values with width and height
                  createImg.setAttribute('width', '65');
                  createImg.setAttribute('height', '65');
// Set another attribute with and id that is equal to userBottle
                  createImg.setAttribute('id', 'userBottle');
                  // createImg.setAttribute('onclick', 'removeBottle()');
                  
                  var randomAnimation = animationArray[Math.floor(Math.random() * animationArray.length)];
                  console.log(randomAnimation);

                  createImg.setAttribute('class', 'animated ' + randomAnimation);
                  bottleArea.appendChild(createImg);
                  break;
            }


            var totalUserBottles = 0;
            totalUserBottles = userBottles.length;
            document.getElementById('bottle-number').innerHTML = totalUserBottles;


// I am certain there's an easier way to do this...
            var totalUserMoney = 0;
            totalUserMoney = (userBottles.length * 0.05).toString();
            var totalUserMoneyChar = totalUserMoney.substr(0,4);
            if (totalUserMoneyChar.length == 3) {
                  totalUserMoneyChar = totalUserMoneyChar + '0';
            }
            document.getElementById('cash-number').innerHTML = '$' + totalUserMoneyChar;

            }
      }
};




   function removeBottle() {
            var rmBottle = document.getElementById('userBottle');
            rmBottle.parentNode.removeChild(rmBottle);
            return false;
            }






















