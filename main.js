$(document).ready(function() {

  var navi = [];
  for (var i = 0; i < 15; i++) {
  var navi_casuali = (Math.floor(Math.random()*64)+1)
  navi.push(navi_casuali)
  }

$('.nave').click(function(){
  $('.nave').addClass('red').toggle
})

})
