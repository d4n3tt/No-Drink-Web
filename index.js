function draw(max, classname, colorname){
   var i = 1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i, classname, colorname);
          i++;
    } else{
        clearInterval(func1);
    }
    },10);
}

function color1(i, classname,colorname){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, gainsboro "+i+"% 100%)"
   });
}

function play(){
    draw(39, '.pie-chart1', 'crimson');
}

///////////////////////

var flag = 0;

$(window).on("scroll", function() {
    var st = ($(window).scrollTop() - 400) / 2;
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
            "opacity": "100%"
        });
    }
    /////
    if ($(window).scrollTop() > $("#statistics").position().top - 100 && flag == 0) {
        play();
        flag = 1;
    }
});