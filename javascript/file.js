window.onscroll = function() {fixNavigation()};

var navigation = document.getElementById("navigation");
var navigationOffset = navigation.offsetTop;

function fixNavigation() {
  if (window.pageYOffset >= navigationOffset) {
    navigation.classList.add("fixed");
  } else {
    navigation.classList.remove("fixed");
  }
}
