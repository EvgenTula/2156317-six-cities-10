import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import {City, Place} from '../../types/place';

type MapProps = {
    city: City;
    places: Place[];
  };


export default function Map({city, places}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });
  /*
  const currentIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });
*/
  useEffect(() => {
    if(map) {
      places.forEach((place) => {
        new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        }).setIcon(defaultIcon).addTo(map);
      });
    }
  }, [map, places]);

  return (
    <section className="cities__map map"
      ref = {mapRef}
    >
    </section>
  );
}
