import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import Legend from '../components/Legend';
import $ from 'jquery';
import SearchArea from '../components/SearchArea';
import Icon from '../components/Icon';
import { getColor } from '../utils';
import 'leaflet/dist/leaflet.css'
import './PostOfficeMap.scss'

const userIconColor = '#1CA0E9';

const mapStyle = {
  width: '100%',
  height: '100%',
}

const PostOfficeMap = () => {
  const [show, setShow] = useState(true);
  const [position, setPosition] = useState([22.627277, 120.301437]);
  const [listItems, setListItems] = useState([]); // set data
  const [zoom, setZoom] = useState(13);
  
  useEffect(() => {
    $.get('https://3000.gov.tw/hpgapi-openmap/api/getPostData', (resp) => {
      setListItems(resp);
    });

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      })
    }
  }, []);

  useEffect(() => {
    setZoom(18);
  }, [position]);


  const  distance = (lat1, lon1, lat2, lon2, unit = "K") => {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344
    }
    if (unit === "N") {
      dist = dist * 0.8684
    }

    return dist;
  }

  return (
    <>
      <SearchArea
        setShow={setShow}
        show={show}
        setPosition={setPosition}
        listItems={listItems}
      />
      <div className={'mainMap ' + (show ? 'show' : '')}>
        <Map center={ position } style={mapStyle} zoom={zoom} zoomControl={false}>
          <ZoomControl position="topright" />
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Legend />
          {/* { userMarker } */}
          <Marker position={position} icon={ Icon(userIconColor) }>
            <Popup>現在位置</Popup>
          </Marker>

          {listItems.filter((item) => distance(position[0], position[1], item.latitude, item.longitude) < 2).map((item) => (
            <Marker 
              position={[item.latitude, item.longitude]}
              icon={Icon(getColor(item.busiMemo, item.total))}
              key={item.storeNm}
            >
              <Popup>
                  <h1 className="list__card__body__title">{ item.storeNm }</h1>
                  { item.addr }<br />
                  { item.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/, '$1') }<br />
                  剩餘數量：<span className={getColor(item.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/, '$1'), item.total)}>{ item.total }</span>
              </Popup>
            </Marker>
          ))}

        </Map>
      </div>
    </>
  )
}

export default PostOfficeMap;
