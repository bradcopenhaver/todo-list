
function Item(task, priority) {
  this.task = task;
  this.priority = priority;
}

Item.prototype.displayItem = function () {
  return this.task + " | " + this.priority + " priority";
};





$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var taskInput = $("#task").val();
    var priorityInput = $("#priority").val();

    var item = new Item(taskInput, priorityInput);

    var doneTask = function(that) {
      $(that).parent().fadeOut();
      $("#done").append($(that).parent());
      $("#doneList").show();
      $(that).parent().fadeIn();
      $("#done li span").removeClass();
    }

    if (priorityInput === "High") {
      $("#notDone").prepend("<li>" + item.displayItem() + "  <span class='glyphicon glyphicon-remove clickable'></span></li>");

      $(".clickable").first().click(function(){
        doneTask(this);
      });
    } else {
      $("#notDone").append("<li>" + item.displayItem() + "  <span   class='glyphicon glyphicon-remove clickable'></span></li>");

      $(".clickable").last().click(function(){
        doneTask(this);
      });
    }

    $("#task").val("");
  });

});
