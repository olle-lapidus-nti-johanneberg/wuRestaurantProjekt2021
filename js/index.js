
hoverImage = function(image) {
    for (let i = 0; i < images.length; i++) {
        if (images[i] != image) {
            unHoverImage(images[i]);
        }
    }
    let img = document.getElementById(image);
    img.children[0].style.filter = "grayscale(0%)";
    document.getElementById("image-one").children[0].style.filter = "opacity(0.2)";
    document.getElementById("image-one").children[1].innerHTML = img.children[1].innerHTML;
    document.getElementById("image-one").children[2].innerHTML = img.children[2].innerHTML;
}

unHoverImage = function(image) {
    document.getElementById(image).children[0].style.filter = "grayscale(100%)";
    document.getElementById("image-one").children[0].style.filter = "opacity(0.5)"
    //document.getElementById("image-one").children[1].textContent = "";
    //document.getElementById("image-one").children[2].textContent = "";
}

hoverHulululu = function() {
    unHoverImage(images[index]);
    if (!hovering) {
        index = (index + 1) % 3;
        hoverImage(images[index]);
        setTimeout(hoverHulululu, 3000);
    } else {
        hoverImage(images[index]);
        setTimeout(hoverHulululu, 200);
    }
    
    
}

let images = ["image-two", "image-three", "image-four"];
let index = 0;
let hovering = false;
window.onload = hoverHulululu;
