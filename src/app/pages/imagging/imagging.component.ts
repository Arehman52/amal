import { ANNOTATION } from './../../interfaces/annotation';

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var OpenSeadragon: any;
declare var Annotorious: any;

import * as jquery from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-imagging',
  templateUrl: './imagging.component.html',
  styleUrls: ['./imagging.component.css'],
})
export class ImaggingComponent implements OnInit, AfterViewInit {
  viewer: any;
  anno: any;
  LIST: any[] = [];
  createMode: boolean = false;
  // @ViewChild('openModalBtn', {static: false}) openModalBtn: ElementRef<HTMLButtonElement>;

  annotForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    shape: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    class: new FormControl(null, [Validators.required]),
  });

  sampleAnnotation: ANNOTATION = {
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
    userId: 0,
    user: undefined,
    imageId: 0
  };
  // openModalBtn: HTMLButtonElement;

  constructor() {
    this.LIST = [];
    // debugger
    // this.openModalBtn = new HTMLButtonElement();
  }
  ngAfterViewInit(): void {
    // this.openModalBtn = document.getElementById('openModalBtn') as HTMLButtonElement;
    // debugger
    this.anno.on('createAnnotation', async (selection: any) => {
      alert("createAnnotation");
      // this.openModalBtn.nativeElement.click();


      this.anno.setDrawingEnabled(false);
      if (selection) {

        selection.body = [{
          type: 'TextualBody',
          purpose: 'tagging',
          value: 'MyTag'
        }];
        this.LIST.push(selection);
      }
      // Make sure to wait before saving!
      await this.anno.updateSelected(selection);
      this.anno.saveSelected();
    });

    this.anno.on('selectAnnotation', function(annotation) {
      alert("selectAnnotation");
    });
    this.anno.on('createSelection', function(annotation) {
      jquery('#openModalBtn').click();
    });
    // this.anno.on('mouseEnterAnnotation', function(annotation) {
    //   alert("mouseEnterAnnotation");
    // });
    // this.anno.on('mouseLeaveAnnotation', function(annotation) {
    //   alert("mouseLeaveAnnotation");
    // });
    // this.anno.on('startSelection', function(annotation) {  // when user starts drawing the annotation
    //   alert("startSelection");
    // });
    this.anno.on('updateAnnotation', function(annotation) {
      alert("updateAnnotation");
    });
    // this.anno.on('cancelSelected', function(annotation) {
    //   alert("cancelSelected");
    // });
    this.anno.on('changeSelected', function(annotation) {
      alert("changeSelected");
    });
    this.anno.on('changeSelectionTarget', function(annotation) {
      alert("changeSelectionTarget");
    });
    this.anno.on('deleteAnnotation', function(annotation) {
      alert("deleteAnnotation");
    });

    // this.anno.setDrawingEnabled(true);

    // this.anno.addAnnotation(this.sampleAnnotation);
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
      id: "openseadragon",
      prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
      animationTime: 0.5,
      blendTime: 0.1,
      constrainDuringPan: true,
      maxZoomPixelRatio: 2,
      minZoomLevel: 1,
      visibilityRatio: 1,
      zoomPerScroll: 2,
      timeout: 60000,
      showNavigator:  true,
      showRotationControl: true,
      sequenceMode: true,
      tileSources: [
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000003.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000005.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000006.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000007.jp2/info.json',
      ],
  });

  this.viewer.addHandler('open', function() {
    this.viewer?.scalebar({
        pixelsPerMeter: 0.22 ? (1e6 / 0.22) : 0,
    });
});
    // this.viewer = OpenSeadragon({
    //   id: 'openseadragon',
    //   prefixUrl:
    //     'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',

    //   preserveViewport: true,
    //   visibilityRatio: 1,
    //   minZoomLevel: 1,
    //   defaultZoomLevel: 1,
    //   sequenceMode: true,
    //   tileSources: [
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000003.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000005.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000006.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000007.jp2/info.json',
    //   ],
    // });

    let config = {
      disableEditor: true,
      formatter: this.ColorFormatter,
      formatters: this.ColorFormatter,
      hotkey: { key: 'shift', inverted: true },
      allowEmpty: true,
      drawOnSingleClick: true,

      };


      // annotator = OpenSeadragon.Annotorious(viewer, config);


      this.anno = OpenSeadragon.Annotorious(this.viewer, config);
      // Annotorious.SelectorPack(this.anno);
      this.anno.setDrawingEnabled(true);

    // this.anno = OpenSeadragon.Annotorious(this.viewer, {
    //   locale: 'auto',
    //   formatter: this.formatter,
    //   allowEmpty: true,
    //   drawOnSingleClick: true,
    //   hotkey: { key: 'shift', inverted: true },
    //   disableEditor: true,
    // });

    // Init the plugin
    Annotorious.SelectorPack(this.anno);



  }

  ColorFormatter = function(annotation) {
    let classification = annotation.bodies.find(function(b) {
      return b.purpose == 'classification';
    });

    if (classification){
        return {
            'style': 'stroke:' + classification.value.color + '; stroke-width:3;'
        };
    }
  }

  setTool(tool: string = 'circle') {
    this.anno.setDrawingEnabled(true);
    this.anno.setDrawingTool(tool);

  }

  cancelSelected() {
    this.anno.cancelSelected();
  }

  onSubmit(){
    if(!this.annotForm.valid)
    {
      alert("Form Invalid");
      return;
    }


    jquery('#closeModal').click();

  }
  clearAnnotations() {
    this.anno.clearAnnotations();
  }

  openAnnotation(annot: any) {
    this.anno.selectAnnotation(annot);
    this.anno.fitBoundsWithConstraints(annot, false);

    const { snippet, transform } = this.anno.getImageSnippetById(annot?.id);
    ;
  }

  formatter = function (annotation) {
    var longComments = annotation.bodies.filter(function (body) {
      var isComment =
        body.type === 'TextualBody' &&
        (body.purpose === 'commenting' || body.purpose === 'replying');

      var isLong = body.value.length > 100;

      return isComment && isLong;
    });

    if (longComments.length > 0) {
      // This annotation contains long comments - add CSS class
      return 'long';
    }
  };

  isControlValid(
    control: string,
    validatorType:
      | 'required'
      | 'email'
      | 'pattern'
      | 'minlength'
      | 'maxlength'
      | 'inValidFormat' = 'required'
  ): boolean {
    return (
      // this.isFormSubmitted &&
      this.annotForm?.get(control)?.hasError(validatorType)
    );
  }
}
