$(function(){
  // Load template
  var wiwUrl = "https://www.google.com/search?igu=1";
  $('.wiw-url').val(wiwUrl);
  $('.wiw-iframe').attr('src', wiwUrl);


  Mousetrap.bind('alt+s', function(e) {
    $('.wiw').toggle();
  });

  $(document).on('keypress', '.wiw-url', function(e){
    if (e.which == 13) {
      wiwUrl = addhttp($(this).val());
      $('.wiw-iframe').attr('src', wiwUrl);
    }
  });
})

$.get(chrome.extension.getURL('/window.html'), function(data) {
  $('html').prepend(data);
});

function addhttp(url) {
    if (url.indexOf('//') == -1) {
        url = "//" + url;
    }
    return url;
}