

$('document').ready(function() {
  var bg = $('.background')
  var win = $(window)

  win.scroll(function() {
    var top = win.scrollTop()
    bg.css({'background-position-y': .05*top + 30 + '%'})

  })
})
