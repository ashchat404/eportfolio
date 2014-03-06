/*
Author: Aishwarya Chaturvedi
Website: talentedash.co.uk
Version: 1
*/

var windowHeight = $(window).height();
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
  windowHeight = $(window).height();
  console.log(windowWidth);
  $("#container section").css("width",windowWidth);
  $("#container section").css("height",windowHeight);
  $("#container").css("height",windowHeight);
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
      if(!$(this).next().length){
        console.log("no more pages to right");
      }
      else{

        $(this).next().addClass("current").animate({
            marginLeft:"auto"
        },{duration:500,queue:false});

        $(this).removeClass("current").animate({
          marginLeft:"-100%"
        },{duration:500,queue:false});
      }
    });

    Hammer(array[i]).on("swiperight", function(ev) {
      if(!$(this).prev().length){
        console.log("no more pages to left");
      }
      else{

        $($(this)).removeClass("current").animate({  
          marginLeft:"auto"
        },{duration:500,queue:false}); 

        $($(this).prev()).addClass("current").animate({
          marginLeft:"0px"
        },{duration:500,queue: false});
      }
    });
};

/*
click function below
*/

$(".next").click(function(){
    if(!$(pages).next().length){
      console.log("no more pages to right");
    }
    else{
      $(cur).next().addClass("current").animate({
          marginLeft:"auto"
      },{duration:300,queue:false});

      $(".current").prev().removeClass("current").animate({
        marginLeft:"-" + windowWidth + "px"
      },{duration:300,queue:false});

    }
});

$(".prev").click(function(){
    if(!$(pages).prev().length){
      console.log("no more pages to left");
    }
    else{

        $(cur).prev().addClass("current").animate({
          marginLeft:"0px"
        },{duration:300,queue: false});

        $(".current").next().removeClass("current").animate({  
          marginLeft:"auto"
        },{duration:300,queue:false}); 
    }
});


