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
export class BoilerImageUploadComponent {

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

  boilerLandlordPermImagebase64: any;
  boilerTenancyAgreementImagebase64: any;
  boilerUbilImagebase64: any;

  progressUBIL:  {percentage: number} = {percentage: 0};
  progressLandlordPerm:  {percentage: number} = {percentage: 0};
  progressTenancyAgrmtStatus:  {percentage: number} = {percentage: 0};

  colorUBIL: any;
  colorTenancyAgrmt: any;
  colorLandlordPerm: any;


  icon: string = "arrow-forward";


  constructor(public renderer: Renderer, private uploadService: UploadFileServiceProvider) {}

  ionViewDidLoad(){
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

  openGallery(tag) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
    console.log("This tag: " + tag);

      if( tag == 'UBIL'){
         this.boilerUbilImagebase64 = 'data:image/jpeg;base64,' + imageData;
      }else if(tag == 'TenancyAgreement'){
        this.base64ImageTenancyAgreement = 'data:image/jpeg;base64,' + imageData;
      } else if(tag == 'LandLordPerm'){
        this.boilerLandlordPermImagebase64 = 'data:image/jpeg;base64,' + imageData;
      }


    }, (err) => {
      console.log(err);

    });
  }

  uploadImage(tag){
    console.log("Upload Image: " + tag)
    if(tag == 'UBIL'){
        this.storage.set("boilerUBIL", this.boilerUbilImagebase64);
        //this.rest.fileUpload(this.base64ImageUBIL, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'TenancyAgreement') {
        this.storage.set("boilerTenancyAgreement", this.boilerTenancyAgreementImagebase64);
        //this.rest.fileUpload(this.base64ImageTenancyAgreement, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'LandLordPerm') {
        this.storage.set("boilerLandLordPerm", this.boilerLandlordPermImagebase64);
        //this.rest.fileUpload(this.base64ImageLandLordPerm, 'Image', tag);
        this.progressUploads(tag);
    }


  }

  progressUploads(tag){
    for(var i = 0; i <= 100; i+=10){

      if(tag == 'UBIL'){
        this.progressUBIL.percentage = i;
        if(i == 100){
          this.progressUBILStatus = "Completed";
          this.colorUBIL = "secondary";
        }
      }  else if ( tag == 'TenancyAgreement') {
        this.progressTenancyAgrmt.percentage = i;
        if(i == 100){
          this.progressTenancyAgrmtStatus = "Completed";
          this.colorTenancyAgrmt = "secondary";
        }
      } else if ( tag == 'LandLordPerm') {
        this.progressLandlordPerm.percentage = i;
        if(i == 100){
          this.progressLandlordPermStatus = "Completed";
          this.colorLandlordPerm = "secondary";
        }
      }

    }
  }

}
