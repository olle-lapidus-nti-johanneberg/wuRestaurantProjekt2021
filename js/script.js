
hoverImage = function(image) {
    let img = document.getElementById(image);
    img.children[0].style.filter = "grayscale(0%)";
    document.getElementById("image-one").children[1].textContent = img.children[1].textContent;
    document.getElementById("image-one").children[2].textContent = img.children[2].textContent;
}

unHoverImage = function(image) {
    document.getElementById(image).children[0].style.filter = "grayscale(100%)";
    document.getElementById("image-one").children[1].textContent = "";
    document.getElementById("image-one").children[2].textContent = "";
}
