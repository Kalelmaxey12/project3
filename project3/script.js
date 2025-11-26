// ============================
// Google Map Initialization
// ============================

function initMap() {
    // Your original map location and zoom
    const mapOptions = {
        center: { lat: 51.508742, lng: -0.120850 },
        zoom: 5
    };

    const mapDiv = document.getElementById("googleMap");

    if (mapDiv) {
        const map = new google.maps.Map(mapDiv, mapOptions);

        // Example marker so the map isn't empty (optional but helpful)
        new google.maps.Marker({
            position: { lat: 51.508742, lng: -0.120850 },
            map: map,
            title: "London"
        });
    }
}

// Google Maps API callback
window.initMap = initMap;


// ============================
// Button Listeners (Page 4)
// ============================

document.addEventListener("DOMContentLoaded", function () {
    const questionsBtn = document.getElementById("questionsBtn");

    if (questionsBtn) {
        questionsBtn.addEventListener("click", function () {
            alert("If you have questions, contact me at: maxeykalel@gmail.com");
        });
    }
});
