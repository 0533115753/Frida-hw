var email = prompt("Enter your email address").toLowerCase();

var goodEmail = removeDots(email);
alert(goodEmail);

function removeDots(em) {
    emArr = em.split("@");
    if(emArr[1] == "gmail.com") {
        em = emArr[0].replaceAll(".", "") + "@gmail.com";
    }
    return em
}