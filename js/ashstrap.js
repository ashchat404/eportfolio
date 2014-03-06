var windowHeight = $(window).height();
var windowWidth = $(window).width();
$("#container").css("height",windowHeight);
$("#container section").css("height",windowHeight);
var array = [];
var pages = $("#container section");
$.each(pages,function(i,n){
  array.push(n);
});

$("#container section").css("width",windowWidth);

$(window).resize(function() {
  windowWidth = $(window).width();
  console.log(windowWidth);
  $("#container section").css("width",windowWidth);
});



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
        //$(this).next().addClass("current").css("marginLeft","0px");

        //$(this).removeClass("current").css("marginLeft","-100%");

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
        //$($(this)).removeClass("current").css("marginLeft","auto"); 

        //$($(this).prev()).addClass("current").css("marginLeft","0px");

        $($(this)).removeClass("current").animate({  
          marginLeft:"auto"
        },{duration:500,queue:false}); 

        $($(this).prev()).addClass("current").animate({
          marginLeft:"0px"
        },{duration:500,queue: false});
      }
    });
};

