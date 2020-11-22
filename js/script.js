
let index = 0;
let header_element = document.getElementById("headerText");
let header_text = header_element.textContent;
header_element.textContent = "";
let possibleFilters = ["invert(58%) sepia(67%) saturate(3290%) hue-rotate(163deg) brightness(104%) contrast(108%)",
        "invert(100%) sepia(38%) saturate(3260%) hue-rotate(34deg) brightness(122%) contrast(101%)",
        "invert(32%) sepia(99%) saturate(1229%) hue-rotate(333deg) brightness(104%) contrast(108%)",
        "invert(98%) sepia(4%) saturate(5161%) hue-rotate(78deg) brightness(103%) contrast(102%)",
        "invert(22%) sepia(50%) saturate(7310%) hue-rotate(316deg) brightness(103%) contrast(101%)",
        "invert(8%) sepia(69%) saturate(5917%) hue-rotate(317deg) brightness(99%) contrast(96%)"];

function loadInPage() {
    if (document.getElementById("gradientColorSauce") != null) {
        document.getElementById("gradientColorSauce").style.filter = possibleFilters[Math.floor(Math.random() * possibleFilters.length)];
    }
    if (index < header_text.length) {
        header_element.textContent += header_text.charAt(index);
        index++;
        setTimeout(loadInPage, 80);
    } else {
        setTimeout(loadInPage, 1000);
    }
    
}

window.onload = function() {
    loadInPage();
}


window.onscroll = function() {
    var navbar = document.getElementById("nav");
    var sticky = document.getElementById("header").offsetHeight;

    if (window.pageYOffset >= sticky) {
        navbar.style.position = "fixed";
    } else {
        navbar.style.position = "sticky";
    }
};
