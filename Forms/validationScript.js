// JavaScript code for form validation

// Add an event listener to the form that submits an event
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent form from submitting
  event.preventDefault(); 
  
  // Retrieve the input field value
  var inputField = document.getElementById('inputField').value;
  
  // Regular expression pattern for alphanumeric input
  var alphanumericRegex = /^[a-zA-Z0-9]+$/;
  
  // Check if the input value matches the pattern
  var messageElement = document.getElementById('message');

  if (alphanumericRegex.test(inputField)) {
    // Valid input: display confirmation and submit the form
    messageElement.textContent = 'Form submitted successfully!';
    messageElement.className = 'success';
    messageElement.style.display = 'block';
  } else {
    // Invalid input: display error message
    messageElement.textContent = 'Error: Input must be alphanumeric!';
    messageElement.className = 'error';
    messageElement.style.display = 'block';
  }
});
