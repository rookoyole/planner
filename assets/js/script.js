var tasks = {};

//const moment = require('moment');
var dateMom = moment().format('dddd, MMMM Do');
$("#currentDay").replaceWith(dateMom);

let now = moment();
//console.log(now.format("hh:mm:ss"));

//console.log(moment().format('LT'));

var createTask = function(taskText, taskList) {
   $("#modalTaskDescription" + taskList).val(taskText);  
     
};


var auditTask = function(taskList) {
    var format = 'HH:mm'
S
    //var timeDiv = moment('11:00:00',format);

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
    } else if (moment().isBefore(timeDiv)) {
        $("#modalTaskDescription" + taskList).removeClass("bg-secondary");
        $("#modalTaskDescription" + taskList).addClass("future");
    } else if (moment().isAfter(timeDiv)) {
        // remove any old classes from element
        $("#modalTaskDescription" + taskList).removeClass("bg-secondary");
        $("#modalTaskDescription" + taskList).addClass("past");
  };
    }
    

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
        hour11: [],
        hour12: [],
        hour3: [],
        hour4: [],
        hour5: [],
        hour6: [],
        hour7: [],
        hour8: [],
        hour9: [],
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

// save button was clicked
$("#task-form-modal .btn-save1").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour11").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour11.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save2").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour12").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour12.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save3").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour3").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour3.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save4").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour4").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour4.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save5").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour5").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour5.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save6").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour6").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour6.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save7").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour7").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour7.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save8").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour8").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour8.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save9").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour9").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour9.push({
    text: taskText,
    });
    saveTasks();
});

// load tasks for the first time
loadTasks();