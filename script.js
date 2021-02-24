console.log("sup fam")
let squares = document.querySelectorAll('.square');
console.log(squares)
let modal = document.querySelector('.modal');
console.log(modal.style.opacity);
let modalClose = document.querySelector('.close');
console.log(modalClose);
// let mids = document.querySelectorAll('.mid');
// console.log(mids);
//query select all squares
//add event lisener to squares
//on click event change modal opacity and populate with applicable info from api
// for (let i = 0; i < mids.length; i ++) {
//   mids[i].onclick = function() {
//     modal.style.opacity = 1;
//   }
// }

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    console.log(this)
    modal.style.display = 'block';
    //call func here to populate
  })
}



modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
})


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


//iterate onload for each square

let url = 'https://picsum.photos/200';
fetch(url)
  .then(response=>{
    console.log(response)
    return response.url;
  })
  .then (data=> handleResponse(data))

let handleResponse = function (data) {
  //create node
  //set node to desired stuff
  console.log(data)
}

// let requestPromise = fetch(url)

// requestPromise.then(handleResponse)