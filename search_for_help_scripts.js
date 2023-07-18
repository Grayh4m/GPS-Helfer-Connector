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
  var input = [
    document.getElementById("woLatInput").value,
    document.getElementById("woLongInput").value,
    document.getElementById("wasInput").value,
  ];
  console.log(
    document.getElementById("woLatInput").value +
      " " +
      document.getElementById("woLongInput").value +
      " " +
      document.getElementById("wasInput").value
  );
  marker.push(input);
}
