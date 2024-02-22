document.addEventListener("DOMContentLoaded", function() {
    // Get the category link element
    const categoryLink = document.querySelector(".category-link");
  
    // Get the panel element
    const panel = document.getElementById("add-quiz-panel");
  
    // Add click event listener to the category link
    categoryLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Toggle the visibility of the panel
      if (panel.style.display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });
  });
  