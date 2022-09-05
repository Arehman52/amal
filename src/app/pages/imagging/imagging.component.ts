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
        value: 'xywh=1940,240,980,740',
      },
    },
  };

  constructor() {
    this.LIST = [];
  }

  ngOnInit() {
    // ////////////////////IF IMAGE TO BE ADDED LOCALLY!!!!!
    // this.viewer = OpenSeadragon({
    //   id: 'openseadragon',
    //   prefixUrl:
    //   'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
    //   tileSources: {
    //     type: 'image',
    //     url: 'assets/js/openseadragon/image.jpg',
    //   },
    // });
    // ////////////////////IF IMAGE TO BE ADDED LOCALLY!!!!!

    this.viewer = OpenSeadragon({
      id: 'openseadragon',
      prefixUrl:
        'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',


      sequenceMode: true,
      tileSources: [
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000003.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000005.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000006.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000007.jp2/info.json"
      ]
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
      that.LIST.push(e);
    }
  }

  openAnnotation(annot: any) {
    this.anno.selectAnnotation(annot);
  }
}
