import { MapControl, withLeaflet } from "react-leaflet";
import L from 'leaflet';

class Legend extends MapControl {
  createLeafletElement(props) {
    console.log('1');
    const colorObjs = [
      {
        color: "8d8",
        text: "數量充足"
      },
      {
        color: "fa0",
        text: "數量少於一半"
      },
      {
        color: "f00",
        text: "數量極少"
      },
      {
        color: "c0c0c0",
        text: "已領完或未受理"
      },
    ];

    const legend = L.control({ position: "bottomright"});
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML =  colorObjs.reduce((pre, el) => `${pre}
        <div class="legend__lebel">
          <i style="background: #${el.color}"></i>${el.text}
        </div>  
      `, '');
      return div;
    };

    return legend;
  }
}

export default withLeaflet(Legend);