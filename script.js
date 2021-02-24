console.log("sup fam")
let squares = document.querySelectorAll('.square');
console.log(squares[0].style.backgroundImage);
console.log(squares[0].style.backgroundImage)
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.close');

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

//iterate onload, do for each square
let url = 'https://picsum.photos/v2/list?limit=15';
fetch(url)
  .then(response => response.json())
  // .then(response=>{
  //   console.log(response)
  //   return response.url;
  // })
  .then(data => handleResponse(data))

let handleResponse = function (data) {
  console.log(data)
  for (let j = 0; j < data.length; j++) {
    console.log(data[j].url);
    //console.log(squares[j].style)
    let url = data[j].download_url.toString()
    //console.log(typeof url)
    squares[j].style.background = `url(${url})`
    // squares[j].style.background =
    }
  //create node for modal?
  //set node to desired stuff
  //console.log(data[0].url)
}






