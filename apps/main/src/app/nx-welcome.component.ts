import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'nx-esm-jest-nx-welcome',
  template: `
    <div></div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {

  ngOnInit() {
    const map = new WebMap({
      basemap: "arcgis-topographic" // Basemap layer service
    });
  
    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "rips-map-container" // Div element
    });
  }
}
