import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { RestProvider} from '../../providers/rest/rest';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
/**
 * Generated class for the SurveyorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surveyor',
  templateUrl: 'surveyor.html',
})
export class SurveyorPage {
  public signatureImage : any;
  public custSignatureImage: any;

  @ViewChild(SignaturePad) public signaturePadFloorPlan : SignaturePad;
  @ViewChild('floorPlan2') public signaturePadFloorPlan2 : SignaturePad;
  @ViewChild('floorPlan3') public signaturePadFloorPlan3 : SignaturePad;
  @ViewChild('declaration') public signaturePadDeclaration: SignaturePad;
  @ViewChild('imageCanvas') public signaturePadEngSign : SignaturePad;
  
  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 100,
    'canvasHeight': 100
  }

  public signaturePadOptions2 : Object = {
    'minWidth': 2,
    'canvasWidth': 100,
    'canvasHeight': 100
  }

  public signaturePadOptions3 : Object = {
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 300
  }

  public signaturePadOptionDeclaration : Object = {
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 300
  }

  public signaturePadOptionEngSign : Object = {
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 300
  }

  accordionExpanded = false;
  accordionExpandedFloorPlan2 = false;
  accordionExpandedFloorPlan3 = false;
  accordionExpandedDeclaration = false;

  @ViewChild("signatureForm") signatureForms: any;
  @ViewChild("signatureForm2") signatureForms2: any;
  @ViewChild("signatureForm3") signatureForms3: any;

  @ViewChild("declarationForm") declaractionForm: any;

  icon: string = "arrow-forward";
  icon2: string = "arrow-forward";
  icon3: string = "arrow-forward";
  icon4: string = "arrow-forward";
  

  campaignMeasureView: any;
  lead_slug: any;
  lead_info: any;
  leadCreatedDate: any;
  leadCustName: any;

  eshData: any;
  mainFormData: any;
  eshBoilerData: any;
  loftData: any;
  boilerData: any;
  solidWallData: any;
  cavityWallData: any;

  bedrooms: any = [];
  bedroom: any;
  kitchen: any = [];
  dinningroom: any = [];
  livingroom: any = [];
  hallway: any = [];
  landingupstair: any = [];
  frontelevation: any = [];
  leftelevation: any = [];
  rearelevation: any = [];
  sideelevation: any = [];
  utility: any = [];
  heatingsource: any = [];
  airingcupboard: any = [];
  conservatory: any = [];
  other: any = [];
  garage: any = [];
  wallthickness: any = [];
  fusedspur: any = [];
  roomstat: any = [];
  programmer: any = [];
  bathroom: any = [];
  kitchenImg: any = [];
  stairs: any = [];

  ubil: any = [];
  tenancyAgreement: any = [];
  landlordPerm: any = [];
  custSign: any;
  floorPlan: any;
  floorPlan2: any;
  floorPlan3: any;
  engSign: any;

  customerAgreement: any;

  img: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public renderer: Renderer,
              public modalController: ModalController,
              public storage: Storage,
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider,
              public rest: RestProvider)
     {
    this.campaignMeasureView = navParams.get('campaignValue');
    this.lead_slug = navParams.get('lead_slug');
    this.leadCreatedDate = navParams.get('leadCreatedDate');
    this.leadCustName = navParams.get('leadCustName');

    sharedObject.setSharedSelectedLeadObject(navParams.get('leadItem'));
    sharedObject.setSharedSlugSelectedCM(this.lead_slug);
    sharedObject.setSharedCustName(this.leadCustName);

    if(this.campaignMeasureView === 'JUNE LOFT'){
               storage.set("loft", true);

    } else if(this.campaignMeasureView === 'Boiler July 2018' ||
              this.campaignMeasureView === 'Boiler April 2018' ||
              this.campaignMeasureView === 'INFINITY BOILER MARCH' ||
              this.campaignMeasureView === 'JUNE BOILER') {
              storage.set("boiler", true);

    } else if(this.campaignMeasureView === 'CAVITY July 2018' ||
              this.campaignMeasureView === 'Cavity Wall April 2018' ||
              this.campaignMeasureView === 'INFINITY CAVITY MARCH' ||
              this.campaignMeasureView === 'JUNE CAVITY WALL'){
              this.storage.set("cavitywall", true);

    } else if(this.campaignMeasureView === 'JUNE ESH' ||
              this.campaignMeasureView === 'ESH July 2018' ||
              this.campaignMeasureView === 'ESH April 2018' ||
              this.campaignMeasureView === 'INFINITY ESH MARCH'){
              this.storage.set("esh", true);

    } else if(this.campaignMeasureView === 'INFINITY SOLID WALL' ||
              this.campaignMeasureView === 'SOLID July 2018' ||
              this.campaignMeasureView === 'JUNE SOLID WALL' ) {
              this.storage.set("solidwall", true);
    }


  }

  ionViewDidLoad(){
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
      this.renderer.setElementStyle(this.signatureForms2.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
      this.renderer.setElementStyle(this.signatureForms3.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
      this.renderer.setElementStyle(this.declaractionForm.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
     
    
  }


  // Toggle List for Signatures Floor Plan
  toggleSignatures() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  // Toggle List for Signatures
  toggleFloorPlan2() {
    if(this.accordionExpandedFloorPlan2){
      this.renderer.setElementStyle(this.signatureForms2.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.signatureForms2.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.signatureForms2.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.signatureForms2.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpandedFloorPlan2 = !this.accordionExpandedFloorPlan2;
    this.icon2 = this.icon2 == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  toggleFloorPlan3(){
    if(this.accordionExpandedFloorPlan3){
      this.renderer.setElementStyle(this.signatureForms3.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.signatureForms3.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.signatureForms3.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.signatureForms3.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpandedFloorPlan3 = !this.accordionExpandedFloorPlan3;
    this.icon3 = this.icon3 == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  toggleDeclaration(){
    if(this.accordionExpandedDeclaration){
      this.renderer.setElementStyle(this.declaractionForm.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.declaractionForm.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.declaractionForm.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.declaractionForm.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpandedDeclaration = !this.accordionExpandedDeclaration;
    this.icon4 = this.icon4 == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  // View Restriction for Forms. etc.
  isViewedLoft(){
    if (this.campaignMeasureView === 'JUNE LOFT'){
      return true;
    }
  }

  isViewedBoiler(){
    if (this.campaignMeasureView === 'Boiler July 2018'){
     return true;
   }  else if (this.campaignMeasureView === 'Boiler April 2018'){
     return true;
   } else if (this.campaignMeasureView === 'INFINITY BOILER MARCH'){
     return true;
   } else if (this.campaignMeasureView === 'JUNE BOILER'){
     return true;
   }

  }

  isViewedCavityWall(){
     if (this.campaignMeasureView === 'CAVITY July 2018'){
     return true;
   }  else if (this.campaignMeasureView === 'Cavity Wall April 2018'){
     return true;
   } else if (this.campaignMeasureView === 'INFINITY CAVITY MARCH'){
     return true;
   }  else if (this.campaignMeasureView === 'JUNE CAVITY WALL'){
     return true;
   }
  }

  isViewedESH(){
    if(this.campaignMeasureView === 'JUNE ESH'){
      return true;
    } else if (this.campaignMeasureView === 'ESH July 2018'){
      return true;
    } else if (this.campaignMeasureView === 'ESH April 2018'){
      return true;
    } else if (this.campaignMeasureView === 'INFINITY ESH MARCH'){
      return true;
    }
  }

  isViewedSolidWall(){
     if (this.campaignMeasureView === 'INFINITY SOLID WALL'){
      return true;
    }  else if (this.campaignMeasureView === 'SOLID July 2018'){
      return true;
    } else if (this.campaignMeasureView === 'JUNE SOLID WALL'){
      return true;
    }
  }

  savedImagesBoiler(){

  }

  savedImagesEsh(){

    // this.storage.get('bedroom').then((bedroom) => {
    //   this.bedroom = bedroom;
    // });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_bedroom').then((bedroom) => {
      this.bedrooms = bedroom;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_kitchen').then((kitchen) => {
        this.kitchen = kitchen;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_dinningroom').then((dinningroom) => {
        this.dinningroom = dinningroom;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_livingroom').then((livingroom) => {
        this.livingroom = livingroom;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_hallway').then((hallway) => {
        this.hallway = hallway;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_landingupstair').then((landingupstair) => {
        this.landingupstair = landingupstair;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_frontelevation').then((frontelevation) => {
        this.frontelevation = frontelevation;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_leftelevation').then((leftelevation) => {
        this.leftelevation = leftelevation;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_rearelevation').then((rearelevation) => {
        this.rearelevation = rearelevation;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_sideelevation').then((sideelevation) => {
        this.sideelevation = sideelevation;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_utility').then((utility) => {
        this.utility = utility;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_heatingsource').then((heatingsource) => {
        this.heatingsource = heatingsource;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_airingcupboard').then((airingcupboard) => {
        this.airingcupboard = airingcupboard;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_conservatory').then((conservatory) => {
        this.conservatory = conservatory;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_other').then((other) => {
        this.other = other;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_garage').then((garage) => {
        this.garage = garage;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_wallthickness').then((wallthickness) => {
        this.wallthickness = wallthickness;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_fusedspur').then((fusedspur) => {
        this.fusedspur = fusedspur;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_roomstat').then((roomstat) => {
        this.roomstat = roomstat;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_programmer').then((programmer) => {
        this.programmer = programmer;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_bathroom').then((bathroom) => {
        this.bathroom = bathroom;
    });


    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_stairs').then((stairs) => {
        this.stairs = stairs;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_eshUBIL').then((ubil) => {
        this.ubil = ubil;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_eshTenancyAgreement').then((tenancyAgreement) => {
        this.tenancyAgreement = tenancyAgreement;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_eshLandLordPerm').then((landlordPerm) => {
        this.landlordPerm = landlordPerm;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_declaration').then((custSign) => {
        this.custSign = custSign;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_FloorPlan').then((floorPlan) => {
        this.floorPlan = floorPlan;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_FloorPlan2').then((floorPlan2) => {
      this.floorPlan2 = floorPlan2;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_FloorPlan3').then((floorPlan3) => {
      this.floorPlan3 = floorPlan3;
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_engSign').then((engSign) => {
      this.engSign = engSign;
    });

  }

  saveImageObject(){
    const imgObj = {
    bedrooms: this.bedrooms,
    kitchen: this.kitchen,
    diningroom:  this.dinningroom,
    livingroom:  this.livingroom,
    hallway:  this.hallway,
    landingupstair:  this.landingupstair,
    frontelevation: this.frontelevation,
    leftelevation:  this.leftelevation,
    rearelevation: this.rearelevation,
    sideelevation: this.sideelevation,
    utility:  this.utility,
    airingcupboard: this.airingcupboard,
    conservatory: this.conservatory,
    other:  this.other,
    garage:  this.garage,
    wallthickness:  this.wallthickness,
    fusedspur:  this.fusedspur,
    roomstat:  this.roomstat,
    programmer: this.programmer,
    bathroom:  this.bathroom,
    stairs: this.stairs,
    ubil: this.ubil,
    landlordPerm: this.landlordPerm,
    tenancyAgreement: this.tenancyAgreement,
    custSign: this.custSign,
    floorPlan: this.floorPlan,
    floorPlan2: this.floorPlan2,
    floorPlan3: this.floorPlan3,
    engSign: this.engSign
   };

     this.rest.fileUploadMainForm('Image', imgObj);

  }

  savedObject(){

    this.mainFormData = this.sharedObject.getSharedMainForm();


    if(this.sharedObject.getSharedBoilerObject()){
      this.boilerData = this.sharedObject.getSharedBoilerObject();

    } else if(this.sharedObject.getSharedCavityWallObject()){
      this.cavityWallData = this.sharedObject.getSharedCavityWallObject();

    } else if(this.sharedObject.getSharedLoftObject()){
      this.loftData = this.sharedObject.getSharedLoftObject();

    } else if(this.sharedObject.getSharedSolidWallObject()) {
      this.solidWallData = this.sharedObject.getSharedSolidWallObject();

    } else if(this.sharedObject.getSharedEshObject()) {
      this.eshData = this.sharedObject.getSharedEshObject();
      this.eshBoilerData = this.sharedObject.getSharedEshBoilerObject();

    }


    const saveData = {
      date_of_survey: this.mainFormData.myDate,
      property_type: this.mainFormData.propertyType,
      property_type1: this.mainFormData.propertyType1,
      property_type2: this.mainFormData.propertyType2,
      addressInstall: this.mainFormData.addressInstall,
      notes: this.mainFormData.notes,
      postCode: this.mainFormData.postCode,
      bedrooms: this.mainFormData.bedrooms,
      tenure: this.mainFormData.tenure,
      heating_source: this.mainFormData.heatingSource,
      customer_type: this.mainFormData.custType,
      surveyor_name: this.mainFormData.surveyorName,
      name_of_customer: this.mainFormData.nameOfCustomer,
      other: this.mainFormData.other,
      dob: this.mainFormData.myDate,
      newHeatingSystemUsing: this.eshBoilerData.newHeatingSystemUsing,
      newSystemHeatBool: this.eshBoilerData.newSystemHeatBool,
      eshUnroundedPOPT: this.eshBoilerData.eshUnroundedPOPT,
      eshRoundedPOPT: this.eshBoilerData.eshRoundedPOPT ,
      preExttESHSlimline: this.eshData.eshSlimline,
      preExtEshFanAsst: this.eshData.eshFanAssisted,
      preExtEshHighHeatRet: this.eshData.eshHighHeatRetention,
      numberOfEshInstalledQlfySL: this.eshData.eshInstalledQualifyingSlimline,
      numberOfEshInstalledNQlfySL:this.eshData.eshInstalledNonQualifyingSlimline,
      numberOfEshInstalledQlfyFA: this.eshData.eshInstalledQualifyingFanAsst,
      numberOfEshInstalledNQlfyFA: this.eshData.estInstalledNonQualifyingFanAsst,
      numberOfEshInstalledQlfyHHR: this.eshData.eshInstalledQualHighHeatRet,
      numberOfEshInstalledNQlfyHHR:this.eshData.eshInstalledNonQualHighHeatRet,
      qeshRepSL: this.eshData.eshQeshRepairSlimline,
      qeshRepHHR: this.eshData.eshQeshRepairHighHeatRet,
      qeshFA: this.eshData.eshQeshRepairFanAsst
    };

    this.sharedObject.setSharedSubmitObject(saveData);
    this.savedImagesEsh();
    alert("Saved Lead Successfully!");

    //console.log(JSON.stringify(this.eshData));
    //console.log(JSON.stringify(this.mainFormData));
    //console.log(JSON.stringify(this.eshBoilerData));
    // console.log(this.mainFormData.notes);
    // console.log(this.mainFormData.postCode);
    // console.log(this.mainFormData.addressInstall);
    // console.log(JSON.stringify(saveData));
    // this.storage.forEach( (value, key, index) => {
    //    console.log("This is the value", value);
    //    console.log("from the key", key);
    //    console.log("Index is", index);
    //  });

  }


  submitObject(){

    const submitData = this.sharedObject.getSharedSubmitObject();
    this.rest.updateLeadData(this.lead_slug,submitData,
      submitData.notes,
      submitData.postCode,
      submitData.addressInstall,
      submitData.name_of_customer).then((result) => {
            console.log(result);

          this.saveImageObject();
          //this.navCtrl.setRoot(DashboardPage);

    }, (err) => {
            console.log(err);

      });
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePadFloorPlan.set('minWidth', 1);
    this.signaturePadFloorPlan.set('canvasWidth', canvas.offsetWidth);
    this.signaturePadFloorPlan.set('canvasHeight', canvas.offsetHeight);

    this.signaturePadFloorPlan2.set('minWidth', 1);
    this.signaturePadFloorPlan2.set('canvasWidth', canvas.offsetWidth);
    this.signaturePadFloorPlan2.set('canvasHeight', canvas.offsetHeight);

    this.signaturePadFloorPlan3.set('minWidth', 1);
    this.signaturePadFloorPlan3.set('canvasWidth', canvas.offsetWidth);
    this.signaturePadFloorPlan3.set('canvasHeight', canvas.offsetHeight);

    this.signaturePadDeclaration.set('minWidth', 1);
    this.signaturePadDeclaration.set('canvasWidth', 800);
    this.signaturePadDeclaration.set('canvasHeight', 200);

    this.signaturePadEngSign.set('minWidth', 1);
    this.signaturePadEngSign.set('canvasWidth', 800);
    this.signaturePadEngSign.set('canvasHeight', 200);
  }

 


   ngAfterViewInit() {
     console.log("Reset Model Screen");
     this.signaturePadFloorPlan.clear();
     this.signaturePadFloorPlan2.clear();
     this.signaturePadFloorPlan3.clear();
     this.signaturePadDeclaration.clear();
     this.signaturePadEngSign.clear();
     this.canvasResize();
   }

   drawComplete(tag) {
     //this.storage.set("FloorPlan", this.signaturePad.toDataURL());
     if(tag == 'floorPlan'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() +"_FloorPlan", this.signaturePadFloorPlan.toDataURL());
      this.presentToast("Floor Plan");
      this.toggleSignatures();
      this.toggleFloorPlan2();
    } else if (tag == 'floorPlan2') {
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_FloorPlan2", this.signaturePadFloorPlan2.toDataURL());
      this.presentToast("Floor Plan II");
      this.toggleFloorPlan2();
      this.toggleFloorPlan3();
    } else if (tag == 'floorPlan3') {
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_FloorPlan3", this.signaturePadFloorPlan3.toDataURL());
      this.presentToast("Floor Plan III");
      this.toggleFloorPlan3();
      this.toggleDeclaration();
     
    } else if (tag == 'declaration') {
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_declaration", this.signaturePadDeclaration.toDataURL());
      this.presentToast("Declaration");
      this.toggleDeclaration();
     
    } else if (tag == 'engSign') {
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_engSign", this.signaturePadEngSign.toDataURL());
      this.presentToast("Engineer Signature");
      
    }
     
  }

  drawClear(tag) {
    if(tag == 'floorPlan'){
      this.signaturePadFloorPlan.clear();
    } else if (tag == 'floorPlan2') {
      this.signaturePadFloorPlan2.clear();
    } else if (tag == 'floorPlan3') {
      this.signaturePadFloorPlan3.clear();
    } else if (tag == 'declaration') {
      this.signaturePadDeclaration.clear();
    } else if (tag == 'engSign') {
      this.signaturePadEngSign.clear();
    }
    
  }

  drawUndo(tag){
    if(tag == 'floorPlan'){
      let data = this.signaturePadFloorPlan.toData();
      data.pop();
      this.signaturePadFloorPlan.fromData(data);
    } else if (tag == 'floorPlan2') {
      let data = this.signaturePadFloorPlan2.toData();
      data.pop();
      this.signaturePadFloorPlan2.fromData(data);

    } else if (tag == 'floorPlan3') {
      let data = this.signaturePadFloorPlan3.toData();
      data.pop();
      this.signaturePadFloorPlan3.fromData(data);

    } else if (tag == 'declaration') {
      let data = this.signaturePadDeclaration.toData();
      data.pop();
      this.signaturePadDeclaration.fromData(data);
      
    } else if (tag == 'engSign') {
      let data = this.signaturePadEngSign.toData();
      data.pop();
      this.signaturePadEngSign.fromData(data);
      
    }

    
  }

  presentToast(tag){
    let toast = this.toastCtrl.create({
      message: 'Saved ' + tag + ' Successfully!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


}


