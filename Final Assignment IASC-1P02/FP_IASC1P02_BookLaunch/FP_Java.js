function NameTag() {

  var text;

  var enter = prompt("Hello! My name is Catherine. I am so happy you are here. Personal connections are super important to me. Would love to address you by name. Please enter what I can call you:");

  if (enter == null || enter == "") {
    text = "Welcome!";
  }
  else {
    text = "Welcome, " + enter + "!";
  }
  document.getElementById("HomeTitle").innerHTML = text;
}


/* Count Down Clock Code from:
W3Schools online HTML editor. W3Schools Online Web Tutorials. (n.d.). Retrieved December 4, 2022, from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown */

var countDownDate = new Date("December 31, 2022 24:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("counter").innerHTML = days + " "+"d "+"  "+ hours +" "+ "hrs "+"  "
  + minutes + " "+"min"+"  " + seconds + " "+"sec";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "FACE PLANT has been launched. Please get your copy now!";
  }
}, 1000);



function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
