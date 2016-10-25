$(document).ready(function(){

  var threshold = 4;
  var last;
  var down;
  var count = 1;

  window.ondevicemotion = function(event) {
    var X = event.accelerationIncludingGravity.x;
    var Y = event.accelerationIncludingGravity.y;
    var Z = event.accelerationIncludingGravity.z;

    down = Y;

    $('#data').html(
      "x: " + X + "<br>" +
      "y: " + Y + "<br>" +
      "z: " + Z
    );

  }


  setInterval(function () {


    if (down > (last + threshold)) {
      $('#hit').html('hit ' + count);
      count++;
    };

    last = down;


  }, 100);

});
