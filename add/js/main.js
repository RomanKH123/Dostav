function slowScroll(id){
    $("html, body").animate({
        scrollTop: $(id).offset().top
    },300);
    return false;
}