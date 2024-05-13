document.addEventListener("DOMContentLoaded", function() {
    const lastModified = new Date(document.lastModified);
    const options = { year: "numeric", month: "long", day: "numeric" };
    document.getElementById("lastModified").textContent = "Last modified: " + lastModified.toLocaleDateString("en-US", options);
});