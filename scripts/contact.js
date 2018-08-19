function process_form()
{
  var fullName = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('contact_message').value;
  
  /* Basic validation - ensure none of the fields are blank */
  if(fullName == "" || email == "" || message == ""){
    alert("Please enter a name, email and message");
    return;
  }

  /* If all the data was entered, display a greeting */
  alert("Hi "+ fullName + "! Thank you for checking out my website."+
        "\nWe will get back to you at " + email +
        "\nHave a great day!")
}