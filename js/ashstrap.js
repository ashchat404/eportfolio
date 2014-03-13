/*
Author: Aishwarya Chaturvedi
Website: talentedash.co.uk
Version: 1.2
*/

var windowHeight = $(window).height()-50;
var windowWidth = $(window).width();
var array = [];
var pages = $("#container section");
var cur = document.getElementsByClassName('current');
var pages = $("section[data-role=page]");

$("#container").css("height",windowHeight);
$("#container section").css("height",windowHeight);

$.each(pages,function(i,n){
  array.push(n);
});

$("#container section").css("width",windowWidth);

$(window).resize(function() {
  windowWidth = $(window).width();
  windowHeight = $(window).height()-50;
  $("#container section").css("width",windowWidth);
  $("#container section").css("height",windowHeight);
  $("#container").css("height",windowHeight);
  $(".current").prevAll().removeClass("current").css("marginLeft","-"+windowWidth+"px");
});

/*
Swipe function below
*/

//To stop default verticle scrolling while swiping or dragging
$("#container").on("dragright dragleft",function(e){
  e.gesture.preventDefault();
});

for (i = 0;i<array.length;i++){
    $("#container #"+i).load("pages/page"+i+".html");
    Hammer(array[i]).on("swipeleft", function(ev) {
      movenext();
    });

    Hammer(array[i]).on("swiperight", function(ev) {
      moveprev();
    });
};

/*
click and keypress function below
*/
document.onkeydown = checkKey;

function checkKey(e){
  e = e || window.event;
    if (e.keyCode == '39'){
      movenext();
    }
    if (e.keyCode == '37'){
      moveprev();
    }
}

$(".next").click(function(){
  movenext();
});


$(".prev").click(function(){
  moveprev();
});

function movenext(){
  if(!$(".current").next().length){
    console.log("no more pages to right");
  }
  else{
    var id = $(".current").next().attr("id");
    $(".link").removeClass("active");
    $(".link[data-role="+id+"]").addClass("active");
    $(cur).next().addClass("current").animate({
        marginLeft:"auto"
    },{duration:300,queue:false});

    $(".current").prev().removeClass("current").animate({
      marginLeft:"-" + windowWidth + "px"
    },{duration:300,queue:false});

  }
};

function moveprev(){
  if(!$(".current").prev().length){
    console.log("no more pages to left");
  }
  else{
      var id = $(".current").prev().attr("id");
      $(".link").removeClass("active");
      $(".link[data-role="+id+"]").addClass("active");

      $(cur).prev().addClass("current").animate({
        marginLeft:"0px"
      },{duration:300,queue: false});

      $(".current").next().removeClass("current").animate({  
        marginLeft:"auto"
      },{duration:300,queue:false}); 
  } 
};


/*
Menu system
*/
$(".link").click(function(){
    for (z = 0; z<array.length; z++){
      if ($(this).attr("data-role") == array[z].id){
        var t = $(this).attr("data-role");
        $(".link").removeClass("active");
        $(this).addClass("active");
        $("section#"+t).prevAll().removeClass("current").animate({
            marginLeft:"-"+windowWidth+"px"
          },{duration:300,queue:false});
        $("section#"+t).nextAll().removeClass("current").css("marginLeft","auto");
        $("section#"+t).addClass("current").animate({
          marginLeft: "0px"
        },{duration:300,queue:false});
      }
    }
});
