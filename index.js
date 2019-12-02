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
         "background":"conic-gradient("+colorname+", mediumPurple "+i+"%, gainsboro "+i+"% 100%)",
    });
 }
 
 function play(){
     draw(39, '.pie-chart1', 'palevioletred');
     draw(50.6, '.pie-chart2', 'palevioletred');
 }
 
 ///////////////////////
 
 var flag = 0,  i = 0, t = 0;

 textClick = setInterval(function() {
    if (t == 0) {
        i++;
        if (i == 100) t = 1;
    }
    if (t == 1){
        i--;
        if (i == 0) t = 0;
    }
    $(".text-click").css({
        "opacity":i+"%"
    });
 }, 5);

 $(document).ready(function() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("chrome") == -1) {
        $(".browser-check").text("이 홈페이지는 구글 크롬으로 접속하셔야 정상적으로 작동합니다.");
    } else {
        $(".browser-check").text("");
    }
 });
 
 
 $(window).on("scroll", function() {
     var st = ($(window).scrollTop() - 1600) / 2 - 10;
     var st2 = 100 - ($("#statistics .chart-section").position().top - 400 - $(window).scrollTop());
     var st3 = 100 - ($("#statistics .s1 .text").position().top - 400 - $(window).scrollTop());
     var st4 = 100 - ($("#danger").position().top - 200 - $(window).scrollTop());
     var st5 = 100 - ($("#test .test-table").position().top - 400 - $(window).scrollTop());
     var st6 = 100 - ($("#help .s119").position().top - 400 - $(window).scrollTop());
     var st7 = 100 - ($("#help .text").position().top - 400 - $(window).scrollTop());
     if ($(window).scrollTop() < 1800 && $(window).scrollTop() > 1600) {
         $(".header-container").css({
             "opacity": st + "%"
         });
     } else if ($(window).scrollTop() <= 1600) {
         $(".header-container").css({
             "opacity": "0%"
         });
     } else {
         $(".header-container").css({
             "opacity": "90%"
         });
     }
     /////
     if ($(window).scrollTop() > $("#statistics").position().top - 200 && $(window).scrollTop() < $("#statistics").position().top + 300 && flag == 0) {
         play();
         flag = 1;
     } else if ($(window).scrollTop() > $("#statistics").position().top + 800 || $(window).scrollTop() < $("#statistics").position().top - 500) {    
         $(".pie-chart1").css({
             "background":"conic-gradient(palevioletred 0% 0%, gainsboro 0% 100%)"
         });
         flag = 0;
     }
     /////
     if ($(window).scrollTop() < $("#statistics .chart-section").position().top - 400) {
         $("#statistics .chart-section").css({
             "opacity": st2 + "%"
         });
         $("#statistics .chart-title").css({
             "opacity": st2 + "%"
         });
     } else {
         $("#statistics .chart-section").css({
             "opacity": "100%"
         });
         $("#statistics .chart-title").css({
             "opacity": "100%"
         });
     }
     if ($(window).scrollTop() < $("#statistics .s1 .text").position().top - 400) {
         $("#statistics .s1 .text").css({
             "opacity": st3 + "%"
         });
     } else {
         $("#statistics .s1 .text").css({
             "opacity": "100%"
         });
     }
     if ($(window).scrollTop() < $("#danger").position().top - 200) {
        $("#danger").css({
            "opacity": st4 + "%"
        });
    } else {
        $("#danger").css({
            "opacity": "100%"
        });
    }
    if ($(window).scrollTop() < $("#test .test-table").position().top - 200) {
        $("#test .test-table").css({
            "opacity": st5 + "%"
        });
    } else {
        $("#test .test-table").css({
            "opacity": "100%"
        });
    }
    if ($(window).scrollTop() < $("#help .s119").position().top - 400) {
         $("#help .s119").css({
             "opacity": st6 + "%"
         });
     } else {
         $("#help .s119").css({
             "opacity": "100%"
         });
     }
     if ($(window).scrollTop() < $("#help .text").position().top - 400) {
         $("#help .text").css({
             "opacity": st7 + "%"
         });
     } else {
         $("#help .text").css({
             "opacity": "100%"
         });
     }
     ///
     if ($(window).scrollTop() >= $("#help").position().top - 50) {
         $("header a").css({
             "color": "black"
         });
         $(".a-help").css({
             "color": "#7B70EF"
         });
     } else if ($(window).scrollTop() >= $("#test").position().top - 50) {
        $("header a").css({
            "color": "black"
        });
        $(".a-test").css({
            "color": "#9370D8"
        });
    } else if ($(window).scrollTop() >= $("#danger").position().top - 50) {
         $("header a").css({
             "color": "black"
         });
         $(".a-danger").css({
             "color": "#AB70C1"
         });
     } else if ($(window).scrollTop() >= $("#statistics").position().top - 50) {
         $("header a").css({
             "color": "black"
         });
         $(".a-statistics").css({
             "color": "#C370AA"
         });
     }
 });

 ////

 $(".detail h4").text("알코올을 섭취하지 않으면 잠을 잘 수 없는 알코올 의존성 수면장애나 불면증을 겪을 수 있습니다. 알코올의존증 환자의 불면증 유병율은 연구에 따라 36~72%에 육박합니다. 또 알코올은 각성 시에 나타나는 뇌파를 수면 중에 증가시키고 신체회복에 중요한 역할을 하는 렘 수면 또한 차단하여 일어난 후에도 피로를 느끼게 합니다.");
 $(".icon1").css({
    "transform": "scale(1.1)"
 })
