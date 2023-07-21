var receivedArray = JSON.parse(localStorage.getItem("marker"));
var marker = [];

if (receivedArray) {
  marker = receivedArray;
  var container = document.getElementById("rechte-seite");
  for (let i = 0; i < marker.length; i++) {
    var innerArray = marker[i];
    var paragraph = document.createElement("p");
    var karte = document.createElement("div");
    karte.className = "karte";
    var karteTitle = document.createElement("h1");
    karteTitle.textContent = innerArray[2];
    var kartePlace = document.createElement("h2");

    convertToAddress(innerArray[0], innerArray[1], kartePlace);

    var karteInfo = document.createElement("p");
    karteInfo.textContent = innerArray[3];

    karte.appendChild(karteTitle);
    karte.appendChild(kartePlace);
    karte.appendChild(karteInfo);
    container.appendChild(karte);
  }
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
  if (marker[i][0] != null) {
    L.marker([marker[i][0], marker[i][1]])
      .addTo(map)
      .bindPopup(marker[i][2])
      .openPopup();
  }
}

async function convertToAddress(latitude, longitude, kartePlace) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    const address = data.display_name;
    console.log(address);
    kartePlace.textContent = address;
    return address;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}
