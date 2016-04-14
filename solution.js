var colors = ["blue", "magenta", "green", "red"];

function changeColor() {
    var randomIndex = Math.floor((Math.random() * colors.length) + 0);

    $("body").css("background-color", colors[randomIndex]);
}

function addColor() {
    var newColor = $("#newColor").val();
    colors.push(newColor);
   $("body").css("background-color", newColor);
}

 $( document ).ready(function() {
     $("#change").click(changeColor);
     $("#add").click(addColor);
 });