const rgb = [0,0,0];
const green = [0,0,0];
const blue = [0,0,0];

//https://www.w3schools.com/colors/colors_names.asp

/*document.addEventListener("DOMElementLoaded", function() {
    document.getElementById('number').click(testNumber);
    document.getElementById('number').keypress(enterKey);
});*/

document.querySelector('#red').addEventListener("input", red);

function red() {
    console.log('red value changed');
}