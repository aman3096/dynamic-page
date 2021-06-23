let firstImg = document.getElementById('first-img')
let secondDiv = document.getElementById('second-div');
let rim = document.createElement('iframe');
let rim2 = document.createElement('iframe');

let div = document.createElement('span');

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

document.addEventListener('DOMContentLoaded', function() {
    div.style.width = '728px';
    div.style.height = '90px';
    div.id = 'second-inner-div';
    rim.setAttribute('id','rim');
    rim.id='inner-rim'
    div.appendChild(rim)
    rim.style.width = '728px'
    rim.style.height = '90px'
    rim.style.backgroundColor = 'red'
    rim.style.border='none'
    rim.style.marginTop='-90px'
    
    rim2.style.width = '100%'
    rim2.style.height = '90px'
    rim2.style.backgroundColor = 'red'
    rim2.id='inner-rimj'
    rim2.style.border = 'none'
    rim2.style.marginTop='-90px'

    insertAfter(firstImg, rim2);
    secondDiv.appendChild(div);
}, false);

focus();


var clickIframe = window.setInterval(checkFocus, 100);
var i = 0;

function checkFocus() {
  if(document.activeElement == document.getElementById('inner-rim')) {
    rim.style.backgroundColor = 'blue'
  	window.focus();
   }

   if(document.activeElement === document.getElementById('inner-rimj')){
    rim2.style.backgroundColor = 'blue'
    window.focus();
}
}