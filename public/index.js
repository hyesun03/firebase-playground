document.addEventListener("DOMContentLoaded", function(event) {
  var box = document.getElementById('1st');
  var flag = true;

  box.addEventListener("click", function() {
    if(flag) {
      this.style.transform = "rotate(360deg)";
      flag = false;
    }
    else {
      this.style.transform = "rotate(0deg)";
      flag = true;
    }
  });

});
