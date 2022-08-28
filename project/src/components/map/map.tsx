import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Place, Location} from '../../types/place';
import { DefaultIcon, SelectedIcon } from '../../const';

type MapProps = {
    city: City;
    places: Place[];
    currentLocation : Location | undefined;
  };


export default function Map({city, places, currentLocation}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if(map) {
      places.forEach((place) => {
        new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        }).setIcon(
          currentLocation !== undefined &&
          place.location.latitude === currentLocation?.latitude &&
          place.location.longitude === currentLocation?.longitude
            ? SelectedIcon
            : DefaultIcon).addTo(map);
      });
    }
  }, [map, places, currentLocation]);

  useEffect(() => {
    map?.flyTo({
      lat: city.location.latitude,
      lng: city.location.longitude
    },
    city.location.zoom);
  }, [city, map]);

  return (
    <section className="cities__map map"
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </section>
  );
}
