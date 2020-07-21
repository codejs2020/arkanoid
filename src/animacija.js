/* eslint-disable max-len */
document.body.innerHTML += '<div id=\'loptica\'></div>'
const loptica = document.getElementById('loptica')
let y = 0
let x = (innerWidth / 2 - 25)
loptica.style.left = x + 'px'
document.body.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') { // if(event.key=="ArrowLeft"){
    x -= 25
  } else if (event.keyCode === 39) {
    x += 25
  } else if (event.keyCode === 38) {
    y -= 25
  } else if (event.keyCode === 40) {
    y += 25
  }
  loptica.style.left = x + 'px'
  loptica.style.top = y + 'px'
  // console.log(loptica.style.left, x)
})

/*
document.body.innerHTML += '<table><thead><tr><td>key</td><td>keyCode</td><td>altKey</td><td>shiftKey</td><td>ctrlKey</td></tr></thead><tbody id="tastatura_log"></tbody></table>';
document.body.addEventListener('keydown', function (e) {
    let osobineDogadjaja = [e.key, e.keyCode, e.altKey, e.shiftKey, e.ctrlKey];
    document.getElementById('tastatura_log').insertAdjacentHTML('afterbegin', "<tr><td>" + osobineDogadjaja.join('</td><td>') + "</td></tr>");
    e.preventDefault();
    e.stopPropagation();
});
*/
