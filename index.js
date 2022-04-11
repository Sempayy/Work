var header = document.getElementById("scrollheader");
window.onscroll = function(event) {
  var offset = window.pageYOffset;
  if (offset > 20) {
    header.classList.add("header--scrolled")
  } else {
    header.classList.remove("header--scrolled")
  }
}
