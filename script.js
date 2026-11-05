// Wait for the webpage to fully load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded successfully!");

  // Select the contact form
  const contactForm = document.querySelector("form");

  // Check if the form exists on the current page (it only exists on contact.html)
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the page from refreshing

      // Show a success message to the user
      alert("Thank you for your message! I will get back to you soon.");

      // Clear the form fields
      contactForm.reset();
    });
  }
});
