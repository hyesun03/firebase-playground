document.addEventListener("DOMContentLoaded", function(event) {
  writeData("uid_01", "hyesun01", "chsun0101@naver.com");

});

function writeData(userId, name, email) {
  firebase.database().ref('users/' + userId).push({
    username: name,
    email: email
  });
}
