var start = new Date();

function stopTime(){

  var stop = new Date();

  var output = stop.getTime() - start.getTime();

  output = output / 600;

  alert("You have been on the page for"+ " " +output+ " " + "seconds");
}
