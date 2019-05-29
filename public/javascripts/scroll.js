

$('document').ready(function() {
  var bg = $('.background')
  var win = $(window)

  bg.css({'background-position': 'center -50px'})

  win.scroll(function() {
    var top = win.scrollTop()
    bg.css({'background-position': 'center ' + ((-1 * 0.1*top) - 50) + 'px'})
  })
})
