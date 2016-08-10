$(document).ready(function() {
  $('#projects img').hover(
    function() {
      //$(this).animate({opacity: .5}, '1000');
      $(this).addClass('jq-thumb', 'fast');
    },
    function() {
      //$(this).animate({opacity: 1}, 'fast');
      $(this).removeClass('jq-thumb', 'fast');
  });
  
  $().click(function() {
    $(this).css('border-color', 'blue');
  });
  
});