function mover1(){
    $(".icon").css({
        "transform": "scale(1.0)"
    })
    $(".icon1").css({
        "transform": "scale(1.1)"
    })
    $(".detail h4").text("알코올을 섭취하지 않으면 잠을 잘 수 없는 알코올 의존성 수면장애나 불면증을 겪을 수 있습니다. 알코올의존증 환자의 불면증 유병율은 연구에 따라 36~72%에 육박합니다. 또 알코올은 각성 시에 나타나는 뇌파를 수면 중에 증가시키고 신체회복에 중요한 역할을 하는 렘 수면 또한 차단하여 일어난 후에도 피로를 느끼게 합니다.");
}
function mover2(){
    $(".icon").css({
        "transform": "scale(1.0)"
    })
    $(".icon2").css({
        "transform": "scale(1.1)"
    })
    $(".detail h4").text("음주 전후 약물을 섭취하면 알코올이 약물의 대사을 저해하여 약물농도를 높이거나 독성물질의 발생을 촉진해 약물의 부작용의 발현 빈도나 강도를 상승시킬 수 있고, 반대로 약물의 분해를 촉진하여 약효를 떨어뜨릴 수도 있습니다. 위염 등 위장장애 및 위장출혈, 간 손상, 저혈압 등과 같은 부작용을 겪을 수 있습니다.\n");
}
function mover3(){
    $(".icon").css({
        "transform": "scale(1.0)"
    })
    $(".icon3").css({
        "transform": "scale(1.1)"
    })
    $(".detail h4").text("과다한 음주는 간질환을 유발합니다.\n무증상 지방간에서 알코올성 간염, 간경변, 말기 간부전에 이르는 다양한 질환에 노출될 수 있습니다.");
}
function mover4(){
    $(".icon").css({
        "transform": "scale(1.0)"
    })
    $(".icon4").css({
        "transform": "scale(1.1)"
    })
    $(".detail h4").text("세계보건기구(WTO)는 술을 1급 발암 물질로 지정하고 술을 마시면 마실수록 암 발생 위험이 높아진다고 경고했습니다.\n인체가 흡수한 발암 물질을 녹여 점막이나 인체 조직 등에 쉽게 침투하도록 돕는 역할을 합니다.\n알코올이 몸에서 흡수되는 과정에서 생성되는 아세트알데히드 역시 암을 일으킬 수 있습니다.");
}