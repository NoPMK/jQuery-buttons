let display = console.log 

$(".first").click(() => {
    console.log("Yeah, you clicked me")
});

$(".second").click(() => {
    $(".first").text("Haha, I got you!")
});

$(".third").click(() => {
    $("button").css("background-color" , "red")
});