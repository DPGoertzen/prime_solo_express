$(function(){

  function animateColors(){
    $(".container").animate({color: 'red'}, 400).delay(400).animate({color: 'green'}, 400);
  }

  $(".balancer").on("click", function(){
    var ajaxObject = $.get('/balance');
    ajaxObject.then(function(data){
      $(".container").empty()
      $(".container").append("<p>" + data.header + "</p>");
      $(".container").append(data.balance);

    }).catch(function(){
      console.log("nothing returned!");
    });
    animateColors();
    setInterval(animateColors, 1200);


  });

})
