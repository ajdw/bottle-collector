// Our various types of bottle and can brand names are stored in an array
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
var coorsCan = new Bottle('Coors', 'img/coors.png');
var fourLokoCanLemonade = new Bottle('Four Loko (lemonade)', 'img/4loko-lemonade.png');
var budLightCan = new Bottle('Bud Light', 'img/budlight.png');
var gatoradeBottle = new Bottle('Gatorade', 'img/gatorade.png');
var poweradeBottle = new Bottle('Powerade', 'img/powerade.png');
var aAndWCan = new Bottle('A&W Root Beer', 'img/a&w.png');
var sapporoCan = new Bottle('Sapporo', 'img/sapporo.png');
var mrPibbCan = new Bottle('Mr. Pibb', 'img/mrpibb.png');
var crystalPepsiBottle = new Bottle('Crystal Pepsi', 'img/crystalpepsi.png');
var zimaBottle = new Bottle('Zima', 'img/zima.png');
var perrierBottle = new Bottle('Perrier', 'img/perrier.png');

// Generics
var colaGenericCan = new Bottle('Cola (generic)', 'img/cola.png');
var waterGenericBottle = new Bottle('Bottle (generic)', 'img/bottle-generic.png');

// Pushing our bottles to our bottleObjectArray
bottleObjectArray.push(aquafinaBottle, pepsiCan, vossBottle, evianBottle, dasaniBottle, arrowheadBottle, fijiBottle, cokeCan, 
crystalGeyserBottle, mountainDewCan, fantaCan, qureBottle, drPepperCan, smartwaterBottle, budweiserBottle, heinekenBottle, schweppesCan, lacroixCan,
sevenUpCan, spriteCan, zolaBottle, squirtCan, hawaiianPunchCan, surgeCan, coorsCan, fourLokoCanLemonade, budLightCan, colaGenericCan, 
gatoradeBottle, poweradeBottle, aAndWCan, sapporoCan, mrPibbCan, crystalPepsiBottle, waterGenericBottle, zimaBottle, perrierBottle); 

// Push our bottle object names to our bottles array so that way in can be autofilled when typing in our index field 
// bottles.push(aquafinaBottle.name, pepsiCan.name, vossBottle.name, evianBottle.name, dasaniBottle.name, arrowheadBottle.name,
// fijiBottle.name, cokeCan.name, crystalGeyserBottle.name, qureBottle.name, smartwaterBottle.name, mountainDewCan.name, fantaCan.name, drPepperCan.name,
// budweiserBottle.name, heinekenBottle.name, schweppesCan.name, lacroixCan.name, sevenUpCan.name, spriteCan.name, zolaBottle.name,
// squirtCan.name, hawaiianPunchCan.name, surgeCan.name, coorsCan.name, fourLokoCanLemonade.name, colaGenericCan.name, budLightCan.name,
// gatoradeBottle.name, poweradeBottle.name, aAndWCan.name, sapporoCan.name, mrPibbCan.name, crystalPepsiBottle.name, waterGenericBottle.name,
// zimaBottle.name, perrierBottle.name); 

// Better way of pushing our bottle object names to our bottles array so that way in can be autofilled whne typing in our index field
for (var i = 0; i < bottleObjectArray.length; i++) {
  bottles.push(bottleObjectArray[i].name);
}

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

