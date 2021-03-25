
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
    
    var storageKey = hour10.attr('id');
    var value = localStorage.getItem(storageKey);
    hour10.find(".description").val(value);
    
};
renderSchedule();









// ################ Reference code ###################


// var projectForm = $('#projectForm');
// projectForm.on("submit",addItem);
// projectList=[];
// function addItem(event) {
//     event.preventDefault();
//     projectItem = {
//         name: $("#nameInput").val(),
//         type: $("#typeInput").val(),
//         rate: $("#rateInput").val(),
//         date: $("#datepicker").val()
//     };
//     projectList.push(projectItem);
//     $("#nameInput").val("");
//     $("#typeInput").val("");
//     $("#rateInput").val("");
//     $("#datepicker").val("");
// }



// ##################### REFERENCE CODE #################
// if (window.localStorage["taskText"]) {
//     txt1.value = window.localStorage["taskText"];
// }
// txt1.addEventListener("keyup", function () {
//     window.localStorage["taskText"] = txt1.value;
// })
