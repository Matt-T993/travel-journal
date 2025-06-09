import "leaflet/dist/leaflet.css";
import L from "leaflet";

const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Example click event to add marker
map.on("click", function (e) {
  const { lat, lng } = e.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`Lat: ${lat}, Lng: ${lng}`)
    .openPopup();
});
