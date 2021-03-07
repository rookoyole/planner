var tasks = {};

//const moment = require('moment');
var dateMom = moment().format('dddd, MMMM Do');
$("#currentDay").replaceWith(dateMom);

let now = moment();
//console.log(now.format("hh:mm:ss"));

//console.log(moment().format('LT'));
// --------------------------------------------------------------------------------------------------------------- //
var createTask = function(taskText, taskList) {
   $("#modalTaskDescription" + taskList).val(taskText);  
   //debugger
   if (taskText === "") {
       
   }
   auditTask(taskList);
};
// --------------------------------------------------------------------------------------------------------------- //
var auditTask = function(taskList) {
    var format = 'HH:mm'

    //var timeDiv = moment('11:00:00',format);
console.log(taskList);
console.log(format);
    // remove 'hour' from index
    var hour = taskList.replace("hour", "") + ":00";

    var timeDiv = moment(hour,format);
    var lowerTime = (hour.replace(":00", "")-1) + ":59";
    var lowerMom = moment(lowerTime, format);
    var upperTime = (parseInt(hour.replace(":00", ""))+1) + ":00";
    var upperMom = moment(upperTime, format);

    //var timeDiv = moment(timeDiv,format);
console.log(lowerTime);
console.log(timeDiv);
console.log(upperTime);

    // apply new class if task is near/over due date
    //if (moment(timeDiv).isBetween(lowerMom, upperMom, 'minute')) {
        if (moment() > lowerMom && moment() < upperMom) {
        $("#modalTaskDescription" + taskList).removeClass("bg-secondary");
        $("#modalTaskDescription" + taskList).addClass("present");
        $("#modalTaskDescription" + taskList).css({"background-color": "#ff6961", "color": "white"});
    } else if (moment().isBefore(timeDiv)) {
        $("#modalTaskDescription" + taskList).removeClass("bg-secondary");
        $("#modalTaskDescription" + taskList).addClass("future");
        $("#modalTaskDescription" + taskList).css({"background-color": "#77dd77", "color": "white"});
    } else if (moment().isAfter(timeDiv)) {
        // remove any old classes from element
        $("#modalTaskDescription" + taskList).removeClass("bg-secondary");
        $("#modalTaskDescription" + taskList).addClass("past");
        $("#modalTaskDescription" + taskList).css({"background-color": "#d3d3d3", "color": "white"});
  };
}
// --------------------------------------------------------------------------------------------------------------- //
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
        hour9: [],
        hour10: [],
        hour11: [],
        hour12: [],
        hour13: [],
        hour14: [],
        hour15: [],
        hour16: [],
        hour17: [],
        };
    }

    // loop over object properties
    $.each(tasks, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, list);
        auditTask(list);
      });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// --------------------------------------------------------------------------------------------------------------- //
// save button was clicked
$("#task-form-modal .btn-save1").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour9").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour9.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save2").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour10").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour10.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save3").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour11").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour11.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save4").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour12").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour12.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save5").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour13").val();
    var taskDate = 0;
    console.log(taskText);

    // save in tasks array
    tasks.hour13.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save6").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour14").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour14.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save7").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour15").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour15.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save8").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour16").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour16.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// save button was clicked
$("#task-form-modal .btn-save9").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour17").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour17.push({
    text: taskText,
    });
    saveTasks();
    loadTasks();
});

// load tasks for the first time
loadTasks();