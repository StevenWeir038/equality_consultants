/* jshint esversion: 8 */
function SendMail() {
  const params = {
    // Send values
    from_name: document.getElementById("userName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_bo7bsr2", "template_9ogaexm", params)
    .then(function (res) {
      // alert("Success! " + res.status);
      console.log("Success " + res.status);
      // Then clear all values
      document.getElementById("userName").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
      window.location = "thankyou.html";
    });
}