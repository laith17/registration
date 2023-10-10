// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBq2ysQeskAo8qAkQ7jc8j_2iFk-ts3H_o",
//   authDomain: "registration-form-6ee51.firebaseapp.com",
//   projectId: "registration-form-6ee51",
//   storageBucket: "registration-form-6ee51.appspot.com",
//   messagingSenderId: "195594197181",
//   appId: "1:195594197181:web:3d5fca019dd675bbe8bfd4",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // Initialize variables
// const auth = firebase.auth();
// const database = firebase.database();

// // Set up our register function
// function register() {
//   // Get all our input fields
//   email = document.getElementById("email").value;
//   password = document.getElementById("password").value;
//   userName = document.getElementById("userName").value;
//   favourite_song = document.getElementById("favourite_song").value;
//   milk_before_cereal = document.getElementById("milk_before_cereal").value;

//   // Validate input fields
//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert("Email or Password is Outta Line!!");
//     return;
//     // Don't continue running the code
//   }
//   if (
//     validate_field(userName) == false ||
//     validate_field(favourite_song) == false ||
//     validate_field(milk_before_cereal) == false
//   ) {
//     alert("One or More Extra Fields is Outta Line!!");
//     return;
//   }

//   // Move on with Auth
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(function () {
//       // Declare user variable
//       var user = auth.currentUser;

//       // Add this user to Firebase Database
//       var database_ref = database.ref();

//       // Create User data
//       var user_data = {
//         email: email,
//         userName: userName,
//         favourite_song: favourite_song,
//         milk_before_cereal: milk_before_cereal,
//         last_login: Date.now(),
//       };

//       // Push to Firebase Database
//       database_ref.child("users/" + user.uid).set(user_data);

//       // DOne
//       alert("User Created!!");
//     })
//     .catch(function (error) {
//       // Firebase will use this to alert of its errors
//       var error_code = error.code;
//       var error_message = error.message;

//       alert(error_message);
//     });
// }

// // Set up our login function
// function login() {
//   // Get all our input fields
//   email = document.getElementById("email").value;
//   password = document.getElementById("password").value;

//   // Validate input fields
//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert("Email or Password is Outta Line!!");
//     return;
//     // Don't continue running the code
//   }

//   auth
//     .signInWithEmailAndPassword(email, password)
//     .then(function () {
//       // Declare user variable
//       var user = auth.currentUser;

//       // Add this user to Firebase Database
//       var database_ref = database.ref();

//       // Create User data
//       var user_data = {
//         last_login: Date.now(),
//       };

//       // Push to Firebase Database
//       database_ref.child("users/" + user.uid).update(user_data);

//       // DOne
//       alert("User Logged In!!");
//     })
//     .catch(function (error) {
//       // Firebase will use this to alert of its errors
//       var error_code = error.code;
//       var error_message = error.message;

//       alert(error_message);
//     });
// }

// // Validate Functions
// function validate_email(email) {
//   expression = /^[^@]+@\w+(\.\w+)+\w$/;
//   if (expression.test(email) == true) {
//     // Email is good
//     return true;
//   } else {
//     // Email is not good
//     return false;
//   }
// }

// function validate_password(password) {
//   // Firebase only accepts lengths greater than 6
//   if (password < 6) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validate_field(field) {
//   if (field == null) {
//     return false;
//   }

//   if (field.length <= 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

const firebaseConfig = {
  apiKey: "AIzaSyBq2ysQeskAo8qAkQ7jc8j_2iFk-ts3H_o",
  authDomain: "registration-form-6ee51.firebaseapp.com",
  projectId: "registration-form-6ee51",
  storageBucket: "registration-form-6ee51.appspot.com",
  messagingSenderId: "195594197181",
  appId: "1:195594197181:web:3d5fca019dd675bbe8bfd4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up the register function
function register() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  userName = document.getElementById("userName").value;
  phoneNumber = document.getElementById("phoneNumber").value;

  // Validate input fields
  if (
    !validate_email(email) ||
    !validate_password(password) ||
    !validate_field(userName) ||
    !validate_field(phoneNumber)
  ) {
    alert("One or more fields are invalid. Please check your input.");
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create user data
      var user_data = {
        email: email,
        userName: userName,
        phoneNumber: phoneNumber,
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);

      // Done
      alert("User Created!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Set up the login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert("Email or Password is invalid. Please check your input.");
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      // Done
      alert("This user has already registered");
    })
    .catch(function (error) {
      // Firebase will use this to alert its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  // Password: More than 8 characters, 1 number, 1 uppercase, 1 special character
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function validate_field(field) {
  return field !== null && field.trim() !== "";
}

function validate_username(username) {
  // Username should not contain spaces
  return !/\s/.test(username);
}

function validate_phoneNumber(phoneNumber) {
  // Phone number should be 10 digits starting with 07
  return /^(07)\d{8}$/.test(phoneNumber);
}
