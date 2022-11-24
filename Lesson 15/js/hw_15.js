const jewelry = [
    {
        title: "Magnet necklace",
        category: ["all", "necklaces"],
        SKU: "NSS428",
        price: "₪ 175",
        isInStock: true,
        image: "AAB_STEEL_NECKLACE_NSS428_STEELGOLD.jpg" 
    },
    {
        title: "Butterflies bracelet",
        category: ["all", "bracelets"],
        SKU: "HABEX335",
        price: "₪ 110",
        isInStock: true,
        image: "HABEX335.png" 
    },
    {
        title: "Heart ring 925",
        category: ["all", "rings"],
        SKU: "d8rs206",
        price: "₪ 180",
        isInStock: true,
        image: "d8rs206-1.png" 
    },
    {
        title: "Steel earring",
        category: ["all", "earrings"],
        SKU: "ESS399S",
        price: "₪ 105 - ₪ 135",
        isInStock: true,
        image: "ESS399_STEEL.jpg" 
    },
    {
        title: "Double pendant necklace",
        category: ["all", "necklaces"],
        SKU: "PSCA08",
        price: "₪ 120",
        isInStock: true,
        image: "PSCA-08.jpg" 
    },
    {
        title: "Pandora adjustable bracelet",
        category: ["all", "bracelets"],
        SKU: "hab218",
        price: "₪ 145",
        isInStock: true,
        image: "hab218a-1.jpg" 
    },
]

const mainDiv = document.querySelector("main");

jewelry.forEach(creatHTML);

function creatHTML(jewel) {
    const div = document.createElement("div");
    div.id = jewel.SKU;
    div.className = "each-jewel";
    const image = document.createElement("img");
    image.src = `./assets/images/${jewel.image}`;
    image.style.width = "200px";
    const h3 = document.createElement("h3");
    h3.innerText = jewel.title;
    const h4 = document.createElement("h4");
    h4.innerText = jewel.price;
    div.append(h3, h4, image);
    mainDiv.appendChild(div);
    jewel.DOM = div;
}

const showBtn = document.querySelector("#show-hide");
const formArea = document.querySelector("#form-area");
const addBtn = document.querySelector("#submit");

showBtn.addEventListener("click", function() {
    if(formArea.style.display == "block") {
        formArea.style.display = "none";
        showBtn.innerText = "Show form";
    } else {
        formArea.style.display = "block";
        showBtn.innerText = "Hide form";
    }
})

const inputTitle = document.querySelector("#title");
const inputCategory = document.querySelector("#category");
const inputSKU = document.querySelector("#SKU");
const inputPrice = document.querySelector("#price");
const inputImg = document.querySelector("#img");
const inputStock = document.querySelector("#stock");

function addJewel() {
    return {
        title: inputTitle.value,
        category: [inputCategory.value],
        SKU: inputSKU.value,
        price: inputPrice.value,
        isInStock: inputStock.checked,
        image: inputImg.value, 
    }
}

addBtn.addEventListener("click", function() {
    const newJewel = addJewel();
    jewelry.push(newJewel);
    if(newJewel.isInStock == true) {
        creatHTML(newJewel);
    }
    inputCategory.value = "";
    inputImg.value = "";
    inputPrice.value = "";
    inputSKU.value = "";
    inputStock.checked = false;
    inputTitle.value = ""; 
})