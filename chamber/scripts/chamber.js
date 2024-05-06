document.addEventListener("DOMContentLoaded", function() {

// Display the copyright year
function getCopyrightYear() {
    const year = new Date().getFullYear();
    document.getElementById("cYear").innerHTML = `&copy; ${year}`;
}

// Display the last modified date of the page
function getLastModified() {
    const lastModified = new Date(document.lastModified).toGMTString();
    document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;
}

// Toggle Dark/Light Mode
function screenMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");

    const sections = document.querySelectorAll(
        "main, div.info, div.spotlights, div.event, div.event-card, section.style5, article.card, div.weather-info, div.form-wrapper, section.member, section.member a, div.form-wrapper, form label.top input, form label.sbs, form fieldset, form legend, form label.top"
    );
    sections.forEach((section) => {
        section.classList.toggle("dark-mode");
    });
}


});
