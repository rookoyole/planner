var tasks = {};

//const moment = require('moment');
var dateMom = moment().format('dddd, MMMM Do');
$("#currentDay").replaceWith(dateMom);

let now = moment();
console.log(now.format("hh:mm:ss"));

console.log(moment().format('LT'));

var createTask = function(taskText, taskList) {
   $("#modalTaskDescription" + taskList).val(taskText);    
};

var auditTask = function(taskEl) {
  
    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
      $(taskEl).addClass("list-group-item-danger");
    } else if (Math.abs(moment().diff(time, "days")) <= 2) {
      $(taskEl).addClass("list-group-item-warning");
    }
  };

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
        hour1: [],
        hour2: [],
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
        //auditTask(task.text, list);
      });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// save button was clicked
$("#task-form-modal .btn-save1").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour1").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour1.push({
    text: taskText,
    });
    saveTasks();
});

// save button was clicked
$("#task-form-modal .btn-save2").click(function() {
    // get form values
    var taskText = $("#modalTaskDescriptionhour2").val();
    var taskDate = 0;
    // save in tasks array
    tasks.hour2.push({
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