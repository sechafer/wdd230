// ********* Banner *********
function initBanner() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");
  
    // Check if today is Monday, Tuesday, or Wednesday
    var today = new Date();
    var dayOfWeek = today.getDay();
    // var dayOfWeek = 1; // for testing purposes
    var isBannerVisible = dayOfWeek >= 1 && dayOfWeek <= 3;
  
    // Set initial visibility
    banner.classList.toggle("banner", isBannerVisible);
    banner.classList.toggle("banner-hide", !isBannerVisible);
  
    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
    });
  }