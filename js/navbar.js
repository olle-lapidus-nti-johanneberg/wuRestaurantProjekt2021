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