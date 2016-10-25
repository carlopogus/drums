$(document).ready(function(){

  var baseURL = getBaseURL();
  var socketIOPort = 3001;
  var socketIOLocation = baseURL + socketIOPort;
  socket = io.connect(socketIOLocation);

  function getBaseURL() {
    baseURL = location.protocol + "//" + location.hostname + ":" + location.port;
    return baseURL;
  }

  var threshold = 5;
  var last;
  var down;
  var count = 1;

  var direction;

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


  window.ondeviceorientation = function(event) {
      var alpha = event.alpha,
      beta = event.beta,
      gamma = event.gamma * -1;

      direction = alpha;
  }


  setInterval(function () {
    if (down > (last + threshold)) {

      socket.emit('hit', direction);

      $('#hit').html('hit ' + count);
      count++;
    };
    last = down;
  }, 500);

});
