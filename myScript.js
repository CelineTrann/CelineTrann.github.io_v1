document.addEventListener("DOMContentLoaded", function(e) {
  
  var accordion = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {

      // Toggle between adding and removing active class
      this.classList.toggle("active");

      // Toggles between showing and hiding panel
      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


})