// Function that creates our bottles/cans to be pushed to the userBottles array and show up on the UI
function getBottles(){
// Grab the users text input of bottle/can name  
  var userInput = document.getElementById('bottleInput').value;
  // 
  userBottles;
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
              var createImg = document.createElement('img'); // Create an image element in our index.html document
              createImg.setAttribute('src', bottleObjectArray[i].image); // Set the attribute of that <img> to 'src' and corresponding index image
              createImg.setAttribute('width', '65'); // Set another attribute for image size values with width and height
              createImg.setAttribute('height', '65');
              createImg.setAttribute('id', 'userBottle'); // Set another attribute with and id that is equal to userBottle

// We create a variable to store the random animantion selected from our animation array, times its length, at random, floored
              var randomAnimation = animationArray[Math.floor(Math.random() * animationArray.length)];
              console.log(randomAnimation); // Log to the console our random animation
              createImg.setAttribute('class', 'animated ' + randomAnimation); // Set the attributes of 'class' 'animated' plus our randomAnimation value to our createImg variable
              bottleArea.appendChild(createImg); // Append to the bottle area of our .html file the createImg variable
              document.getElementById('bottle-number').innerHTML = userBottles.length; // Get element with id of bottle-number and set innerHTML to the length of our userBottles array
              console.log(userBottles); // log to the console our userBottles array

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
                    };
                  }
 
                  if (bottleArea.childElementCount == 0) {  //using if/else statement to add items to top of list
                      bottleArea.appendChild(createImg);       // will add if count of ul children is 0 otherwise add before first item
                  }
                    else {
                        bottleArea.insertBefore(createImg, bottleArea.firstChild);
                      }
                          break; // Break out of the getBottles() function 
                     }

// jQuery allows for an easy fix in which it selects the id of userBottle and once on hover we...
$("#userBottle").hover(
      function () { // Add a function that makes it so that this instance of the object has the added class of "result_over"
        $(this).addClass("result_hover");
        },

      function () { // But once we remove our curser from this object the class is removed 
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

// Firebase Configuration 
  var config = {
    apiKey: "AIzaSyAcXld2abtYbPWZWjH-6SNl-vF-wyV7GRU",
    authDomain: "bottle-collector-120d4.firebaseapp.com",
    databaseURL: "https://bottle-collector-120d4.firebaseio.com",
    projectId: "bottle-collector-120d4",
    storageBucket: "bottle-collector-120d4.appspot.com",
    messagingSenderId: "1084725759300"
  };

  firebase.initializeApp(config);
  console.log(firebase);

// Storing Firebase's database in a variable
var database = firebase.database();

function submitBottles(){
  var data = {
    number_of_bottles: userBottles.length,
    type_of_bottles: userBottles,
    cash_from_bottles: totalUserMoney.substr(0,4)
  }

  console.log(data);
  var ref = database.ref('User Data');
  alert('Thank you for submitting');
  ref.push(data);
}

  const auth = firebase.auth();

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  const userStatus = document.getElementById('status');

// Add login event
btnLogin.addEventListener('click', e=> {
  // Get email and password 
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});

// Add signup event
btnSignUp.addEventListener('click', e=> {
    // Get email and password 
    //TO DO: Check 4 real Email with regex
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

// Check to see if user password is longer than 6 characters, if not, we send them a message on the index.html page
if (pass.length <= 6) {
  console.log('THE IF STATEMENT WORKS WORKS WORKS');
  document.getElementById('user-status').innerHTML = 'Password must be longer than 6 characters';
}

  // Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});

btnLogout.addEventListener('click', e =>{
  firebase.auth().signOut();
});

// Add a realtime addEventListener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log('We logged in and the current firebaseUser is: ' + firebaseUser);
    console.log('We logged in and the current firebaseUser uid is: ' + firebase.auth().currentUser.uid);

    var currentUser = firebase.auth().currentUser.uid;
    var ref = database.ref('cash_from_bottles');
    console.log('CASH' + ref);

    console.log('confirmed that currentUser var is equal to: ' + currentUser);

    firebase.database().ref('/User Data/').orderByChild('uid').equalTo(currentUser).once('value').then(function(snapshot) {
      var username = snapshot.val();
      console.log('It works, we have the current user as: ' + currentUser);  

        // document.getElementById('cash-number').innerHTML = '$' + cash_from_bottles;

      });

    // Display welcome message in the index.html page of the current user's e-mail
    document.getElementById('user-status').innerHTML = 'Welcome ' + firebaseUser.email;

    // Remove the hide button class from the btnLogout variable referencing out logout button
    btnLogout.classList.remove('hide');
    
  } else {
    console.log('not logged in');
    btnLogout.classList.add('hide');
    document.getElementById('user-status').innerHTML = '';
  }
});

// Later on in your code (that runs some time after that login callback fires)