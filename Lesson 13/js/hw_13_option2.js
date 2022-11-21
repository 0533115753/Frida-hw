const div = document.querySelector("div");
const body = document.querySelector("body");
const inputColor = document.querySelector("#inputColor");
const inputBgc = document.querySelector("#inputBgc");

inputColor.addEventListener("input", function() {
    div.style.color = `${inputColor.value}`;
})

inputBgc.addEventListener("input", function() {
body.style.backgroundColor = `${inputBgc.value}`;
})

