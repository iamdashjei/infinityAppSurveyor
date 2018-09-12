import { Component, ViewChild, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { RestProvider } from '../../providers/rest/rest';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the EshUploadSurveyorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'esh-upload-surveyor',
  templateUrl: 'esh-upload-surveyor.html'
})
export class EshUploadSurveyorComponent {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild("eshsurveyorForms") eshsurveyorFormContent: any;
  @Input('title') title: string;

  selectedFiles: FileList;
  currentFileUpload: FileUpload;

  progressUBIL: {percentage: number} = {percentage: 0};
  progressUBILStatus: string = "Not yet completed";
  colorUBIL: string = "danger";

  progressCustSig: {percentage: number} = {percentage: 0};
  progressCustSigStatus: string = "Not yet completed";
  colorCustSig: string = "danger";

  progressFloorPlan: {percentage: number} = {percentage: 0};
  progressFloorPlanStatus: string = "Not yet completed";
  colorFloorPlan: string = "danger";

  progressTenancyAgrmt: {percentage: number} = {percentage: 0};
  progressTenancyAgrmtStatus: string = "Not yet completed";
  colorTenancyAgrmt: string = "danger";

  progressLandlordPerm: {percentage: number} = {percentage: 0};
  progressLandlordPermStatus: string = "Not yet completed";
  colorLandlordPerm: string = "danger";

  data = false;
  accordionExpanded = false;
  signature = '';
  isDrawing = false;

  base64ImageUBIL: any;
  base64ImageCustSignature: any;
  base64ImageFloorPlan: any;
  base64ImageTenancyAgreement: any;
  base64ImageLandLordPerm: any;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,
              private uploadService: UploadFileServiceProvider,
              public rest: RestProvider,
              public storage: Storage,
              private camera: Camera
   ) {}

  ionViewDidLoad(){
    console.log(this.eshsurveyorFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshsurveyorFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  toggleAccordionEshSurveyor() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.eshsurveyorFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.eshsurveyorFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.eshsurveyorFormContent.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.eshsurveyorFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

    //
    // selectFileEshSurveyor(event){
    //       this.selectedFiles = event.target.files;
    // }
    //
    //


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
           this.base64ImageUBIL = 'data:image/jpeg;base64,' + imageData;
        } else if(tag == 'CustSignature'){
          this.base64ImageCustSignature = 'data:image/jpeg;base64,' + imageData;
        } else if(tag == 'FloorPlan'){
          this.base64ImageFloorPlan = 'data:image/jpeg;base64,' + imageData;
        } else if(tag == 'TenancyAgreement'){
          this.base64ImageTenancyAgreement = 'data:image/jpeg;base64,' + imageData;
        } else if(tag == 'LandLordPerm'){
          this.base64ImageLandLordPerm = 'data:image/jpeg;base64,' + imageData;
        }


      }, (err) => {
        console.log(err);

      });
    }

    uploadImage(tag){
      console.log("Upload Image: " + tag)
      if(tag == 'UBIL'){
          this.storage.set("eshUBIL", this.base64ImageUBIL);
          //this.rest.fileUpload(this.base64ImageUBIL, 'Image', tag);
          this.progressUploads(tag);
      } else if ( tag == 'CustSignature'){
           this.storage.set("eshCustSignature", this.base64ImageCustSignature);
           //this.rest.fileUpload(this.base64ImageCustSignature, 'Image', tag);
           this.progressUploads(tag);
      } else if ( tag == 'FloorPlan') {
           this.storage.set("eshFloorPlan", this.base64ImageFloorPlan);
          //this.rest.fileUpload(this.base64ImageFloorPlan, 'Image', tag);
          this.progressUploads(tag);
      } else if ( tag == 'TenancyAgreement') {
          this.storage.set("eshTenancyAgreement", this.base64ImageTenancyAgreement);
          //this.rest.fileUpload(this.base64ImageTenancyAgreement, 'Image', tag);
          this.progressUploads(tag);
      } else if ( tag == 'LandLordPerm') {
          this.storage.set("eshLandLordPerm", this.base64ImageLandLordPerm);
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
        } else if ( tag == 'CustSignature'){
          this.progressCustSig.percentage = i;
          if(i == 100){
            this.progressCustSigStatus = "Completed";
            this.colorCustSig = "secondary";
          }
        } else if ( tag == 'FloorPlan') {
          this.progressFloorPlan.percentage = i;
          if(i == 100){
            this.progressFloorPlanStatus = "Completed";
            this.colorFloorPlan = "secondary";
          }
        } else if ( tag == 'TenancyAgreement') {
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
