//Share all items to followers
var buttons = document.querySelectorAll('.share');
var i = buttons.length;

x = Math.random() * (1200 - 400) + 400
setTimeout(function() { shareButton(); }, x);
function shareButton() {
  buttons[i - 1].click();
  if(i > 0) {
    x = Math.random() * (1200 - 400) + 400
    setTimeout(function() { shareToFollowers(); }, x);
  }
}
function shareToFollowers() {
  var sharebutton = document.querySelector(".pm-followers-share-link");
  sharebutton.click();
  if(i > 0) {
    x = Math.random() * (1200 - 400) + 400
    setTimeout(function() { shareButton(); }, x);
    i--;
  }
}
