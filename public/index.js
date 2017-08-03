document.addEventListener("DOMContentLoaded", function(event) {
  writeData("hyesun01", "chsun0101@naver.com");
  writeData("hyesun02", "chsun0202@naver.com");
  writeData("hyesun03", "chsun0303@naver.com");
  writeData("hyesun04", "chsun0404@naver.com");
  writeData("hyesun05", "chsun0505@naver.com");

});

function writeData(name, email) {
  firebase.database().ref('users/').push({
    username: name,
    email: email
  });
}
