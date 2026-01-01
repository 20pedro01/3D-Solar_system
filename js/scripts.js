window.addEventListener('load', function () {
  var body = document.body;
  var universe = document.getElementById("universe");
  body.classList.remove('view-2D', 'opening');
  body.classList.add('view-3D', 'set-speed');
  universe.className = "scale-stretched set-speed";
});