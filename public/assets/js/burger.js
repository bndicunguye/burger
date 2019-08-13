// Make sure we wait to attach our handlers until the DOM is fully loaded.

    $(".eatburger").on("click", function(event) {
      
      var id = $(this).data("id");
      var newburger = $(this).data("newburger");
  
      var devouredState = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed devoured to", newburger);
          location.reload();
        }
      );
    });
  
    $("#mySubmit").on("click", function(event) {
      console.log("new")
      event.preventDefault();
  
      var newburger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
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

  