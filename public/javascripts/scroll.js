

$('document').ready(function() {
  var bg = $('.background')
  var win = $(window)

  win.scroll(function() {
    var top = win.scrollTop()
    bg.css({'background-position': '0px ' + -1 * 0.1*top + 'px'})
  })
})
