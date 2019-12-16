var moveSlider = function(slider, direction) {
  var value = slider.value;
  var circle = document.getElementById("cap");
  var coord = "c" + direction;
  circle.setAttributeNS(null, coord, value * 5);
};
