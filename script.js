console.log("sup fam")
let squares = document.querySelectorAll('.square');
console.log(squares)
console.log(squares[1])
let modal = document.querySelector('.modal');
console.log(modal.style.opacity);
let modalClose = document.querySelector('.close');
console.log(modalClose);
let mids = document.querySelectorAll('.mid');
console.log(mids);
//query select all squares
//add event lisener to squares
//on click event change modal opacity and populate with applicable info from api
// for (let i = 0; i < mids.length; i ++) {
//   mids[i].onclick = function() {
//     modal.style.opacity = 1;
//   }
// }

for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = function () {
    modal.style.opacity = 1;
  }
}
modalClose.onclick = function () {
  modal.style.opacity = 0;
}


// squares.onclick = function() {
//   modal.style.opacity = 1;
// }
// modalClose.onclick = function() {
//   modal.style.opacity = 0;
// }
//fetch to url
//then
//then > data handler
//square info = info from from api data.stuff.stuff