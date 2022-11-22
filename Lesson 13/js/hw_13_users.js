const UserArr = [
    {firstName: "Avraham", userName: "avraham111", password: "111111"},
    {firstName: "Moshe", userName: "moshe222", password: "222222"},   
    {firstName: "Michael", userName: "michael333", password: "333333"},   
    {firstName: "Itzhak", userName: "itzhak444", password: "444444"},   
    {firstName: "Yaakov", userName: "yaakov555", password: "555555"},   
    {firstName: "Gabi", userName: "gabi666", password: "666666"},   
]

const section = document.querySelector("section");
const userInput = document.querySelector("#userName");
const passInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", checkInput);

function checkInput() {
    for(let i = 0; i < UserArr.length; i++) {
        if(UserArr[i].userName == userInput.value && UserArr[i].password == passInput.value) {
            section.innerHTML = `Welcome, ${UserArr[i].firstName}!`
            section.style.fontSize = "60px";
            section.style.fontWeight = "800";
            return;
        }
    }
    alert('User name or password incorrect!')
}