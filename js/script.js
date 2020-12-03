
hoverImage = function(image) {
    for (let i = 0; i < images.length; i++) {
        if (images[i] != image) {
            unHoverImage(images[i]);
        }
    }
    let img = document.getElementById(image);
    img.children[0].style.filter = "grayscale(0%)";
    document.getElementById("image-one").children[0].style.filter = "opacity(0.2)";
    document.getElementById("image-one").children[1].textContent = img.children[1].textContent;
    document.getElementById("image-one").children[2].textContent = img.children[2].textContent;
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


window.addEventListener("scroll", function() {
    let scroll_position = window.scrollY;

    if (scroll_position < 300) {
        document.getElementById("navbar").style.filter = 'opacity(0%)';
        document.getElementById("navbar").style.height = '0px';
    }
    else if (scroll_position >= 300 && scroll_position < 500) {
        let opacity = (scroll_position - 300)/2;
        let height = (500 - scroll_position) + 80
        document.getElementById("navbar").style.filter = 'opacity(' + opacity + '%)';
        document.getElementById("navbar").style.height = height + "px";
    }
    else
    {
        document.getElementById("navbar").style.filter = 'opacity(100%)';
        document.getElementById("navbar").style.height = "80px";
    }
})