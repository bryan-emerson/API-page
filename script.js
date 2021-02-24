console.log("sup fam")
let squares = document.querySelectorAll('.square');
console.log(squares)
let modal = document.querySelector('.modal');
console.log(modal.style.opacity);

//query select all squares
//add event lisener to squares
//on click event change modal opacity and populate with applicable info from api
for (let i = 0; i < squares.length; i ++) {
  squares[i].addEventListener('click', function(e){
    modal.style.opacity = 1;
  })
}

//fetch to url
//then
//then > data handler
//square info = info from from api data.stuff.stuff