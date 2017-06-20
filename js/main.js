// Our various types of water bottle brands stored in an array
var bottles = [];

var bottleObjectArray = [];

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
var fijiBottle = new Bottle('Fiji','img/fiji.png');
var cokeCan = new Bottle('Coke','img/coke.png');
var crystalGeyserBottle = new Bottle('Crystal Geyser','img/crystalgeyser.png');
var mountainDewCan = new Bottle('Mountain Dew','img/mountaindew.png');
var fantaCan = new Bottle('Fanta','img/fanta.png');
var drPepperCan = new Bottle('Dr. Pepper','img/drpepper.png');

bottleObjectArray.push(aquafinaBottle, pepsiCan, vossBottle, evianBottle, dasaniBottle, arrowheadBottle, fijiBottle, cokeCan, 
  crystalGeyserBottle, mountainDewCan, fantaCan, drPepperCan); 
bottles.push(aquafinaBottle.name, pepsiCan.name, vossBottle.name, evianBottle.name, dasaniBottle.name, arrowheadBottle.name,
fijiBottle.name, cokeCan.name, crystalGeyserBottle.name, mountainDewCan.name, fantaCan.name, drPepperCan.name); 

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
// Grab the users text input of bottle/can name  
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
                  var randomAnimation = animationArray[Math.floor(Math.random() * animationArray.length)];
                  console.log(randomAnimation);
// Set an attribute to our <img> element equal to class with random animation
                  createImg.setAttribute('class', 'animated ' + randomAnimation);
// Append to the bottle area of our .html file the createImg variable
                  bottleArea.appendChild(createImg);
                  document.getElementById('bottle-number').innerHTML = userBottles.length;

      createImg.onclick = function() {
          this.parentNode.removeChild(this);
          userBottles.pop();
          document.getElementById('bottle-number').innerHTML = userBottles.length;

           totalUserMoney = (userBottles.length * 0.05).toString();
           var totalUserMoneyChar = totalUserMoney.substr(0,4);
           document.getElementById('cash-number').innerHTML = '$' + totalUserMoneyChar;

            // document.getElementById('cash-number').innerHTML = '$' + totalUserMoneyChar;
             if (totalUserMoneyChar.length == 3) {
              document.getElementById('cash-number').innerHTML = '$' + totalUserMoneyChar + 0;
            }
      
        }

        if (bottleArea.childElementCount == 0) {  //using if/else statement to add items to top of list
            bottleArea.appendChild(createImg);       // will add if count of ul children is 0 otherwise add before first item
        }

        else {
            bottleArea.insertBefore(createImg, bottleArea.firstChild);
        }
                // Break out of the getBottles() function 
                      break;
                }

                $("#userBottle").hover(
  function () {
    $(this).addClass("result_hover");
  },
  function () {
    $(this).removeClass("result_hover");
  }
);


// I am certain there's an easier way to do this...
            totalUserMoney = (userBottles.length * 0.05).toString();
            var totalUserMoneyChar = totalUserMoney.substr(0,4);


            if (totalUserMoneyChar.length == 3) {
                  totalUserMoneyChar = totalUserMoneyChar + '0';
            }
         
                else if (totalUserMoney.length == 5) {

              var totalUserMoneyChar = totalUserMoney.substr(0,6);
              document.getElementById('cash-number').innerHTML = '$' + totalUserMoneyChar;

            }

            document.getElementById('cash-number').innerHTML = '$' + totalUserMoneyChar;


            } //end of for loop
      } 
      // end of getBottles()
};













