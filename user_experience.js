document.addEventListener("DOMContentLoaded", function () {
    var toggleStylesheetButton = document.getElementById("toggleStylesheetButton");
    var stylesheetLink = document.getElementById("stylesheet");

    // Create an array to store the stylesheet URLs
    var stylesheets = [
        "form.css",        // Main stylesheet
        "lightMode.css"    // Alternative stylesheet
    ];

    var currentStylesheetIndex = 0;

    // Function to toggle the stylesheet
    function toggleStylesheet() {
        currentStylesheetIndex = (currentStylesheetIndex + 1) % stylesheets.length;

        // Add a random query parameter to force a stylesheet refresh
        stylesheetLink.href = stylesheets[currentStylesheetIndex] + "?v=" + Math.random();
    }

    toggleStylesheetButton.addEventListener("click", toggleStylesheet);
});
