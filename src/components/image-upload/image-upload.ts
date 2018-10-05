import { Component, ViewChild, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { ImagePicker } from '@ionic-native/image-picker';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * Image Upload for <Main Form>
 */

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.html'
})
export class ImageUploadComponent {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: {percentage: number} = {percentage: 0};

  accordionExpanded = false;

  @ViewChild("imageuploadForms") imageuploadFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  propSectMain: any = [];
  progressPropSectMain: {percentage: number} = {percentage: 0};
  progressPropSectMainStatus: string = "Not yet uploaded";
  colorPropSectMain: string = "danger";

  propSectExt1: any = [];
  progressPropSectExt1: {percentage: number} = {percentage: 0};
  progressPropSectExt1Status: string = "Not yet uploaded";
  colorPropSectExt1: string = "danger";

  propSectExt2: any = [];
  progressPropSectExt2: {percentage: number} = {percentage: 0};
  progressPropSectExt2Status: string = "Not yet uploaded";
  colorPropSectExt2: string = "danger";

  propSectExt3: any = [];
  progressPropSectExt3: {percentage: number} = {percentage: 0};
  progressPropSectExt3Status: string = "Not yet uploaded";
  colorPropSectExt3: string = "danger";

  propSectExt4: any = [];
  progressPropSectExt4: {percentage: number} = {percentage: 0};
  progressPropSectExt4Status: string = "Not yet uploaded";
  colorPropSectExt4: string = "danger";

  floorConstMain: any = [];
  progressFloorConstMain: {percentage: number} = {percentage: 0};
  progressFloorConstMainStatus: string = "Not yet uploaded";
  colorFloorConstMain: string = "danger";

  floorConstExt1: any = [];
  progressFloorConstExt1: {percentage: number} = {percentage: 0};
  progressFloorConstExt1Status: string = "Not yet uploaded";
  colorFloorConstExt1: string = "danger";

  floorConstExt2: any = [];
  progressFloorConstExt2: {percentage: number} = {percentage: 0};
  progressFloorConstExt2Status: string = "Not yet uploaded";
  colorFloorConstExt2: string = "danger";

  floorConstExt3: any = [];
  progressFloorConstExt3: {percentage: number} = {percentage: 0};
  progressFloorConstExt3Status: string = "Not yet uploaded";
  colorFloorConstExt3: string = "danger";

  floorConstExt4: any = [];
  progressFloorConstExt4: {percentage: number} = {percentage: 0};
  progressFloorConstExt4Status: string = "Not yet uploaded";
  colorFloorConstExt4: string = "danger";

  areaMain: any= [];
  progressAreaMain: {percentage: number} = {percentage: 0};
  progressAreaMainStatus: string = "Not yet uploaded";
  colorAreaMain: string = "danger";

  areaExt1: any= [];
  progressAreaExt1: {percentage: number} = {percentage: 0};
  progressAreaExt1Status: string = "Not yet uploaded";
  colorAreaExt1: string = "danger";

  areaExt2: any= [];
  progressAreaExt2: {percentage: number} = {percentage: 0};
  progressAreaExt2Status: string = "Not yet uploaded";
  colorAreaExt2: string = "danger";

  areaExt3: any= [];
  progressAreaExt3: {percentage: number} = {percentage: 0};
  progressAreaExt3Status: string = "Not yet uploaded";
  colorAreaExt3: string = "danger";

  areaExt4: any= [];
  progressAreaExt4: {percentage: number} = {percentage: 0};
  progressAreaExt4Status: string = "Not yet uploaded";
  colorAreaExt4: string = "danger";
  

  insulationMain: any= [];
  progressInsulationMain: {percentage: number} = {percentage: 0};
  progressInsulationMainStatus: string = "Not yet uploaded";
  colorInsulationMain: string = "danger";

  insulationExt1: any= [];
  progressInsulationExt1: {percentage: number} = {percentage: 0};
  progressInsulationExt1Status: string = "Not yet uploaded";
  colorInsulationExt1: string = "danger";

  insulationExt2: any= [];
  progressInsulationExt2: {percentage: number} = {percentage: 0};
  progressInsulationExt2Status: string = "Not yet uploaded";
  colorInsulationExt2: string = "danger";

