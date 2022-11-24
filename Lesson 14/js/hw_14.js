const jewelry = [
    {
        title: "Two-color magnet necklace",
        category: ["all", "necklaces"],
        SKU: "NSS428",
        price: "₪ 175",
        isInStock: true,
        image: "AAB_STEEL_NECKLACE_NSS428_STEELGOLD.jpg" 
    },
    {
        title: "Spring butterflies bracelet",
        category: ["all", "bracelets"],
        SKU: "HABEX335",
        price: "₪ 110",
        isInStock: true,
        image: "HABEX335.png" 
    },
    {
        title: "Heart hoop ring 925 silver",
        category: ["all", "rings"],
        SKU: "d8rs206",
        price: "₪ 180",
        isInStock: true,
        image: "d8rs206-1.png" 
    },
    {
        title: "Light steel braided thin hoop earring",
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
    const h1 = document.createElement("h1");
    h1.innerText = jewel.title;
    const h2 = document.createElement("h2");
    h2.innerText = jewel.price;
    div.append(h1, h2, image);
    mainDiv.appendChild(div);
    jewel.DOM = div;
}