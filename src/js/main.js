import "leaflet/dist/leaflet.css";
import L from "leaflet";

const map = L.map("map").setView([-33.805, 511.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Add zoom control
L.control
  .zoom({
    position: "bottomright",
  })
  .addTo(map);

// Example click event to add marker
map.on("click", function (e) {
  const { lat, lng } = e.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`Lat: ${lat}, Lng: ${lng}`)
    .openPopup();
});

const toggleButton = document.querySelector(".sidebar .toggle");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  toggleButton.classList.toggle("rotated");
});
