document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    document.getElementById("message").style.display = "block"; // Show the message
  });
  