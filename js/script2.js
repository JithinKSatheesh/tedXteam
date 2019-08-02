function move() {
  var elem = document.getElementById("counter"); 
  var overlay = document.getElementById("overlay"); 
  var num = 1;
  var id = setInterval(frame, 45);
  function frame() {
    if(num>=70)
    {
      overlay.style.background = "none"
    }
    if (num >= 100) 
    { 
      overlay.style.display = "none"
      clearInterval(id);

    }
    else
    {
      num++;
      elem.innerHTML ='<strong>TEDXCUSAT</strong><br><br>TEAM<br><br> '+ num + ' % ';

    }
  }
}