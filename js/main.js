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
var smartwaterBottle = new Bottle('Smart Water','img/smartwater.png');
var qureBottle = new Bottle('Qure', 'img/qure.png');
var budweiserBottle = new Bottle('Budweiser', 'img/budweiser.png');
var heinekenBottle = new Bottle('Heineken', 'img/heineken.png');
var lacroixCan = new Bottle('Lacroix', 'img/lacroix.png');
var schweppesCan = new Bottle('Schweppes', 'img/schweppes.png');
var sevenUpCan = new Bottle('7up', 'img/7up.png');
var spriteCan = new Bottle('Sprite', 'img/sprite.png');
var zolaBottle = new Bottle('Zola', 'img/zola.png');
var squirtCan = new Bottle('Squirt', 'img/squirt.png');
var hawaiianPunchCan = new Bottle('Hawaiian Punch', 'img/hawaiianpunch.png');
var surgeCan = new Bottle('Surge', 'img/surge.png');


// Pushing our bottles to our bottleObjectArray
bottleObjectArray.push(aquafinaBottle, pepsiCan, vossBottle, evianBottle, dasaniBottle, arrowheadBottle, fijiBottle, cokeCan, 
  crystalGeyserBottle, mountainDewCan, fantaCan, qureBottle, drPepperCan, smartwaterBottle, budweiserBottle, heinekenBottle, schweppesCan, lacroixCan,
  sevenUpCan, spriteCan, zolaBottle, squirtCan, hawaiianPunchCan, surgeCan); 

// Push our bottle object names to our bottles array so that way in can be autofilled when typing in our index field 
bottles.push(aquafinaBottle.name, pepsiCan.name, vossBottle.name, evianBottle.name, dasaniBottle.name, arrowheadBottle.name,
fijiBottle.name, cokeCan.name, crystalGeyserBottle.name, qureBottle.name, smartwaterBottle.name, mountainDewCan.name, fantaCan.name, drPepperCan.name,
budweiserBottle.name, heinekenBottle.name, schweppesCan.name, lacroixCan.name, sevenUpCan.name, spriteCan.name, zolaBottle.name,
squirtCan.name, hawaiianPunchCan.name, surgeCan.name); 

// User generated bottle values will go in this array
var userBottles = [];

// Array of CSS class name animations from animate.css
var animationArray = ['bounce', 'flash', 'pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown',
    'bounceInLeft','bounceInRight','bounceInUp','fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 
    'fadeInRightBig', 'fadeInUp', 'fadeInUpBig','flipInX','flipInY','lightSpeedIn','rotateIn','rotateInDownLeft',
    'rotateInDownRight','rotateInUpLeft','rotateInUpRight','jackInTheBox','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp',
    'slideInDown','slideInLeft','slideInRight','slideInUp'];

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
                  console.log(userBottles);

// Remove bottle function 
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


// jQuery allows for an easy fix in which it selects the id of userBottle and once on hover we...
                $("#userBottle").hover(
// Add a fucntion that makes it so that this instance of the object has the added class of "result_over"
  function () {
    $(this).addClass("result_hover");
  },
// But once we remove our curser from this object the class is removed 
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


// Initialize Firebase 


 const config = {
    apiKey: 'AIzaSyAcXld2abtYbPWZWjH-6SNl-vF-wyV7GRU',
    authDomain: 'bottle-collector-120d4.firebaseapp.com',
    databaseURL: 'https://bottle-collector-120d4.firebaseio.com',
    projectId: 'bottle-collector-120d4',
    storageBucket: '',
    messagingSenderId: '1084725759300'
  };
  
  firebase.initializeApp(config);


  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');


  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });


  // Add signup event
  btnSignUp.addEventListener('click', e=>{
    // Get email and pass
    // TODO: CHECK 4 REAL EMAILZ
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.message));

  });

  // Add a realtime addEventListener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
    }
    else {
      console.log('not logged in');
    }
  });



  // const auth = firebase.auth();
  // auth.signInWithEmailAndPassword(email,pass);
  // auth.createUserWithEmailAndPassword(email,pass);
  // auth.onAuthStateChanged(firebaseUser => {});

  


  // var database = firebase.database();
  // var ref = database.ref(userBottles);
  // ref.push(userBottles);












