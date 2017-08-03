document.addEventListener("DOMContentLoaded", function(event) {
  var btn = document.getElementById("btn");

  firebase.auth().createUserWithEmailAndPassword("chsun0303@naver.com", "hyesun0303").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode);
  });

  btn.addEventListener("click", function() {
    firebase.auth().signInWithEmailAndPassword("chsun0303@naver.com", "hyesun0303").catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  console.log(firebase.auth().currentUser.email);
  });

});
