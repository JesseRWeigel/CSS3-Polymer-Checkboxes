// per css-tricks restarting css animations
// http://css-tricks.com/restart-css-animation/
$('label').click(function() {
  
  // find the first span which is our circle/bubble
  var el = $(this).children('span:first-child');
  
  // add the bubble class (we do this so it doesnt show on page load)
  var labelForVal = $(this).attr('for');

  el.addClass('circle ' + labelForVal );
  el.attr('id', labelForVal);
 
  // clone it
  var newone = el.clone(true);  
  
  // add the cloned version before our original
  el.before(newone);  
  
  // remove the original so that it is ready to run on next click
  $("." + el.attr("id") + ":last").remove();
}); 
