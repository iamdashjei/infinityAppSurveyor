import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
/**
 * Generated class for the BoilerImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'boiler-image-upload',
  templateUrl: 'boiler-image-upload.html'
})
export class BoilerImageUploadComponent implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild("boilersurveyorForms") boilersurveyorFormContent: any;
  @Input('title') title: string;

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: {percentage: number} = {percentage: 0};
  data = false;
  accordionExpanded = false;
  signature = '';
  isDrawing = false;

  icon: string = "arrow-forward";


  constructor(public renderer: Renderer, private uploadService: UploadFileServiceProvider) {}

  ngOnInit(){
    console.log(this.boilersurveyorFormContent.nativeElement);
    this.renderer.setElementStyle(this.boilersurveyorFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  toggleAccordionBoilerSurveyor() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.boilersurveyorFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.boilersurveyorFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.boilersurveyorFormContent.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.boilersurveyorFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  selectFileBoilerSurveyor(event){
        this.selectedFiles = event.target.files;
  }

  uploadBoilerSurveyor(){
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}
