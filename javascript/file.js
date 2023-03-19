window.addEventListener('scroll', function() {
  var navigation = document.querySelector('.navigation');
  navigation.classList.toggle('fixed', window.scrollY > 0);
});
