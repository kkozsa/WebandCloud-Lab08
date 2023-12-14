window.onload = function() {
    $(function(){ alert("jQuery + DOM loaded."); });
}

$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").toggle();
  });
   $(".btn2").click(function(){
    $("h2").toggle();
  });    
  $(".btn3").click(function(){
    $("#test").toggle();
  });   
  $("input").focus(function(){
    $(this).css("background-color", "lightblue");
  });
  $("input").blur(function(){
    $(this).css("background-color", "lightgreen");
  });

  $("p").on({
    mouseenter: function () {
        $(this).css("background-color", "lightblue");
    },
    mouseleave: function () {
        $(this).css("background-color", "");
    },
    click: function () {
        $(this).css("background-color", "lightgreen");
    }
});

});

