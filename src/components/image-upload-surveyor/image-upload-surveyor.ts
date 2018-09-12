import { Component, ViewChild, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the ImageUploadSurveyorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-upload-surveyor',
  templateUrl: 'image-upload-surveyor.html'
})
export class ImageUploadSurveyorComponent {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild("surveyorForms") surveyorFormContent: any;
  @Input('title') title: string;

  public  anArray: any=[];

   selectedFiles: FileList;
   selectedFilesBathroom: FileList;
   selectedFilesLivingroom: FileList;
   selectedFilesDiningroom: FileList;
   seletedFilesHallway: FileList;
   currentFileUpload: FileUpload;
   progress: {percentage: number} = {percentage: 0};
   data = false;
   accordionExpanded = false;
   signature = '';
   isDrawing = false;
   bedroom: any;

   progressKitchen: {percentage: number} = {percentage: 0};
   progressKitchenStatus: string = "Not yet uploaded";
   colorKitchen: string = "danger";

   progressDinningRoom: {percentage: number} = {percentage: 0};
   progressDinningRoomStatus: string = "Not yet uploaded";
   colorDinningRoom: string = "danger";

   progressLivingRoom: {percentage: number} = {percentage: 0};
   progressLivingRoomStatus: string = "Not yet uploaded";
   colorLivingRoom: string = "danger";

   progressHallway: {percentage: number} = {percentage: 0};
   progressHallwayStatus: string = "Not yet uploaded";
   colorHallway: string = "danger";

   progressLandingUpstairs: {percentage: number} = {percentage: 0};
   progressLandingUpstairsStatus: string = "Not yet uploaded";
   colorLandingUpstairs: string = "danger";

   progressFrontElevation: {percentage: number} = {percentage: 0};
   progressFrontElevationStatus: string = "Not yet uploaded";
   colorFrontElevation: string = "danger";

   progressLeftElevation: {percentage: number} = {percentage: 0};
   progressLeftElevationStatus: string = "Not yet uploaded";
   colorLeftElevation: string = "danger";

   progressRearElevation: {percentage: number} = {percentage: 0};
   progressRearElevationStatus: string = "Not yet uploaded";
   colorRearElevation: string = "danger";

   progressSideElevation: {percentage: number} = {percentage: 0};
   progressSideElevationStatus: string = "Not yet uploaded";
   colorSideElevation: string = "danger";

   progressUtility: {percentage: number} = {percentage: 0};
   progressUtilityStatus: string = "Not yet uploaded";
   colorUtility: string = "danger";

   progressHeatingSource: {percentage: number} = {percentage: 0};
   progressHeatingSourceStatus: string = "Not yet uploaded";
   colorHeatingSource: string = "danger";

   progressBathRoom: {percentage: number} = {percentage: 0};
   progressBathRoomStatus: string = "Not yet uploaded";
   colorBathRoom: string = "danger";

   progressAiringCupboard: {percentage: number} = {percentage: 0};
   progressAiringCupboardStatus: string = "Not yet uploaded";
   colorAiringCupboard: string = "danger";

   progressConservatory: {percentage: number} = {percentage: 0};
   progressConservatoryStatus: string = "Not yet uploaded";
   colorConservatory: string = "danger";

   progressOther: {percentage: number} = {percentage: 0};
   progressOtherStatus: string = "Not yet uploaded";
   colorOther: string = "danger";

   progressStairs: {percentage: number} = {percentage: 0};
   progressStairsStatus: string = "Not yet uploaded";
   colorStairs: string = "danger";

   progressGarage: {percentage: number} = {percentage: 0};
   progressGarageStatus: string = "Not yet uploaded";
   colorGarage: string = "danger";

   progressWallThickness: {percentage: number} = {percentage: 0};
   progressWallThicknessStatus: string = "Not yet uploaded";
   colorWallThickness: string = "danger";

   progressFusedSpur: {percentage: number} = {percentage: 0};
   progressFusedSpurStatus: string = "Not yet uploaded";
   colorFusedSpur: string = "danger";

