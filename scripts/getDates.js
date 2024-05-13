document.addEventListener("DOMContentLoaded", function() {
    function getCopyrightYear() {
        const year = new Date().getFullYear();
        return ` ${year}`;
    }
    document.getElementById("cYear").innerHTML = getCopyrightYear();
    
    // modificacion e impresion de fecha
    function getLastModified() {
        const lastModified = new Date(document.lastModified).toGMTString();
        return `Last Modified: ${lastModified}`;
    }
    document.getElementById("lastModified").innerHTML = getLastModified();
            //agregar uso de boton menu
            const hamButton = document.querySelector('#menu');
            const navigation = document.querySelector('.navigation');

            hamButton.addEventListener('click', () => { /* Completa el evento de escucha */
                navigation.classList.toggle('open'); /* Completa la clase que se va a alternar */
                hamButton.classList.toggle('open');
            });



        //modo nocturno
        const modeButton = document.querySelector("#mode");
        const main = document.querySelector("main");

        // Almacenar los colores originales antes de cambiarlos
        const originalColors = {};
        main.querySelectorAll("h1, h2, h3, a, p").forEach(element => {
            originalColors[element.tagName.toLowerCase()] = getComputedStyle(element).color;
        });

        modeButton.addEventListener("click", () => {
            if (modeButton.textContent.includes("🕶️")) {
                main.style.background = "#000";
                main.style.color = "#fff";
                modeButton.textContent = "🔆";
                // Cambiar el color del texto a blanco en h1, h2, h3, a y p dentro de main
                main.querySelectorAll("h1, h2, h3, a, p").forEach(element => {
                    element.style.color = "#fff";
                });
            } else {
                main.style.background = "var(--paragraph-background-color)";
                main.style.color = "var(--paragraph-color-on-white)";
                modeButton.textContent = "🕶️";
                // Restaurar el color del texto según el estilo original dentro de main
                main.querySelectorAll("h1, h2, h3, a, p").forEach(element => {
                    const tagName = element.tagName.toLowerCase();
                    element.style.color = originalColors[tagName];
                });
            }
        });

//visitas

// 1Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.


});

