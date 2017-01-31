// JS Patterns

//Function as Abstraction
(function() {
  var work = function() {
    console.log("ok good");
  }

  var doWork = function(f) {
    f();
  }

  doWork(work);


  //Modules - Reveling MOdule Pattern
  var createWorker = function() {

    var task1 = function() {
      console.log("task1")
    }

    var task2 = function() {
      console.log("Task 2")
    }

    return {
      job1: task1,
      job2: task2
    }
  }

  var worker = createWorker();

  worker.job1();
  worker.job2();
}());