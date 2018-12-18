// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      // console.log(".change-devoured button clicked")
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
      var newDevouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          // console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      // console.log("create form submit button clicked")
        var newBurger = {
        burger_name: $("#add").val().trim(),
        devoured: 0
        // old version was devoured: $("[name=devoured]:checked").val().trim()
      };

      // console.log("inside burgers.js .create-form function and the new burger is ",newBurger)
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // console.log("inside burgers.js ajax POST request and sending post then reload");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
