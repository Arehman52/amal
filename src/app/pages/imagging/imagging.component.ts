import { Component, NgZone, OnInit } from '@angular/core';

declare var OpenSeadragon: any;

@Component({
  selector: 'app-imagging',
  templateUrl: './imagging.component.html',
  styleUrls: ['./imagging.component.css']
})
export class ImaggingComponent implements OnInit {

  viewer: any;
  dibujar = false;
  lineHeight = 1

  constructor(private ngZone: NgZone) { }

  ngOnInit() {


    var duomo = {
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

    this.viewer = OpenSeadragon({
      id: "openseadragon1",
      prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/",
      tileSources: duomo
    });


  }





}
