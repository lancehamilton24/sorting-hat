// const printToDom = (stringToPrint, elementId) => {
//     const selectedDiv = document.getElementById(elementId);
//     selectedDiv.innerHTML = stringToPrint;
// };

var button = document.getElementById('startButton'); 

button.onclick = function() {
    var div = document.getElementById('collapseExample');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};