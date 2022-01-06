function menu() {
  var i = document.getElementById("menulist").style.transform;
  if (i == "translateY(0%)") {
    document.getElementById("menulist").style.transform = "translateY(-100%)";
    document.getElementById("toggle").style.marginTop = "0";
    document.getElementById("logo").style.opacity = "1";
  } else {
    document.getElementById("menulist").style.transform = "translateY(0%)";
    document.getElementById("toggle").style.marginTop = "1em";
    document.getElementById("logo").style.opacity = "0.1";
  }
}