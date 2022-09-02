import { Component, OnInit } from '@angular/core';

declare var OpenSeadragon: any;
declare var Annotorious: any;

@Component({
  selector: 'app-imagging',
  templateUrl: './imagging.component.html',
  styleUrls: ['./imagging.component.css'],
})
export class ImaggingComponent implements OnInit {
  viewer: any;
  anno: any;
  LIST: any[] = [];

  duomo = {
    Image: {
      xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
      Format: 'jpg',
      Overlap: '2',
      TileSize: '256',
      Size: {
        Width: '13920',
        Height: '10200',
      },
    },
  };

  sampleAnnotation = {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    id: '#09475897-d2eb-4dce-aa12-ecb50771c734',
    type: 'Annotation',
    body: [
      {
        type: 'TextualBody',
        value: 'Annotation',
      },
    ],
    target: {
      selector: {
        type: 'FragmentSelector',
        conformsTo: 'http://www.w3.org/TR/media-frags/',
        value: 'xywh=540,240,180,340',
      },
    },
  };

  constructor() {
    this.LIST = [];
  }

  ngOnInit() {
    this.viewer = OpenSeadragon({
      id: 'openseadragon',
      prefixUrl:
        'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
      tileSources: {
        type: 'image',
        url: 'assets/js/openseadragon/image.jpg',
      },
    });

    this.anno = OpenSeadragon.Annotorious(this.viewer, {
      locale: 'auto',
      allowEmpty: true,
      drawOnSingleClick: false,
      hotkey: { key: 'shift', inverted: true },
      disableEditor: true,
    });

    this.anno.addAnnotation(this.sampleAnnotation);

    // Init the plugin
    Annotorious.SelectorPack(this.anno);


    // Add event handlers using .on
    this.anno.on('createAnnotation', (e: any) => {
      if(e){
        this.LIST.push(e);
      }
    });
  }

  setTool(tool?: string) {
    this.anno.setDrawingTool(tool);
  }

  saveAnnotation(e: any) {
    let that = this;
    if(e){
      console.log(e);
      that.LIST.push(e['id']);
    }
  }

  openAnnotation(annot: any) {
    this.anno.selectAnnotation(annot);
  }
}
