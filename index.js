$(document).ready(function(){
    draw(37.1, '.pie-chart1', 'crimson');
});

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
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
   });
}

function play(){
    draw(37.1, '.pie-chart1', 'crimson');
}