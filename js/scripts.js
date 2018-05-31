$(function(){


  $("#triangle").submit(function(event) {
    $(".invisibleTriangles").children().hide();
    event.preventDefault();
    var one = parseInt($("#sideOne").val());
    var two = parseInt($("#sideTwo").val());
    var three = parseInt($("#sideThree").val());

    if (one === two && one === three) {
      $(".equilateral").show();
    } else if (one + two <= three || one + three <= two || two + three <= one) {
      $(".notATriangle").show();
    } else if (one === two || two === three || three === one) {
      $(".isosceles").show();
    } else if (one!== two && two !== three && one !== three) {
      $(".scalene").show();
    }

  });





});
