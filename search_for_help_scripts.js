var receivedArray = JSON.parse(localStorage.getItem("marker"));
var marker = [];
if (receivedArray) {
  marker = receivedArray;
}
function navigateTo(site) {
  localStorage.setItem("marker", JSON.stringify(marker));
  window.location = site;
}
function saveInput() {
  var address = document.getElementById("woInput").value;
  var url =
    "https://nominatim.openstreetmap.org/search?format=json&q=" +
    encodeURIComponent(address);
  console.log(url);

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.length > 0) {
        var location = data[0];
        console.log("Latitude: " + location.lat);
        console.log("Longitude: " + location.lon);
        document.getElementById("woInput").value = location.display_name;
        var input = [
          location.lat,
          location.lon,
          document.getElementById("wasInput").value,
        ];
        marker.push(input);
      } else {
        console.log("Geocoding failed");
      }
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
