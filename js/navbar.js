window.addEventListener("scroll", function() {
    let scroll_position = window.scrollY;

    if (scroll_position < 30) {
        document.getElementById("navbar").style.filter = 'opacity(0%)';
        document.getElementById("navbar").style.height = '0px';
    }
    else if (scroll_position >= 30 && scroll_position < 200) {
        let opacity = (scroll_position - 30)/0.7;
        let height = (scroll_position - 200)/2 + 80
        document.getElementById("navbar").style.filter = 'opacity(' + opacity + '%)';
        document.getElementById("navbar").style.height = height + "px";
    }
    else
    {
        document.getElementById("navbar").style.filter = 'opacity(100%)';
        document.getElementById("navbar").style.height = "80px";
    }
})