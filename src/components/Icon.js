import { divIcon } from 'leaflet';

const Icon = (color) => {
  const svgTemplate = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
    <path stroke="#000000" fill="${color}" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/>
  </svg>`;
  return divIcon({
    className: "marker",
    html: svgTemplate,
    iconSize: [40, 40],
    iconAnchor: [12, 24],
    popupAnchor: [7, -16]
  });
}

export default Icon;