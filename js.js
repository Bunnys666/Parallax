$('section').mousemove(function (){
  var moveX = (e.pageX * -1 / 15);
  var moveY = (e.pageX * -1 / 15);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px ')
});
