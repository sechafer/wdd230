
function getCopyrightYear() {
        const year = new Date().getFullYear();
        return `© ${year}`;
    }
    document.getElementById("cYear").innerHTML = getCopyrightYear();

    // modificacion e impresion de fecha
    function getLastModified() {
        const lastModified = new Date(document.lastModified).toGMTString();
        return `Last Modified:  ${lastModified}`;
    }
    document.getElementById("lastModified").innerHTML = getLastModified();

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


