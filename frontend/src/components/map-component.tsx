import Map from 'ol/Map';
import View from 'ol/View';
import { useEffect } from "react";
import {useGeographic} from 'ol/proj.js';
import {Point} from 'ol/geom.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import Feature from "ol/Feature";
import 'ol/ol.css';


const MapComponent = () => {
  const place = [36.8219, 1.2921];
    useGeographic()

    useEffect(() => {
        const iconFeature = new Feature({
          geometry: new Point(place),
          name: "MediLink Ltd - Kenya",
          population: 20,
        })
        const map = new Map({
          target: 'map',
          view: new View({
            center: place,
            zoom: 8,
          }),
          layers: [
            new TileLayer({
              preload: Infinity,
              source: new OSM(),
            }),
            new VectorLayer({
              source: new VectorSource({
                features: [iconFeature],
              }),
              style: {
                'circle-radius': 9,
                'circle-fill-color': 'red',
              },
            }),
          ]
        });
    
        return () => map.setTarget(null)
      }, [])

    return <div id="map"></div>;
}

export default MapComponent;