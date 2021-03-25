


// $(".lead").text();
setInterval(function() {
    var time = moment().format("dddd, MMMM Do");
    $("#currentDay").text(time);
}, 1000)


moment().format("MMM Do YY");  