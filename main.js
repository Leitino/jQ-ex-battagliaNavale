$(document).ready(function() {

  var navi = [];
  for (var i = 0; i < 15; i++) {
  var navi_casuali = (Math.floor(Math.random()*63)+1)
  navi.push(navi_casuali)
  }
var con_navi_colpite=0
var con_navi_mancate=0
var nave = $('.nave')

nave.click(function() {
  var una_nave = $(this).attr('id')
  if (navi.includes(parseInt(una_nave))) {
    $(this).addClass('red')
    con_navi_colpite++
    $('#navi_colpite').html(con_navi_colpite)
  }
  else {
    $(this).addClass('green')
    con_navi_mancate++
    $('#navi_mancate').html(con_navi_mancate)
  }
  if (con_navi_colpite==15) {
    alert('hai vinto')
  }
  else if (con_navi_mancate==50) {
    alert('hai perso')    
  }

})
})
