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

  var leaderboard = document.getElementById('leaderboard');

  leaderboard.addEventListener('click', function() {
    console.log('leaderboard clicked');
    customers.classList.toggle('hidden');
  });

  // document.addEventListener("DOMContentLoaded", function() {
  //   // Get the leaderboard item
  //   const leaderboardItem = document.querySelector(".menu li:nth-child(4) a");
  
  //   // Get the customers div
  //   const customersDiv = document.querySelectorAll(".customers");
  
  //   // Add click event listener to the leaderboard item
  //   leaderboardItem.addEventListener("click", function(event) {
  //     event.preventDefault(); // Prevent the default behavior of the link
  
  //     // Toggle the hidden class on the customers div
  //     customersDiv.classList.toggle("hidden");
  //   });
  // });
  