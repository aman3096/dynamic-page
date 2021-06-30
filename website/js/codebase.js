let list = document.getElementsByTagName('img')
let firstImg =list[1];
let secondImg=list[2];


let rim = document.createElement('iframe');
let rim2 = document.createElement('iframe');

let div = document.createElement('span');

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function defineAdStyle( element ) {
    let reform = element;
    reform.style.width= '100%',
    reform.style.height = '90px',
    reform.style.marginTop='-12%'
    reform.style.backgroundColor = 'red'
    reform.style.border = 'none'
    return reform;
}
document.addEventListener('DOMContentLoaded', function() {
    div.style.width = '728px';
    div.style.height = '90px';
    div.id = 'second-inner-div';
    rim = defineAdStyle(rim);
    rim.setAttribute('id','rim');
    rim.id='inner-rim'
    div.appendChild(rim)
    rim2 = defineAdStyle(rim2);
    rim2.id='inner-rimj'
    rim2.style.position='absolute'
    insertAfter(firstImg, rim2);
    insertAfter(secondImg, rim);
}, false);

focus();


var clickIframe = window.setInterval(checkFocus, 100);

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