document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    function subscribe(event) {
      event.preventDefault(); // Prevents the default form submission behavior
      var emailInput = document.querySelector('#newsletter input[type="email"]');
      var email = emailInput.value.trim(); // Trim removes leading and trailing whitespaces
      if (email !== '') {
        // Here you can add code to send the email address to your server for subscription handling
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field after submission
      } else {
        alert('Please enter a valid email address.');
      }
    }

    // Attach event listener to the form for submitting
    var subscribeForm = document.querySelector('#newsletter form');
    subscribeForm.addEventListener('submit', subscribe);
  });
