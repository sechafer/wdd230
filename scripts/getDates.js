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
});

