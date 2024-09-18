const paragraph = document.querySelector(".changeable");

const changeColorButton = document.querySelector("#changeColorButton");
const changeSizeButton = document.querySelector("#changeSizeButton");
const increaseSizeButton = document.querySelector("#increaseSizeButton");
const decreaseSizeButton = document.querySelector("#decreaseSizeButton");


const addStyleButton = document.querySelector("#addStyleButton");
const removeStyleButton = document.querySelector("#removeStyleButton");
const toggleColorButton = document.querySelector("#toggleColorButton");
const removeClassList = document.querySelector("#removeButtonClassList");
let fontSize = 16;


console.log("DOM of Element: " + paragraph);

/* 1. Use Function - not recommend */
// function changeStyleColor() {
//     console.log("I got a event");
//     paragraph.style.color = "red";
// }

/* 2. Use addEventListener(event, function) */
/* 
    2.1. Use style-property 
    => inline css 
*/

changeColorButton.addEventListener('click', function () {
    paragraph.style.color = 'red';
});

changeSizeButton.addEventListener('click', function () {
    paragraph.style.fontSize = '50px';
});


increaseSizeButton.addEventListener('click', function () {
    fontSize += 20;
    paragraph.style.fontSize = `${fontSize}px`;

})

decreaseSizeButton.addEventListener('click', function () {
    fontSize -= 5;
    paragraph.style.fontSize = `${fontSize}px`;

})

toggleColorButton.addEventListener('click', function () {
    const currentColor = paragraph.style.color;
    if (currentColor === "black") {
        paragraph.style.color = "red";
    } else {
        paragraph.style.color = "black"
    }
})

/* 2.2. use ClassList 
    methods:
    - add()
    - remove()
    - replace()
    - toggle()
    * contains() - whether the element contains a given class
*/

addStyleButton.addEventListener("click", function () {
    paragraph.classList.add("changeableClassList");
});

removeStyleButton.addEventListener("click", function () {
    paragraph.classList.remove("changeableClassList");
});

toggleColorButton.addEventListener("click", function () {
    paragraph.classList.toggle("changeableClassList");
});

// toggleColorButton.addEventListener("mouseover", function () {
//     paragraph.classList.toggle("changeableClassList");
// });

// toggleColorButton.addEventListener("mouseout", function () {
//     paragraph.classList.toggle("changeableClassList");
// });