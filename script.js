let display = console.log 

$(".first").click(() => {
    console.log("Yeah, you clicked me")
});


$(".second").click(() => {
    $(".first").text("Haha, I got you!")
});




let color_list = ["lime", "yellow", "red", "orange", "aqua", "purple"];
let i = 0;
$(".third").click( () => {
    color = color_list[i];
    $("button").css("background-color", color);
    if (i === color_list.length - 1) {
        i = 0;
    } else {i = i+1;}
});

let clicked = true;
$("third").click( () => {
    color = $("#color_input").val();
    if (color === "") {
        color = "blue"
    };
    if (clicked === true) {
        $("button").css("background-color", color);
        console.log("it is true")
        clicked = false;
    } else {
        console.log("it is false")
    };
});