   progressRoomStat: {percentage: number} = {percentage: 0};
   progressRoomStatStatus: string = "Not yet uploaded";
   colorRoomStat: string = "danger";

   progressProgrammer: {percentage: number} = {percentage: 0};
   progressProgrammerStatus: string = "Not yet uploaded";
   colorProgrammer: string = "danger";

   base64ImageKitchen: any;
   base64ImageDinningRoom: any;
   base64ImageLivingRoom: any;
   base64ImageHallway: any;
   base64ImageLandingUpstairs: any;
   base64ImageFrontElevation: any;
   base64ImageLeftElevation: any;
   base64ImageRearElevation: any;
   base64ImageSideElevation: any;
   base64ImageUtility: any;
   base64ImageHeatingSource: any;
   base64ImageBathRoom: any;
   base64ImageAiringCupboard: any;
   base64ImageConservatory: any;
   base64ImageOther: any;
   base64ImageStairs: any;
   base64ImageGarage: any;
   base64ImageWallThickness: any;
   base64ImageFusedSpur: any;
   base64ImageRoomStat: any;
   base64ImageProgrammer: any;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,
              private uploadService: UploadFileServiceProvider,
              private storage: Storage,
              public rest: RestProvider,
              private camera: Camera
            ) {}

  ionViewDidLoad(){
    console.log(this.surveyorFormContent.nativeElement);
    this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "webkitTransition", "max-height 3600ms, padding 500ms");
  }

  toggleAccordionSurveyor() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "max-height", "3600px");
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    this.getKey('Bedrooms');

  }

  selectFileSurveyor(event){
        this.selectedFiles = event.target.files;
  }

  uploadSurveyor(){
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

  public setKey(settingName, value){
    return this.storage.set(settingName, value);
  }

  public getKey(settingName){
    // Or to get a key/value pair

    this.storage.get(settingName).then((val) => {
    this.bedroom = Number(val);
      console.log('Bedroom value: ', this.bedroom);
    });

  }

  forLoopArray(elements: number): Array<any> {
        return new Array(elements);
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

      if( tag == 'Kitchen'){
         this.base64ImageKitchen = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'DinningRoom'){
        this.base64ImageDinningRoom = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'LivingRoom'){
        this.base64ImageLivingRoom = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'Hallway'){
        this.base64ImageHallway = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'LandingUpstairs'){
        this.base64ImageLandingUpstairs = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'FrontElevation'){
        this.base64ImageFrontElevation = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'LeftElevation'){
        this.base64ImageLeftElevation = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'RearElevation'){
        this.base64ImageRearElevation = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'SideElevation'){
        this.base64ImageSideElevation = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'Utility'){
        this.base64ImageUtility = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'HeatingSource'){
        this.base64ImageHeatingSource = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'BathRoom'){
        this.base64ImageBathRoom = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'AiringCupboard'){
        this.base64ImageAiringCupboard = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'Conservatory'){
        this.base64ImageConservatory = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'Other'){
        this.base64ImageOther = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'Stairs'){
        this.base64ImageStairs = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'Garage'){
        this.base64ImageGarage = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'WallThickness'){
        this.base64ImageWallThickness = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'FusedSpur'){
        this.base64ImageFusedSpur = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'RoomStat'){
        this.base64ImageRoomStat = 'data:image/jpeg;base64,' + imageData;

      } else if(tag == 'Programmer'){
        this.base64ImageProgrammer = 'data:image/jpeg;base64,' + imageData;

      }


    }, (err) => {
      console.log(err);

    });
  }


  uploadImage(tag){
    console.log("Upload Image: " + tag)
    if(tag == 'Kitchen'){
        this.storage.set("kitchen", this.base64ImageKitchen);
        //this.rest.fileUploadMainForm(this.base64ImageKitchen, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'DinningRoom'){
         this.storage.set("dinningroom", this.base64ImageDinningRoom);
         //this.rest.fileUploadMainForm(this.base64ImageDinningRoom, 'Image', tag);
         this.progressUploads(tag);
    } else if ( tag == 'LivingRoom') {
        this.storage.set("livingroom", this.base64ImageLivingRoom);
        //this.rest.fileUploadMainForm(this.base64ImageLivingRoom, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'Hallway') {
        this.storage.set("hallway", this.base64ImageHallway);
        //this.rest.fileUploadMainForm(this.base64ImageLandingUpstairs, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'LandingUpstairs') {
        this.storage.set("landingupstair", this.base64ImageLandingUpstairs);
        //this.rest.fileUploadMainForm(this.base64ImageFrontElevation, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'FrontElevation') {
        this.storage.set("frontelevation", this.base64ImageFrontElevation);
        //this.rest.fileUploadMainForm(this.base64ImageLeftElevation, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'LeftElevation') {
        this.storage.set("leftelevation", this.base64ImageLeftElevation);
        //this.rest.fileUploadMainForm(this.base64ImageRearElevation, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'RearElevation') {
        this.storage.set("rearelevation", this.base64ImageRearElevation);
        //this.rest.fileUploadMainForm(this.base64ImageSideElevation, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'SideElevation') {
        this.storage.set("sideelevation", this.base64ImageSideElevation);
        //this.rest.fileUploadMainForm(this.base64ImageUtility, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'Utility') {
        this.storage.set("utility", this.base64ImageUtility);
        //this.rest.fileUploadMainForm(this.base64ImageHeatingSource, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'HeatingSource') {
        this.storage.set("heatingsource", this.base64ImageHeatingSource);
        //this.rest.fileUploadMainForm(this.base64ImageBathRoom, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'AiringCupboard') {
        this.storage.set("airingcupboard", this.base64ImageAiringCupboard);
        //this.rest.fileUploadMainForm(this.base64ImageAiringCupboard, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'Conservatory') {
        this.storage.set("conservatory", this.base64ImageConservatory);
        //this.rest.fileUploadMainForm(this.base64ImageConservatory, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'Other') {
        this.storage.set("other", this.base64ImageOther);
        //this.rest.fileUploadMainForm(this.base64ImageOther, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'Stairs') {
        this.storage.set("stairs", this.base64ImageStairs);
        //this.rest.fileUploadMainForm(this.base64ImageStairs, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'Garage') {
        this.storage.set("garage", this.base64ImageGarage);
        //this.rest.fileUploadMainForm(this.base64ImageGarage, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'WallThickness') {
        this.storage.set("wallthickness", this.base64ImageWallThickness);
        //this.rest.fileUploadMainForm(this.base64ImageWallThickness, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'FusedSpur') {
        this.storage.set("fusedspur", this.base64ImageFusedSpur);
        //this.rest.fileUploadMainForm(this.base64ImageFusedSpur, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'RoomStat') {
        this.storage.set("roomstat", this.base64ImageRoomStat);
        //this.rest.fileUploadMainForm(this.base64ImageRoomStat, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'Programmer') {
        this.storage.set("programmer", this.base64ImageProgrammer);
        //this.rest.fileUploadMainForm(this.base64ImageProgrammer, 'Image', tag);
        this.progressUploads(tag);
    } else if ( tag == 'BathRoom') {
        this.storage.set("bathroom", this.base64ImageBathRoom);
        //this.rest.fileUploadMainForm(this.base64ImageBathRoom, 'Image', tag);
        this.progressUploads(tag);
    }


  }


  progressUploads(tag){
    for(var i = 0; i <= 100; i+=10){

      if(tag == 'Kitchen'){
        this.progressKitchen.percentage = i;
        if(i == 100){
          this.progressKitchenStatus = "Completed";
          this.colorKitchen = "secondary";
        }
      } else if ( tag == 'DinningRoom'){
        this.progressDinningRoom.percentage = i;
        if(i == 100){
          this.progressDinningRoomStatus = "Completed";
          this.colorDinningRoom = "secondary";
        }
      } else if ( tag == 'LivingRoom') {
        this.progressLivingRoom.percentage = i;
        if(i == 100){
          this.progressLivingRoomStatus = "Completed";
          this.colorLivingRoom = "secondary";
        }
      } else if ( tag == 'Hallway') {
        this.progressHallway.percentage = i;
        if(i == 100){
          this.progressHallwayStatus = "Completed";
          this.colorHallway = "secondary";
        }
      } else if ( tag == 'LandingUpstairs') {
        this.progressLandingUpstairs.percentage = i;
        if(i == 100){
          this.progressLandingUpstairsStatus = "Completed";
          this.colorLandingUpstairs = "secondary";
        }
      }  else if ( tag == 'FrontElevation') {
        this.progressFrontElevation.percentage = i;
        if(i == 100){
          this.progressFrontElevationStatus = "Completed";
          this.colorFrontElevation = "secondary";
        }
      }  else if ( tag == 'LeftElevation') {
        this.progressLeftElevation.percentage = i;
        if(i == 100){
          this.progressLeftElevationStatus = "Completed";
          this.colorLeftElevation = "secondary";
        }
      }  else if ( tag == 'RearElevation') {
        this.progressRearElevation.percentage = i;
        if(i == 100){
          this.progressRearElevationStatus = "Completed";
          this.colorRearElevation = "secondary";
        }
      }  else if ( tag == 'SideElevation') {
        this.progressSideElevation.percentage = i;
        if(i == 100){
          this.progressSideElevationStatus = "Completed";
          this.colorSideElevation = "secondary";
        }
      }  else if ( tag == 'Utility') {
        this.progressUtility.percentage = i;
        if(i == 100){
          this.progressUtilityStatus = "Completed";
          this.colorUtility = "secondary";
        }
      }  else if ( tag == 'HeatingSource') {
        this.progressHeatingSource.percentage = i;
        if(i == 100){
          this.progressHeatingSourceStatus = "Completed";
          this.colorHeatingSource = "secondary";
        }
      }  else if ( tag == 'BathRoom') {
        this.progressBathRoom.percentage = i;
        if(i == 100){
          this.progressBathRoomStatus = "Completed";
          this.colorBathRoom = "secondary";
        }
      }  else if ( tag == 'AiringCupboard') {
        this.progressAiringCupboard.percentage = i;
        if(i == 100){
          this.progressAiringCupboardStatus = "Completed";
          this.colorAiringCupboard = "secondary";
        }
      }  else if ( tag == 'Conservatory') {
        this.progressConservatory.percentage = i;
        if(i == 100){
          this.progressConservatoryStatus = "Completed";
          this.colorConservatory = "secondary";
        }
      }  else if ( tag == 'Other') {
        this.progressOther.percentage = i;
        if(i == 100){
          this.progressOtherStatus = "Completed";
          this.colorOther = "secondary";
        }
      }  else if ( tag == 'Stairs') {
        this.progressStairs.percentage = i;
        if(i == 100){
          this.progressStairsStatus = "Completed";
          this.colorStairs = "secondary";
        }
      }  else if ( tag == 'Garage') {
        this.progressGarage.percentage = i;
        if(i == 100){
          this.progressGarageStatus = "Completed";
          this.colorGarage = "secondary";
        }
      }  else if ( tag == 'WallThickness') {
        this.progressWallThickness.percentage = i;
        if(i == 100){
          this.progressWallThicknessStatus = "Completed";
          this.colorWallThickness = "secondary";
        }
      }  else if ( tag == 'FusedSpur') {
        this.progressFusedSpur.percentage = i;
        if(i == 100){
          this.progressFusedSpurStatus = "Completed";
          this.colorFusedSpur = "secondary";
        }
      }  else if ( tag == 'RoomStat') {
        this.progressRoomStat.percentage = i;
        if(i == 100){
          this.progressRoomStatStatus = "Completed";
          this.colorRoomStat = "secondary";
        }
      }  else if ( tag == 'Programmer') {
        this.progressProgrammer.percentage = i;
        if(i == 100){
          this.progressProgrammerStatus = "Completed";
          this.colorProgrammer = "secondary";
        }
      }

    }
  }



}
