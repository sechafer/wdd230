// ********* Banner *********
function initBanner() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");
 
    // Check if today is Monday, Tuesday, or Wednesday
    var today = new Date();
    var dayOfWeek = today.getDay();
    var isBannerVisible = dayOfWeek >= 1 && dayOfWeek <= 3;
 
    // Check session storage to see if banner has been closed
    var isBannerClosed = sessionStorage.getItem("bannerClosed") === "true";
 
    // Set initial visibility
    banner.classList.toggle("banner", isBannerVisible && !isBannerClosed);
    banner.classList.toggle("banner-hide", !isBannerVisible || isBannerClosed);
 
    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
        // Store the banner closed state in session storage
        sessionStorage.setItem("bannerClosed", "true");
    });
}

// Initialize the banner when the document is fully loaded
document.addEventListener("DOMContentLoaded", initBanner);