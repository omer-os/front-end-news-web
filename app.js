const someNews = {
    
}


$('.burgerBtn').click(()=>{
    $('nav').toggleClass('showRightNav')
    $('.line-1').toggleClass('line1-animate')
    $('.line-2').toggleClass('line2-animate')
    $('.line-3').toggleClass('line3-animate')
})


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>=41){
        $('nav').css({"background-color": "#EDEDED"})
    }
    else{
        $('nav').css({"background-color": "white"})
    }
});
