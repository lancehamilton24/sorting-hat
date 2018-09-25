const name = document.getElementById('studentName');
const button = document.getElementById('startButton'),
    form = document.getElementById('collapseExample');

let counter = 0

//show and hide student form
button.addEventListener('click', function(){
    if (form.style.display == 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none'
    }
}, false);

//student card
const printToDom = (stringToPrint, whereToPrint) => {
  document.getElementById(whereToPrint).innerHTML += stringToPrint;
}
  const buildStudentCard = (fullName) => {
    let house = ["Gryffindor", "Hufflepuff","Ravenclaw", "Slytherin"][Math.floor(Math.random() * 4)]
    let domString = `<div class="card w-25 m-2 ">
    <div class="card-body">
      <h5 class="card-title">${fullName}</h5>
      <p class="card-text">${house}</p>
      <button href="#" class="btn btn-danger deleteButton" id=${counter}>Expel!</button>
    </div>
  </div>`;
    counter ++;
    printToDom(domString, 'houseCards');
  } 

document.getElementsByTagName('form')[0].addEventListener("submit", (e) => {
  e.preventDefault();

  buildStudentCard(name.value);
});







// button.onclick = function() {
//     var div = document.getElementById('collapseExample');
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else {
//         div.style.display = 'block';
//     }
// };