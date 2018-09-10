import { Component, ViewChild, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { RestProvider } from '../../providers/rest/rest';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  progress: {percentage: number} = {percentage: 0};
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


    selectFileEshSurveyor(event){
          this.selectedFiles = event.target.files;
    }

    uploadEshSurveyor(){
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

        tag == 'UBIL' ? this.base64ImageUBIL = 'data:image/jpeg;base64,' + imageData : this.base64ImageUBIL = '';
        tag == 'CustSignature' ? this.base64ImageCustSignature = 'data:image/jpeg;base64,' + imageData : this.base64ImageCustSignature = '';
        tag == 'FloorPlan' ? this.base64ImageFloorPlan = 'data:image/jpeg;base64,' + imageData : this.base64ImageFloorPlan = '';
        tag == 'TenancyAgreement' ? this.base64ImageTenancyAgreement = 'data:image/jpeg;base64,' + imageData : this.base64ImageTenancyAgreement = '';
        tag == 'LandLordPerm' ? this.base64ImageLandLordPerm = 'data:image/jpeg;base64,' + imageData : this.base64ImageLandLordPerm ='';

      }, (err) => {
        console.log(err);

      });
    }

    uploadImage(tag){
      if(tag == 'UBIL'){
          this.rest.fileUpload(this.base64ImageUBIL, 'Image', tag);
      } else if ( tag == 'CustSignature'){
           this.rest.fileUpload(this.base64ImageCustSignature, 'Image', tag);
      } else if ( tag == 'FloorPlan') {
          this.rest.fileUpload(this.base64ImageFloorPlan, 'Image', tag);
      } else if ( tag == 'TenancyAgreement') {
          this.rest.fileUpload(this.base64ImageTenancyAgreement, 'Image', tag);
      } else if ( tag == 'LandLordPerm') {
          this.rest.fileUpload(this.base64ImageLandLordPerm, 'Image', tag);
      }


    }
}
