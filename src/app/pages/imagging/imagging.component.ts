import { Component, NgZone, OnInit } from '@angular/core';

import * as OpenSeadragon from 'openseadragon';
// import { Annotorious } from 'openseadragon-annotations';



// declare var OpenSeadragon: any;

@Component({
  selector: 'app-imagging',
  templateUrl: './imagging.component.html',
  styleUrls: ['./imagging.component.css']
})
export class ImaggingComponent implements OnInit {

  viewer: any;
  dibujar = false;
  lineHeight = 1;

  duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
      Format: "jpg",
      Overlap: "2",
      TileSize: "256",
      Size: {
        Width:  "13920",
        Height: "10200"
      }
    }
  };

  constructor(private ngZone: NgZone) { }

  ngOnInit() {


    const viewer = OpenSeadragon({
      id: 'openseadragon1',
      showNavigator:  true,
      prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/",
      tileSources: this.duomo
  });


  // const annotations = Annotorious({ viewer });


  }


init(){




  this.viewer = OpenSeadragon({
    id: "openseadragon1",
    prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/",
    tileSources: this.duomo
  });
}


}

