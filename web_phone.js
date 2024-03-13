document.addEventListener("DOMContentLoaded", function() {
    // Function to handle click event on the "Get Started" button
    function handleGetStartedClick(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
        
        // Add your logic here for what should happen when the button is clicked
        // For example, you could simulate a form submission
        alert("Thank you for your interest! We will contact you shortly.");
    }
    
    // Event listener to trigger the function when the "Get Started" button is clicked
    const getStartedButton = document.querySelector(".cta-button");
    if (getStartedButton) {
        getStartedButton.addEventListener("click", handleGetStartedClick);
    }
});