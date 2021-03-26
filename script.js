
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




// ################# Sets the current Day At Top of Page #################

setInterval(function() {
    var time = moment().format("dddd, MMMM Do");
    $("#currentDay").text(time);
}, 1000)
 


// ############### Saves Hour as Key and Text as Value ###################

saveBtn.on("click", function(event) {

    var text = (event.target).previousElementSibling.value;
    var parentID = (event.target).parentNode.getAttribute('id');
    localStorage.setItem(parentID, text);
});

// ################### Render Each Hour's Text Value on Loading ##########

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


// ###################### Hour Coloring #############################

function colorShift() {

    
    var currentHour = moment().hour();
    

    if (currentHour >= 0 && currentHour < 9) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#d3d3d3");
        hour13.css("background-color", "#d3d3d3");
        hour14.css("background-color", "#d3d3d3");
        hour15.css("background-color", "#d3d3d3");
        hour16.css("background-color", "#d3d3d3");
        hour17.css("background-color", "#d3d3d3");

    } else if (currentHour >= 9 && currentHour <10) {
        hour9.css("background-color", "#ff6961");
        hour10.css("background-color", "##77dd77");
        hour11.css("background-color", "##77dd77");
        hour12.css("background-color", "##77dd77");
        hour13.css("background-color", "##77dd77");
        hour14.css("background-color", "##77dd77");
        hour15.css("background-color", "##77dd77");
        hour16.css("background-color", "#77dd77");
        hour17.css("background-color", "#77dd77");

    } else if (currentHour >= 10 && currentHour <11) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#ff6961");
        hour11.css("background-color", "#77dd77");
        hour12.css("background-color", "#77dd77");
        hour13.css("background-color", "#77dd77");
        hour14.css("background-color", "#77dd77");
        hour15.css("background-color", "#77dd77");
        hour16.css("background-color", "#77dd77");
        hour17.css("background-color", "#77dd77");

    } else if (currentHour >= 11 && currentHour <12) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#ff6961");
        hour12.css("background-color", "#77dd77");
        hour13.css("background-color", "#77dd77");
        hour14.css("background-color", "#77dd77");
        hour15.css("background-color", "#77dd77");
        hour16.css("background-color", "#77dd77");
        hour17.css("background-color", "#77dd77");

    } else if (currentHour >= 12 && currentHour <13) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#ff6961");
        hour13.css("background-color", "#77dd77");
        hour14.css("background-color", "#77dd77");
        hour15.css("background-color", "#77dd77");
        hour16.css("background-color", "#77dd77");
        hour17.css("background-color", "#77dd77");

    } else if (currentHour >= 13 && currentHour <14) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#d3d3d3");
        hour13.css("background-color", "#ff6961");
        hour14.css("background-color", "#77dd77");
        hour15.css("background-color", "#77dd77");
        hour16.css("background-color", "#77dd77");
        hour17.css("background-color", "#77dd77");

    } else if (currentHour >= 14 && currentHour <15) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#d3d3d3");
        hour13.css("background-color", "#d3d3d3");
        hour14.css("background-color", "#ff6961");
        hour15.css("background-color", "#77dd77");
        hour16.css("background-color", "#77dd77");
        hour17.css("background-color", "#77dd77");

    }  else if (currentHour >= 15 && currentHour <16) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#d3d3d3");
        hour13.css("background-color", "#d3d3d3");
        hour14.css("background-color", "#d3d3d3");
        hour15.css("background-color", "#ff6961");
        hour16.css("background-color", "#77dd77");
        hour17.css("background-color", "#77dd77");
    
    }  else if (currentHour >= 16 && currentHour <17) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#d3d3d3");
        hour13.css("background-color", "#d3d3d3");
        hour14.css("background-color", "#d3d3d3");
        hour15.css("background-color", "#d3d3d3");
        hour16.css("background-color", "#ff6961");
        hour17.css("background-color", "#77dd77");

    } else if (currentHour >= 17 && currentHour <18) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#d3d3d3");
        hour13.css("background-color", "#d3d3d3");
        hour14.css("background-color", "#d3d3d3");
        hour15.css("background-color", "#d3d3d3");
        hour16.css("background-color", "#d3d3d3");
        hour17.css("background-color", "#ff6961");

    } else if (currentHour >= 18 && currentHour <24) {
        hour9.css("background-color", "#d3d3d3");
        hour10.css("background-color", "#d3d3d3");
        hour11.css("background-color", "#d3d3d3");
        hour12.css("background-color", "#d3d3d3");
        hour13.css("background-color", "#d3d3d3");
        hour14.css("background-color", "#d3d3d3");
        hour15.css("background-color", "#d3d3d3");
        hour16.css("background-color", "#d3d3d3");
        hour17.css("background-color", "#d3d3d3"); 
    }
}

colorShift();

    



