
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');
var saveBtn = $('.saveBtn');
var timeBlock = $('.time-block');
var past = $('.past');
var present = $('.present');
var future = $('.future');




// ################# Sets the current Date At Top of Page #################

setInterval(function() {
    var time = moment().format("dddd, MMMM Do");
    $("#currentDay").text(time);
}, 1000)
 


// ############### Saves Hour as Key and Text as Value ################


saveBtn.on("click", function(event) {

    var text = (event.target).previousElementSibling.value;
    var parentID = (event.target).parentNode.getAttribute('id');
    localStorage.setItem(parentID, text);
});


function renderSchedule() {

  
    var storageKey = hour9.attr('id');
    var value = localStorage.getItem(storageKey);
    hour9.find(".description").val(value);

    var storageKey = hour10.attr('id');
    var value = localStorage.getItem(storageKey);
    hour10.find(".description").val(value);

    var storageKey = hour11.attr('id');
    var value = localStorage.getItem(storageKey);
    hour11.find(".description").val(value);

    var storageKey = hour12.attr('id');
    var value = localStorage.getItem(storageKey);
    hour12.find(".description").val(value);

    var storageKey = hour13.attr('id');
    var value = localStorage.getItem(storageKey);
    hour13.find(".description").val(value);

    var storageKey = hour14.attr('id');
    var value = localStorage.getItem(storageKey);
    hour14.find(".description").val(value);

    var storageKey = hour15.attr('id');
    var value = localStorage.getItem(storageKey);
    hour15.find(".description").val(value);

    var storageKey = hour16.attr('id');
    var value = localStorage.getItem(storageKey);
    hour16.find(".description").val(value);

    var storageKey = hour17.attr('id');
    var value = localStorage.getItem(storageKey);
    hour17.find(".description").val(value);

    
};
renderSchedule();



// ###################### Hour Coloring ####################

// function colorShift() {
//     var currentHour = moment().hour();
//     console.log(currentHour);

//     if(currentHour <= 8 || currentHour >=17)
// }













    
// function renderSchedule() {
    
//     var storageKey = hour10.attr('id');
//     var value = localStorage.getItem(storageKey);
//     hour10.find(".description").val(value);
    
// };
// renderSchedule();

    // var storageKey9 = hour9.attr('id');
    // var value9 = localStorage.getItem(storageKey9);
    // hour9.find(".description").val(value9);
    
    // var storageKey10 = hour10.attr('id');
    // var value10 = localStorage.getItem(storageKey10);
    // hour10.find(".description").val(value10);

    // var storageKey11 = hour11.attr('id');
    // var value11 = localStorage.getItem(storageKey11);
    // hour11.find(".description").val(value11);
    
    // var storageKey12 = hour12.attr('id');
    // var value12 = localStorage.getItem(storageKey12);
    // hour12.find(".description").val(value12);

    // var storageKey = hour10.attr('id');
    // var value = localStorage.getItem(storageKey);
    // hour10.find(".description").val(value);
    










