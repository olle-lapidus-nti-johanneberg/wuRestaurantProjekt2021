
let index = 0;
let header_element = document.getElementById("headerText");
let header_text = header_element.textContent;
header_element.textContent = "";

function loadInHeader() {
    console.log(index)
    if (index < header_text.length) {
        header_element.textContent += header_text.charAt(index);
        index++;
        setTimeout(loadInHeader, 80);
    }
}

window.onload = function() {
    loadInHeader();
}

