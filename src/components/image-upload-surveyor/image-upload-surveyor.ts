import { Component, ViewChild, Renderer, Input  } from '@angular/core';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestProvider } from '../../providers/rest/rest';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ImagePicker } from '@ionic-native/image-picker';
import { ModalController } from 'ionic-angular';
import { UploadedImagesComponent } from '../uploaded-images/uploaded-images';

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
   listBedroom: any = [];
   numberOfBedroom: any = [];
   
   bedroomImages2: any = [];
   bedroomImages: any = [];
   progressBedroomStatus: string[] = [];
   colorBedroom: string[]  = [];
   progressBedroom: {percentage: number} [] = [];
   //{percentage: 0}
   

   kitchenImages: any = [];
   progressKitchen: {percentage: number} = {percentage: 0};
   progressKitchenStatus: string = "Not yet uploaded";
   colorKitchen: string = "danger";

   diningRoomImages: any = [];
   progressDinningRoom: {percentage: number} = {percentage: 0};
   progressDinningRoomStatus: string = "Not yet uploaded";
   colorDinningRoom: string = "danger";

   livingRoomImages: any = [];
   progressLivingRoom: {percentage: number} = {percentage: 0};
   progressLivingRoomStatus: string = "Not yet uploaded";
   colorLivingRoom: string = "danger";

   hallwayImages: any = [];
   progressHallway: {percentage: number} = {percentage: 0};
   progressHallwayStatus: string = "Not yet uploaded";
   colorHallway: string = "danger";

   landingUpstairsImages: any = [];
   progressLandingUpstairs: {percentage: number} = {percentage: 0};
   progressLandingUpstairsStatus: string = "Not yet uploaded";
   colorLandingUpstairs: string = "danger";

   frontElevationImages: any = [];
   progressFrontElevation: {percentage: number} = {percentage: 0};
   progressFrontElevationStatus: string = "Not yet uploaded";
   colorFrontElevation: string = "danger";

   leftElevationImages: any = [];
   progressLeftElevation: {percentage: number} = {percentage: 0};
   progressLeftElevationStatus: string = "Not yet uploaded";
   colorLeftElevation: string = "danger";

   rearElevationImages: any = [];
   progressRearElevation: {percentage: number} = {percentage: 0};
   progressRearElevationStatus: string = "Not yet uploaded";
   colorRearElevation: string = "danger";

   sideElevationImages: any = [];
   progressSideElevation: {percentage: number} = {percentage: 0};
   progressSideElevationStatus: string = "Not yet uploaded";
   colorSideElevation: string = "danger";

   utilityImages: any = [];
   progressUtility: {percentage: number} = {percentage: 0};
   progressUtilityStatus: string = "Not yet uploaded";
   colorUtility: string = "danger";

   heatingSourceImages: any = [];
   progressHeatingSource: {percentage: number} = {percentage: 0};
   progressHeatingSourceStatus: string = "Not yet uploaded";
   colorHeatingSource: string = "danger";

   bathRoomImages: any = [];
   progressBathRoom: {percentage: number} = {percentage: 0};
   progressBathRoomStatus: string = "Not yet uploaded";
   colorBathRoom: string = "danger";

   cupboardImages: any = [];
   progressAiringCupboard: {percentage: number} = {percentage: 0};
   progressAiringCupboardStatus: string = "Not yet uploaded";
   colorAiringCupboard: string = "danger";

   conservatoryImages: any = [];
   progressConservatory: {percentage: number} = {percentage: 0};
   progressConservatoryStatus: string = "Not yet uploaded";
   colorConservatory: string = "danger";

   othersImages: any = [];
   progressOther: {percentage: number} = {percentage: 0};
   progressOtherStatus: string = "Not yet uploaded";
   colorOther: string = "danger";

   stairsImages: any = [];
   progressStairs: {percentage: number} = {percentage: 0};
   progressStairsStatus: string = "Not yet uploaded";
   colorStairs: string = "danger";

   garageImages: any = [];
   progressGarage: {percentage: number} = {percentage: 0};
   progressGarageStatus: string = "Not yet uploaded";
   colorGarage: string = "danger";

   wallthicknessImages: any = [];
   progressWallThickness: {percentage: number} = {percentage: 0};
   progressWallThicknessStatus: string = "Not yet uploaded";
   colorWallThickness: string = "danger";

   fusedSpurImages: any = [];
   progressFusedSpur: {percentage: number} = {percentage: 0};
   progressFusedSpurStatus: string = "Not yet uploaded";
   colorFusedSpur: string = "danger";

   roomStatImages: any = [];
   progressRoomStat: {percentage: number} = {percentage: 0};
   progressRoomStatStatus: string = "Not yet uploaded";
   colorRoomStat: string = "danger";

   programmerImages: any = [];
   progressProgrammer: {percentage: number} = {percentage: 0};
   progressProgrammerStatus: string = "Not yet uploaded";
   colorProgrammer: string = "danger";

   base64ImageBedroom: any;
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
              public imagePicker: ImagePicker,
              private storage: Storage,
              public sharedObject: SharedobjectserviceProvider,
              public rest: RestProvider,
              public modalCtrl: ModalController,
              private camera: Camera
            ) {}

  ionViewDidLoad(){
    console.log(this.surveyorFormContent.nativeElement);
    this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "webkitTransition", "max-height 9000ms, padding 500ms");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //this.storage.get().then(() => {});
    this.numberOfBedroom = [];
    this.progressBedroomStatus = [];
    this.colorBedroom = [];
    this.progressBedroom = [];
    for(let i = 1; i <= this.sharedObject.getSharedSelectedBedrooms(); i++){
      this.numberOfBedroom.push(i);
      this.progressBedroomStatus.push("Not yet uploaded");
      this.colorBedroom.push("danger");
      this.progressBedroom.push({percentage: 0});
      console.log("Number of Bedrooms => " + this.numberOfBedroom);
    }

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_bedroom").then((bedroom) => {
      console.log("Saved Bedrooms"+ bedroom.length);
      if(bedroom != null){
       
        for(var i = 0; i < bedroom.length; i++){
          let temp = bedroom[i];
          for(var y = 0; y < temp.length; y++){
            this.progressBedroom[y].percentage = 100;
            this.progressBedroomStatus[y] = "Completed";
            this.colorBedroom[y] = "secondary"; 
          }
        }
        
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_kitchen").then((kitchen) => {
      if(kitchen != null){
        this.kitchenImages = kitchen;
        this.progressKitchen.percentage = 100;
        this.progressKitchenStatus = "Completed";
        this.colorKitchen = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_dinningroom").then((dinningroom) => {
      if(dinningroom != null){
        this.diningRoomImages = dinningroom;
        this.progressDinningRoom.percentage = 100;
        this.progressDinningRoomStatus = "Completed";
        this.colorDinningRoom = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_livingroom").then((livingroom) => {
      if(livingroom != null){
        this.livingRoomImages = livingroom;
        this.progressLivingRoom.percentage = 100;
        this.progressLivingRoomStatus = "Completed";
        this.colorLivingRoom = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_hallway").then((hallway) => {
      if(hallway != null){
        this.hallwayImages = hallway;
        this.progressHallway.percentage = 100;
        this.progressHallwayStatus = "Completed";
        this.colorHallway = "secondary";
      } 
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_landingupstair").then((landingupstair) => {
      if(landingupstair != null){
        this.landingUpstairsImages = landingupstair;
        this.progressLandingUpstairs.percentage = 100;
        this.progressLandingUpstairsStatus = "Completed";
        this.colorLandingUpstairs = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_frontelevation").then((frontelevation) => {
      if(frontelevation != null){
        this.frontElevationImages = frontelevation;
        this.progressFrontElevation.percentage = 100;
        this.progressFrontElevationStatus = "Completed";
        this.colorFrontElevation = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_leftelevation").then((leftelevation) => {
      if(leftelevation != null){
        this.leftElevationImages = leftelevation;
        this.progressLeftElevation.percentage = 100;
        this.progressLeftElevationStatus = "Completed";
        this.colorLeftElevation = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_rearelevation").then((rearelevation) => {
      if(rearelevation != null){
        this.rearElevationImages = rearelevation;
        this.progressRearElevation.percentage = 100;
        this.progressRearElevationStatus = "Completed";
        this.colorRearElevation = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_sideelevation").then((sideelevation) => {
      if(sideelevation != null){
        this.sideElevationImages = sideelevation;
        this.progressSideElevation.percentage = 100;
        this.progressSideElevationStatus = "Completed";
        this.colorSideElevation = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_utility").then((utility) => {
      if(utility != null){
        this.utilityImages = utility;
        this.progressUtility.percentage = 100;
        this.progressUtilityStatus = "Completed";
        this.colorUtility = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_heatingsource").then((heatingsource) => {
      if(heatingsource != null){
        this.heatingSourceImages = heatingsource;
        this.progressHeatingSource.percentage = 100;
        this.progressHeatingSourceStatus = "Completed";
        this.colorHeatingSource = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_airingcupboard").then((airingcupboard) => {
      if(airingcupboard != null){
        this.cupboardImages = airingcupboard;
        this.progressAiringCupboard.percentage = 100;
        this.progressAiringCupboardStatus = "Completed";
        this.colorAiringCupboard = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_conservatory").then((conservatory) => {
      if(conservatory != null){
        this.conservatoryImages = conservatory;
        this.progressConservatory.percentage = 100;
        this.progressConservatoryStatus = "Completed";
        this.colorConservatory = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_other").then((other) => {
      if(other != null){
        this.othersImages = other;
        this.progressOther.percentage = 100;
        this.progressOtherStatus = "Completed";
        this.colorOther = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_garage").then((garage) => {
      if(garage != null){
        this.garageImages = garage;
        this.progressGarage.percentage = 100;
        this.progressGarageStatus = "Completed";
        this.colorGarage = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_wallthickness").then((wallthickness) => {
      if(wallthickness != null){
        this.wallthicknessImages = wallthickness;
        this.progressWallThickness.percentage = 100;
        this.progressWallThicknessStatus = "Completed";
        this.colorWallThickness = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_fusedspur").then((fusedspur) => {
      if(fusedspur != null){
        this.fusedSpurImages = fusedspur;
        this.progressFusedSpur.percentage = 100;
        this.progressFusedSpurStatus = "Completed";
        this.colorFusedSpur = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_roomstat").then((roomstat) => {
      if(roomstat != null){
        this.roomStatImages = roomstat;
        this.progressRoomStat.percentage = 100;
        this.progressRoomStatStatus = "Completed";
        this.colorRoomStat = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_programmer").then((programmer) => {
      if(programmer != null){
        this.programmerImages = programmer;
        this.progressProgrammer.percentage = 100;
        this.progressProgrammerStatus = "Completed";
        this.colorProgrammer = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_bathroom").then((bathroom) => {
      if(bathroom != null){
        this.bathRoomImages = bathroom;
        this.progressBathRoom.percentage = 100;
        this.progressBathRoomStatus = "Completed";
        this.colorBathRoom = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_stairs").then((stairs) => {
      if(stairs != null){
        this.stairsImages = stairs;
        this.progressStairs.percentage = 100;
        this.progressStairsStatus = "Completed";
        this.colorStairs = "secondary";
      } 
    });

  }

  toggleAccordionSurveyor() {
    
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "max-height", "9000px");
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  

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

  capture(tag){
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // base64Image = 'data:image/jpeg;base64,' + imageData;

      if( tag == 'Bedroom'){
        this.bedroomImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Kitchen'){
       this.kitchenImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'DinningRoom'){
       this.diningRoomImages.push('data:image/jpeg;base64,' + imageData);

    }  else if(tag == 'LivingRoom'){
       this.livingRoomImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Hallway'){
       this.hallwayImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'LandingUpstairs'){
       this.landingUpstairsImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'FrontElevation'){
       this.frontElevationImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'LeftElevation'){
       this.leftElevationImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'RearElevation'){
       this.rearElevationImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'SideElevation'){
       this.sideElevationImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Utility'){
       this.utilityImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'HeatingSource'){
       this.heatingSourceImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'BathRoom'){
       this.bathRoomImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'AiringCupboard'){
       this.cupboardImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Conservatory'){
       this.conservatoryImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Other'){
       this.othersImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Stairs'){
       this.stairsImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Garage'){
       this.garageImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'WallThickness'){
       this.wallthicknessImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'FusedSpur'){
       this.fusedSpurImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'RoomStat'){
       this.roomStatImages.push('data:image/jpeg;base64,' + imageData);

     } else if(tag == 'Programmer'){
       this.programmerImages.push('data:image/jpeg;base64,' + imageData);

     }
    }, (err) => {
      // Handle Error
    });
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
      console.log(imageData);
      
     if(tag == 'Kitchen'){
        for(let i=0; i < imageData.length;i++){
        this.kitchenImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'DinningRoom'){
        for(let i=0; i < imageData.length;i++){
        this.diningRoomImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if(tag == 'LivingRoom'){
       for(let i=0; i < imageData.length;i++){
        this.livingRoomImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'Hallway'){
        for(let i=0; i < imageData.length;i++){
        this.hallwayImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'LandingUpstairs'){
        for(let i=0; i < imageData.length;i++){
        this.landingUpstairsImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'FrontElevation'){
        for(let i=0; i < imageData.length;i++){
        this.frontElevationImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'LeftElevation'){
        for(let i=0; i < imageData.length;i++){
        this.leftElevationImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'RearElevation'){
        for(let i=0; i < imageData.length;i++){
        this.rearElevationImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'SideElevation'){
        for(let i=0; i < imageData.length;i++){
        this.sideElevationImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'Utility'){
        for(let i=0; i < imageData.length;i++){
        this.utilityImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'HeatingSource'){
        for(let i=0; i < imageData.length;i++){
        this.heatingSourceImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'BathRoom'){
        for(let i=0; i < imageData.length;i++){
        this.bathRoomImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'AiringCupboard'){
        for(let i=0; i < imageData.length;i++){
        this.cupboardImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'Conservatory'){
        for(let i=0; i < imageData.length;i++){
        this.conservatoryImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'Other'){
        for(let i=0; i < imageData.length;i++){
        this.othersImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'Stairs'){
        for(let i=0; i < imageData.length;i++){
        this.stairsImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'Garage'){
        for(let i=0; i < imageData.length;i++){
        this.garageImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'WallThickness'){
        for(let i=0; i < imageData.length;i++){
        this.wallthicknessImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'FusedSpur'){
        for(let i=0; i < imageData.length;i++){
        this.fusedSpurImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'RoomStat'){
        for(let i=0; i < imageData.length;i++){
        this.roomStatImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     } else if(tag == 'Programmer'){
        for(let i=0; i < imageData.length;i++){
        this.programmerImages.push('data:image/jpeg;base64,' + imageData[i]);
      };

     }
     
    });

    
  }

 addToGallery(tag, number){
  const options = {
    maximumImagesCount: 5,
    quality: 50,
    width: 512,
    height: 512,
    outputType: 1
    }
    this.imagePicker.getPictures(options).then( imageData =>{ 
      for(let i=0; i < imageData.length;i++){
        this.bedroomImages2.push('data:image/jpeg;base64,' + imageData[i]);
        console.log("Count => " + i);
        // this.bedroomImages.push('data:image/jpeg;base64,' + imageData[i]);
      }

      this.bedroomImages[number] = this.bedroomImages2;
      console.log("BEDROOM " + number + ": = " + this.bedroomImages[number]);
      this.bedroomImages2 = [];
    });
 }

 captureBedrooms(number){
  const cameraOptions: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(cameraOptions).then((imageData) => {
    let arrayImages = this.bedroomImages[number];
     arrayImages.push('data:image/jpeg;base64,' + imageData);
     this.bedroomImages[number] = arrayImages;
  });
 }

 uploadImageBedroom(number){
  for(var i = 0; i <= 100; i+=10){
    this.progressBedroom[number].percentage = i;
    if(i == 100){
      this.progressBedroomStatus[number] = "Completed";
      this.colorBedroom[number] = "secondary";
    }
  }

  this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_bedroom", this.bedroomImages);
 }

 checkItemInList(number){
  
  if(this.bedroomImages[number]){
    return true;
  } else {
    return false;
  }
 }


  uploadImage(tag){
    console.log("Upload Image: " + tag)
     if ( tag == 'Kitchen'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_kitchen", this.kitchenImages);
      this.progressUploads(tag);

    } else if ( tag == 'DinningRoom'){
         this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_dinningroom", this.diningRoomImages);
         this.progressUploads(tag);

    } else if ( tag == 'LivingRoom') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_livingroom", this.livingRoomImages);
        this.progressUploads(tag);

    } else if ( tag == 'Hallway') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_hallway", this.hallwayImages);
        this.progressUploads(tag);

    } else if ( tag == 'LandingUpstairs') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_landingupstair", this.landingUpstairsImages);
        this.progressUploads(tag);

    } else if ( tag == 'FrontElevation') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_frontelevation", this.frontElevationImages);
        this.progressUploads(tag);

    } else if ( tag == 'LeftElevation') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_leftelevation", this.leftElevationImages);
        this.progressUploads(tag);

    } else if ( tag == 'RearElevation') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_rearelevation", this.rearElevationImages);
        this.progressUploads(tag);

    } else if ( tag == 'SideElevation') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_sideelevation", this.sideElevationImages);
        this.progressUploads(tag);

    } else if ( tag == 'Utility') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_utility", this.utilityImages);
        this.progressUploads(tag);

    } else if ( tag == 'HeatingSource') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_heatingsource", this.heatingSourceImages);
        this.progressUploads(tag);

    } else if ( tag == 'AiringCupboard') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_airingcupboard", this.cupboardImages);
        this.progressUploads(tag);

    } else if ( tag == 'Conservatory') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_conservatory", this.conservatoryImages);
        this.progressUploads(tag);

    } else if ( tag == 'Other') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_other", this.othersImages);
        this.progressUploads(tag);

    } else if ( tag == 'Stairs') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_stairs", this.stairsImages);
        this.progressUploads(tag);

    } else if ( tag == 'Garage') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_garage", this.garageImages);
        this.progressUploads(tag);

    } else if ( tag == 'WallThickness') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_wallthickness", this.wallthicknessImages);
        this.progressUploads(tag);

    } else if ( tag == 'FusedSpur') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_fusedspur", this.fusedSpurImages);
        this.progressUploads(tag);

    } else if ( tag == 'RoomStat') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_roomstat", this.roomStatImages);
        this.progressUploads(tag);

    } else if ( tag == 'Programmer') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_programmer", this.programmerImages);
        this.progressUploads(tag);

    } else if ( tag == 'BathRoom') {
        this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_bathroom", this.bathRoomImages);
        this.progressUploads(tag);
    }


  }


  progressUploads(tag){
    for(var i = 0; i <= 100; i+=10){

     if ( tag == 'Kitchen'){
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

  presentImageUploads(){
    let profileModal = this.modalCtrl.create(UploadedImagesComponent, { userId: 8675309 });
    profileModal.present();
  }



}