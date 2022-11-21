const div = document.querySelector("div");
var color = prompt("Choose a color for the text (in English only)").toLowerCase().replaceAll(" ", "");
ChangeColor();
function ChangeColor() {
    div.style.color = `${color}`;
}   