// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatburger").on("click", function(event) {
      var id = $(this).data("id");
      var newburger = $(this).data("newburger");
  
      var devouredState = {
        devoured: newburger
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed devoured to", newburger);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
    
      event.preventDefault();
  
      var newburger = {
        burger_name: $("#newburger").val().trim(),
        devoured: $("[ burger_name=devoured]").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("add new burger");
          
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
        
          location.reload();
        }
      );
    });
  });
  