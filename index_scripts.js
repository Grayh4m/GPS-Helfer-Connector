var receivedArray = JSON.parse(localStorage.getItem("marker"));
var marker = [];
if (receivedArray) {
  marker = receivedArray;
}
var map = L.map("map").setView([49.98419, 8.2791], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function navigateTo(site) {
  localStorage.setItem("marker", JSON.stringify(marker));
  window.location = site;
}

for (var i = 0; i < marker.length; i++) {
  L.marker([marker[i][0], marker[i][1]])
    .addTo(map)
    .bindPopup(marker[i][2])
    .openPopup();
}
