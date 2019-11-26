function draw(max, classname, colorname){
   var i = 1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i, classname, colorname, max);
          i++;
    } else{
        clearInterval(func1);
    }
    },10);
}

function color1(i, classname,colorname, max){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, gainsboro "+i+"% 100%)",
   });
}

function play(){
    draw(39, '.pie-chart1', 'crimson');
}

///////////////////////

var flag = 0;

$(window).on("scroll", function() {
    var st = ($(window).scrollTop() - 400) / 2 - 10;
    var st2 = 100 - ($("#statistics .s1 .text").position().top - 400 - $(window).scrollTop());
    if ($(window).scrollTop() < 600 && $(window).scrollTop() > 400) {
        $(".header-container").css({
            "opacity": st + "%"
        });
    } else if ($(window).scrollTop() <= 400) {
        $(".header-container").css({
            "opacity": "0%"
        });
    } else {
        $(".header-container").css({
            "opacity": "90%"
        });
    }
    /////
    if ($(window).scrollTop() > $("#statistics").position().top - 100 && flag == 0) {
        play();
        flag = 1;
    }
    /////
    if ($(window).scrollTop() < $("#statistics .s1 .text").position().top - 400) {
        $("#statistics .s1 .text").css({
            "opacity": st2 + "%"
        });
    } else {
        $("#statistics .s1 .text").css({
            "opacity": "100%"
        });
    }
});