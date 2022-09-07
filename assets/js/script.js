/* jshint esversion: 8 */

const contactFormButton = document.getElementById("contact-form-button");


// send an email to using form (show on console.log for now)
function sendMessage() {
    // check all fields have an input using an if statement

    /* 
    Variables for contact form name, email & message.
    Do within function as it only triggers once user will have input values
    */
    let contactFormNameVal = document.getElementById("contact-form-name").value;
    let contactFormEmailVal = document.getElementById("contact-form-email").value;
    let contactFormMessageVal = document.getElementById("contact-form-message").value;
    let contactFields = [contactFormNameVal, contactFormNameVal, contactFormMessageVal]
    console.log(contactFields);
}

// Event listeners to submit form with left click or by pressing enter
contactFormButton.addEventListener("click", sendMessage);
contactFormButton.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});