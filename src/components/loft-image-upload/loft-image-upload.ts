import { Component, ViewChild, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ImagePicker } from '@ionic-native/image-picker';
import { CameraOptions, Camera } from '@ionic-native/camera';

/**
 * Generated class for the LoftImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loft-image-upload',
  templateUrl: 'loft-image-upload.html'
})
export class LoftImageUploadComponent {

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    @ViewChild("loftsurveyorForms") loftsurveyorFormContent: any;
    @Input('title') title: string;

    UBILImage: any = [];
    progressUBIL: {percentage: number} = {percentage: 0};
    progressUBILStatus: string = "Not yet completed";
    colorUBIL: string = "danger";

    EPOPImage: any = [];
    progressEPOP: {percentage: number} = {percentage: 0};
    progressEPOPStatus: string = "Not yet completed";
    colorEPOP: string = "danger";

    tenancyAgrmtImage: any =[];
    progressTenancyAgrmt: {percentage: number} = {percentage: 0};
    progressTenancyAgrmtStatus: string = "Not yet completed";
    colorTenancyAgrmt: string = "danger";
  
    landlordPermImage: any = [];
    progressLandlordPerm: {percentage: number} = {percentage: 0};
    progressLandlordPermStatus: string = "Not yet completed";
    colorLandlordPerm: string = "danger";

    data = false;
    accordionExpanded = false;
    signature = '';
    isDrawing = false;

    icon: string = "arrow-forward";


    constructor(private renderer: Renderer, 
                private storage: Storage,
                private camera: Camera,
                private imagePicker: ImagePicker,
                private sharedObject: SharedobjectserviceProvider) {}

    ionViewDidLoad(){
      console.log(this.loftsurveyorFormContent.nativeElement);
      this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
    }

    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_loftUBIL").then((UBIL) => {
        if(UBIL != null){
          this.UBILImage = UBIL;
          this.progressUBIL.percentage = 100;
          this.progressUBILStatus = "Completed";
          this.colorUBIL = "secondary";
        } 
      });

      this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_loftEPOP").then((EPOP) => {
        if(EPOP != null){
          this.EPOPImage = EPOP;
          this.progressEPOP.percentage = 100;
          this.progressEPOPStatus = "Completed";
          this.colorEPOP = "secondary";
        } 
      });

  
      this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_loftTenancyAgreement").then((tenancyAgrmt) => {
        if(tenancyAgrmt != null){
          this.tenancyAgrmtImage = tenancyAgrmt;
          this.progressTenancyAgrmt.percentage = 100;
          this.progressTenancyAgrmtStatus = "Completed";
          this.colorTenancyAgrmt = "secondary";
        } 
      });
  
      this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_loftLandLordPerm").then((landlordPerm) => {
        if(landlordPerm != null){
          this.landlordPermImage = landlordPerm;
          this.progressLandlordPerm.percentage = 100;
          this.progressLandlordPermStatus = "Completed";
          this.colorLandlordPerm = "secondary";
        } 
      });
    }

    toggleAccordionLoftSurveyor() {
      if(this.accordionExpanded){
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "padding", "0px 16px");
      } else {
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "max-height", "3200px");
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "padding", "13px 16px");
      }

      this.accordionExpanded = !this.accordionExpanded;
      this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }

    openGallery(tag) {
      const options = {
        maximumImagesCount: 5,
        quality: 50,
        width: 512,
        height: 512,
        outputType: 1
        }

        this.imagePicker.getPictures(options).then( imageData =>{
      console.log("This tag: " + tag);

        if( tag == 'UBIL'){
          for(let i=0; i < imageData.length;i++){
            this.UBILImage.push('data:image/jpeg;base64,' + imageData[i]);
          };
           
        } else if(tag == 'EPOP'){
          for(let i=0; i < imageData.length;i++){
            this.EPOPImage.push('data:image/jpeg;base64,' + imageData[i]);
          };

        } else if(tag == 'TenancyAgreement'){
          for(let i=0; i < imageData.length;i++){
            this.tenancyAgrmtImage.push('data:image/jpeg;base64,' + imageData[i]);
          };

        } else if(tag == 'LandLordPerm'){
          for(let i=0; i < imageData.length;i++){
            this.landlordPermImage.push('data:image/jpeg;base64,' + imageData[i]);
          };
        }


      }, (err) => {
        console.log(err);

      });
    }
    
    capture(tag){
      const cameraOptions: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(cameraOptions).then( imageData =>{
        console.log("This tag: " + tag);
  
          if( tag == 'UBIL'){
           
              this.UBILImage.push('data:image/jpeg;base64,' + imageData);
        
             
          } else if(tag == 'TenancyAgreement'){
            
              this.tenancyAgrmtImage.push('data:image/jpeg;base64,' + imageData);
          
  
          } else if(tag == 'LandLordPerm'){
          
              this.landlordPermImage.push('data:image/jpeg;base64,' + imageData);
            
          }
  
  
        }, (err) => {
          console.log(err);
  
        });
    }

    uploadImage(tag){
      console.log("Upload Image: " + tag)
      if(tag == 'UBIL'){
          this.storage.set(this.sharedObject.getSharedSlugSelectedCM() +"_loftUBIL", this.UBILImage);
          //this.rest.fileUpload(this.base64ImageUBIL, 'Image', tag);
          this.progressUploads(tag);
      } else if ( tag == 'EPOP') {
          this.storage.set(this.sharedObject.getSharedSlugSelectedCM()  + "_loftEPOP", this.EPOPImage);
          //this.rest.fileUpload(this.base64ImageFloorPlan, 'Image', tag);
          this.progressUploads(tag);
      } else if ( tag == 'TenancyAgreement') {
          this.storage.set(this.sharedObject.getSharedSlugSelectedCM()  + "_loftTenancyAgreement", this.tenancyAgrmtImage);
          //this.rest.fileUpload(this.base64ImageTenancyAgreement, 'Image', tag);
          this.progressUploads(tag);
      } else if ( tag == 'LandLordPerm') {
          this.storage.set(this.sharedObject.getSharedSlugSelectedCM() +"_loftLandLordPerm", this.landlordPermImage);
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
        } else if ( tag == 'EPOP') {
          this.progressEPOP.percentage = i;
          if(i == 100){
            this.progressEPOPStatus = "Completed";
            this.colorEPOP = "secondary";
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
