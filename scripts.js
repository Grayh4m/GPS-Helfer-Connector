var map = L.map('map').setView([49.98419, 8.2791], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById("searchForhelpButton").onclick = function () {
        window.location = "search_for_help.html";
        
    };
