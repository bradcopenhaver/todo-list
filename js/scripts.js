
function Item(task, priority) {
  this.task = task;
  this.priority = priority;
  this.done = false;
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

    if (priorityInput === "High") {
      $("#output ul").prepend("<li>" + item.displayItem() + "  <span class='glyphicon glyphicon-remove clickable'></span></li>");

      $(".clickable").first().click(function(){
        $(this).parent().fadeOut();

      });
    }
    else {
      $("#output ul").append("<li>" + item.displayItem() + "  <span   class='glyphicon glyphicon-remove clickable'></span></li>");

      $(".clickable").last().click(function(){
        $(this).parent().fadeOut();

      });
    }
    $("#task").val("");

    $(".clickable").last().click(function(){
      $(this).parent().fadeOut();

    });
  });


});