  insulationExt3: any= [];
  progressInsulationExt3: {percentage: number} = {percentage: 0};
  progressInsulationExt3Status: string = "Not yet uploaded";
  colorInsulationExt3: string = "danger";

  insulationExt4: any = [];
  progressInsulationExt4: {percentage: number} = {percentage: 0};
  progressInsulationExt4Status: string = "Not yet uploaded";
  colorInsulationExt4: string = "danger";

  


  constructor(public renderer: Renderer,  
              private camera: Camera,
              private storage: Storage,
              private sharedObject: SharedobjectserviceProvider,
              private imagePicker: ImagePicker) {}

  ionViewDidLoad(){
    console.log(this.imageuploadFormContent.nativeElement);
    this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  toggleAccordionImageUpload() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "max-height", "9200px");
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavMain").then((main) => {
      if(main != null){
        this.propSectMain = main;
        this.progressPropSectMain.percentage = 100;
        this.progressPropSectMainStatus = "Completed";
        this.colorPropSectMain = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt1").then((main) => {
      if(main != null){
        this.propSectExt1 = main;
        this.progressPropSectExt1.percentage = 100;
        this.progressPropSectExt1Status = "Completed";
        this.colorPropSectExt1 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt2").then((main) => {
      if(main != null){
        this.propSectExt2 = main;
        this.progressPropSectExt2.percentage = 100;
        this.progressPropSectExt2Status = "Completed";
        this.colorPropSectExt2 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt3").then((main) => {
      if(main != null){
        this.propSectExt3 = main;
        this.progressPropSectExt3.percentage = 100;
        this.progressPropSectExt3Status = "Completed";
        this.colorPropSectExt3 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt4").then((main) => {
      if(main != null){
        this.propSectExt4 = main;
        this.progressPropSectExt4.percentage = 100;
        this.progressPropSectExt4Status = "Completed";
        this.colorPropSectExt4 = "secondary";
      }
    });

    

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorMain").then((main) => {
      if(main != null){
        this.floorConstMain = main;
        this.progressFloorConstMain.percentage = 100;
        this.progressFloorConstMainStatus = "Completed";
        this.colorFloorConstMain = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt1").then((main) => {
      if(main != null){
        this.floorConstExt1 = main;
        this.progressFloorConstExt1.percentage = 100;
        this.progressFloorConstExt1Status = "Completed";
        this.colorFloorConstExt1 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt2").then((main) => {
      if(main != null){
        this.floorConstExt2 = main;
        this.progressFloorConstExt2.percentage = 100;
        this.progressFloorConstExt2Status = "Completed";
        this.colorFloorConstExt2 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt3").then((main) => {
      if(main != null){
        this.floorConstExt3 = main;
        this.progressFloorConstExt3.percentage = 100;
        this.progressFloorConstExt3Status = "Completed";
        this.colorFloorConstExt3 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt4").then((main) => {
      if(main != null){
        this.floorConstExt4 = main;
        this.progressFloorConstExt4.percentage = 100;
        this.progressFloorConstExt4Status = "Completed";
        this.colorFloorConstExt4 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaMain").then((main) => {
      if(main != null){
        this.areaMain = main;
        this.progressAreaMain.percentage = 100;
        this.progressAreaMainStatus = "Completed";
        this.colorAreaMain = "secondary";

      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt1").then((main) => {
      if(main != null){
        this.areaExt1 = main;
        this.progressAreaExt1.percentage = 100;
        this.progressAreaExt1Status = "Completed";
        this.colorAreaExt1 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt2").then((main) => {
      if(main != null){
        this.areaExt2 = main;
        this.progressAreaExt2.percentage = 100;
        this.progressAreaExt2Status = "Completed";
        this.colorAreaExt2 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt3").then((main) => {
      if(main != null){
        this.areaExt3 = main;
        this.progressAreaExt3.percentage = 100;
        this.progressAreaExt3Status = "Completed";
        this.colorAreaExt3 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt4").then((main) => {
      if(main != null){
        this.areaExt4 = main;
        this.progressAreaExt4.percentage = 100;
        this.progressAreaExt4Status = "Completed";
        this.colorAreaExt4 = "secondary";
      } 
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstMain").then((main) => {
      if(main != null){
        this.insulationMain = main;
        this.progressInsulationMain.percentage = 100;
        this.progressInsulationMainStatus = "Completed";
        this.colorInsulationMain = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt1").then((main) => {
      if(main != null){
        this.insulationExt1 = main;
        this.progressInsulationExt1.percentage = 100;
        this.progressInsulationExt1Status = "Completed";
        this.colorInsulationExt1 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt2").then((main) => {
      if(main != null){
        this.insulationExt2 = main;
        this.progressInsulationExt2.percentage = 100;
        this.progressInsulationExt2Status = "Completed";
        this.colorInsulationExt2 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt3").then((main) => {
      if(main != null){
        this.insulationExt3 = main;
        this.progressInsulationExt3.percentage = 100;
        this.progressInsulationExt3Status = "Completed";
        this.colorInsulationExt3 = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt4").then((main) => {
      if(main != null){
        this.insulationExt4 = main;
        this.progressInsulationExt4.percentage = 100;
        this.progressInsulationExt4Status = "Completed";
        this.colorInsulationExt4 = "secondary";
      }
    });
  }

  openGallery(tag){
    const options = {
      maximumImagesCount: 5,
      quality: 50,
      width: 512,
      height: 512,
      outputType: 1
    }

    this.imagePicker.getPictures(options).then( imageData =>{
    if(tag == 'Main'){
      for(let i=0; i < imageData.length;i++){
        this.propSectMain.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'Ext1'){
      for(let i=0; i < imageData.length;i++){
        this.propSectExt1.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'Ext2'){
      for(let i=0; i < imageData.length;i++){
        this.propSectExt2.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'Ext3'){
      for(let i=0; i < imageData.length;i++){
        this.propSectExt3.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'Ext4'){
      for(let i=0; i < imageData.length;i++){
        this.propSectExt4.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'FloorMain'){
      for(let i=0; i < imageData.length;i++){
        this.floorConstMain.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'FloorExt1'){
      for(let i=0; i < imageData.length;i++){
        this.floorConstExt1.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'FloorExt2'){
      for(let i=0; i < imageData.length;i++){
        this.floorConstExt2.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'FloorExt3'){
      for(let i=0; i < imageData.length;i++){
        this.floorConstExt3.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'FloorExt4'){
      for(let i=0; i < imageData.length;i++){
        this.floorConstExt4.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'AreaMain'){
      for(let i=0; i < imageData.length;i++){
        this.areaMain.push('data:image/jpeg;base64,' + imageData[i]);
      };
      
    } else if (tag == 'AreaExt1'){
      for(let i=0; i < imageData.length;i++){
        this.areaExt1.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'AreaExt2'){
      for(let i=0; i < imageData.length;i++){
        this.areaExt2.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'AreaExt3'){
      for(let i=0; i < imageData.length;i++){
        this.areaExt3.push('data:image/jpeg;base64,' + imageData[i]);
      };

    } else if (tag == 'AreaExt4'){
      for(let i=0; i < imageData.length;i++){
        this.areaExt4.push('data:image/jpeg;base64,' + imageData[i]);
      };
    } else if (tag == 'InsulationMain'){
      for(let i=0; i < imageData.length;i++){
        this.insulationMain.push('data:image/jpeg;base64,' + imageData[i]);
      };
    } else if (tag == 'InsulationExt1'){
      for(let i=0; i < imageData.length;i++){
        this.insulationExt1.push('data:image/jpeg;base64,' + imageData[i]);
      };
    } else if (tag == 'InsulationExt2'){
      for(let i=0; i < imageData.length;i++){
        this.insulationExt2.push('data:image/jpeg;base64,' + imageData[i]);
      };
    } else if (tag == 'InsulationExt3'){
      for(let i=0; i < imageData.length;i++){
        this.insulationExt3.push('data:image/jpeg;base64,' + imageData[i]);
      };
    } else if (tag == 'InsulationExt4'){
      for(let i=0; i < imageData.length;i++){
        this.insulationExt4.push('data:image/jpeg;base64,' + imageData[i]);
      };
    }

    });
  }
  capture(tag){
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
    if(tag == 'Main'){
      this.propSectMain.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'Ext1'){
      this.propSectExt1.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'Ext2'){
      this.propSectExt2.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'Ext3'){
      this.propSectExt3.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'Ext4'){
      this.propSectExt4.push('data:image/jpeg;base64,' + imageData);

    } else if (tag == 'FloorMain'){
      this.floorConstMain.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'FloorExt1'){
      this.floorConstExt1.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'FloorExt2'){
      this.floorConstExt2.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'FloorExt3'){
      this.floorConstExt3.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'FloorExt4'){
      this.floorConstExt4.push('data:image/jpeg;base64,' + imageData);

    } else if (tag == 'AreaMain'){
      this.areaMain.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'AreaExt1'){
      this.areaExt1.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'AreaExt2'){
      this.areaExt2.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'AreaExt3'){
      this.areaExt3.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'AreaExt4'){
      this.areaExt4.push('data:image/jpeg;base64,' + imageData);

    } else if (tag == 'InsulationMain'){
      this.insulationMain.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'InsulationExt1'){
      this.insulationExt1.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'InsulationExt2'){
      this.insulationExt2.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'InsulationExt3'){
      this.insulationExt3.push('data:image/jpeg;base64,' + imageData);
    } else if (tag == 'InsulationExt4'){
      this.insulationExt4.push('data:image/jpeg;base64,' + imageData);
    }

    });
  }

  uploadImage(tag){
    if(tag == 'Main'){
     this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavMain", this.propSectMain);
     this.progressUploads(tag);
    } else if (tag == 'Ext1'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt1", this.propSectExt1);
      this.progressUploads(tag);

    } else if (tag == 'Ext2'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt2", this.propSectExt2);
      this.progressUploads(tag);

    } else if (tag == 'Ext3'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt3", this.propSectExt3);
      this.progressUploads(tag);

    } else if (tag == 'Ext4'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavExt4", this.propSectExt4);
      this.progressUploads(tag);

    } else if (tag == 'FloorMain'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorMain", this.floorConstMain);
      this.progressUploads(tag);

    } else if (tag == 'FloorExt1'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt1", this.floorConstExt1);
      this.progressUploads(tag);

    } else if (tag == 'FloorExt2'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt2", this.floorConstExt2);
      this.progressUploads(tag);

    } else if (tag == 'FloorExt3'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt3", this.floorConstExt3);
      this.progressUploads(tag);

    } else if (tag == 'FloorExt4'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavFloorExt4", this.floorConstExt4);
      this.progressUploads(tag);

    } else if (tag == 'AreaMain'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaMain", this.areaMain);
      this.progressUploads(tag);
      
    } else if (tag == 'AreaExt1'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt1", this.areaExt1);
      this.progressUploads(tag);

    } else if (tag == 'AreaExt2'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt2", this.areaExt2);
      this.progressUploads(tag);

    } else if (tag == 'AreaExt3'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt3", this.areaExt3);
      this.progressUploads(tag);
      
    } else if (tag == 'AreaExt4'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavAreaExt4", this.areaExt4);
      this.progressUploads(tag);

    } else if (tag == 'InsulationMain'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstMain", this.insulationMain);
      this.progressUploads(tag);

    } else if (tag == 'InsulationExt1'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt1", this.insulationExt1);
      this.progressUploads(tag);

    } else if (tag == 'InsulationExt2'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt2", this.insulationExt2);
      this.progressUploads(tag);

    } else if (tag == 'InsulationExt3'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt3", this.insulationExt3);
      this.progressUploads(tag);

    } else if (tag == 'InsulationExt4'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_cavInstExt4", this.insulationExt4);
      this.progressUploads(tag);
    } 
  }

  progressUploads(tag){
    for(var i = 0; i <= 100; i+=10){
    if(tag == 'Main'){
      this.progressPropSectMain.percentage = i;
        if(i == 100){
          this.progressPropSectMainStatus = "Completed";
          this.colorPropSectMain = "secondary";
        }
    } else if (tag == 'Ext1'){
      this.progressPropSectExt1.percentage = i;
        if(i == 100){
          this.progressPropSectExt1Status = "Completed";
          this.colorPropSectExt1 = "secondary";
        }
    } else if (tag == 'Ext2'){
      this.progressPropSectExt2.percentage = i;
        if(i == 100){
          this.progressPropSectExt2Status = "Completed";
          this.colorPropSectExt2 = "secondary";
        }
    } else if (tag == 'Ext3'){
      this.progressPropSectExt3.percentage = i;
        if(i == 100){
          this.progressPropSectExt3Status = "Completed";
          this.colorPropSectExt3 = "secondary";
        }
    } else if (tag == 'Ext4'){
      this.progressPropSectExt4.percentage = i;
        if(i == 100){
          this.progressPropSectExt4Status = "Completed";
          this.colorPropSectExt4 = "secondary";
        }
    } else if (tag == 'FloorMain'){
      this.progressFloorConstMain.percentage = i;
        if(i == 100){
          this.progressFloorConstMainStatus = "Completed";
          this.colorFloorConstMain = "secondary";
        }
    } else if (tag == 'FloorExt1'){
      this.progressFloorConstExt1.percentage = i;
        if(i == 100){
          this.progressFloorConstExt1Status = "Completed";
          this.colorFloorConstExt1 = "secondary";
        }
    } else if (tag == 'FloorExt2'){
      this.progressFloorConstExt2.percentage = i;
        if(i == 100){
          this.progressFloorConstExt2Status = "Completed";
          this.colorFloorConstExt2 = "secondary";
        }
    } else if (tag == 'FloorExt3'){
      this.progressFloorConstExt3.percentage = i;
        if(i == 100){
          this.progressFloorConstExt3Status = "Completed";
          this.colorFloorConstExt3 = "secondary";
        }
    } else if (tag == 'FloorExt4'){
      this.progressFloorConstExt4.percentage = i;
        if(i == 100){
          this.progressFloorConstExt4Status = "Completed";
          this.colorFloorConstExt4 = "secondary";
        }
    } else if (tag == 'AreaMain'){
      this.progressAreaMain.percentage = i;
        if(i == 100){
          this.progressAreaMainStatus = "Completed";
          this.colorAreaMain = "secondary";
        }
    } else if (tag == 'AreaExt1'){
      this.progressAreaExt1.percentage = i;
        if(i == 100){
          this.progressAreaExt1Status = "Completed";
          this.colorAreaExt1 = "secondary";
        }
    } else if (tag == 'AreaExt2'){
      this.progressAreaExt2.percentage = i;
        if(i == 100){
          this.progressAreaExt2Status = "Completed";
          this.colorAreaExt2 = "secondary";
        }
    } else if (tag == 'AreaExt3'){
      this.progressAreaExt3.percentage = i;
        if(i == 100){
          this.progressAreaExt3Status = "Completed";
          this.colorAreaExt3 = "secondary";
        }
    } else if (tag == 'AreaExt4'){
      this.progressAreaExt4.percentage = i;
        if(i == 100){
          this.progressAreaExt4Status = "Completed";
          this.colorAreaExt4 = "secondary";
        }
    } else if (tag == 'InsulationMain'){
      this.progressInsulationMain.percentage = i;
        if(i == 100){
          this.progressInsulationMainStatus = "Completed";
          this.colorInsulationMain = "secondary";
        }
    } else if (tag == 'InsulationExt1'){
      this.progressInsulationExt1.percentage = i;
        if(i == 100){
          this.progressInsulationExt1Status = "Completed";
          this.colorInsulationExt1 = "secondary";
        }
    } else if (tag == 'InsulationExt2'){
      this.progressInsulationExt2.percentage = i;
        if(i == 100){
          this.progressInsulationExt2Status = "Completed";
          this.colorInsulationExt2 = "secondary";
        }
    } else if (tag == 'InsulationExt3'){
      this.progressInsulationExt3.percentage = i;
        if(i == 100){
          this.progressInsulationExt3Status = "Completed";
          this.colorInsulationExt3 = "secondary";
        }
    } else if (tag == 'InsulationExt4'){
      this.progressInsulationExt4.percentage = i;
        if(i == 100){
          this.progressInsulationExt4Status = "Completed";
          this.colorInsulationExt4 = "secondary";
        }
    } 
   }
  }

}
