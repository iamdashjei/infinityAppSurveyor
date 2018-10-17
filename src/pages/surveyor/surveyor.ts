import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { RestProvider} from '../../providers/rest/rest';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DashboardPage } from '../dashboard/dashboard';
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
  poptData: any;

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
  EPOPImage: any = [];

  signatureStatus: boolean = false;

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
                this.sharedObject.setSharedSelectedLeadTag("boilers");

    } else if(this.campaignMeasureView === 'CAVITY July 2018' ||
              this.campaignMeasureView === 'Cavity Wall April 2018' ||
              this.campaignMeasureView === 'INFINITY CAVITY MARCH' ||
              this.campaignMeasureView === 'JUNE CAVITY WALL'){
                this.sharedObject.setSharedSelectedLeadTag("cavities");

    } else if(this.campaignMeasureView === 'JUNE ESH' ||
              this.campaignMeasureView === 'ESH July 2018' ||
              this.campaignMeasureView === 'ESH April 2018' ||
              this.campaignMeasureView === 'INFINITY ESH MARCH'){
                this.sharedObject.setSharedSelectedLeadTag("esh");

    } else if(this.campaignMeasureView === 'INFINITY SOLID WALL' ||
              this.campaignMeasureView === 'SOLID July 2018' ||
              this.campaignMeasureView === 'JUNE SOLID WALL' ) {
                this.sharedObject.setSharedSelectedLeadTag("sw");
    } else if(this.campaignMeasureView === 'JUNE LOFT' ) {
              this.sharedObject.setSharedSelectedLeadTag("lofts");
    } 


  }

  ionViewDidLoad(){
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "webkitTransition", "max-height 2600ms, padding 500ms");
      this.renderer.setElementStyle(this.signatureForms2.nativeElement, "webkitTransition", "max-height 2600ms, padding 500ms");
      this.renderer.setElementStyle(this.signatureForms3.nativeElement, "webkitTransition", "max-height 2600ms, padding 500ms");
      this.renderer.setElementStyle(this.declaractionForm.nativeElement, "webkitTransition", "max-height 2600ms, padding 500ms");
     
    
  }


  // Toggle List for Signatures Floor Plan
  toggleSignatures() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "max-height", "2600px");
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
      this.renderer.setElementStyle(this.signatureForms2.nativeElement, "max-height", "2600px");
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
      this.renderer.setElementStyle(this.signatureForms3.nativeElement, "max-height", "2600px");
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
      this.renderer.setElementStyle(this.declaractionForm.nativeElement, "max-height", "2600px");
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
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_boilerUBIL').then((ubil) => {
      if(ubil != null){
        this.ubil = ubil;
      }  
      
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_boilerTenancyAgreement').then((tenancyAgreement) => {
        
        if(tenancyAgreement != null){
          this.tenancyAgreement = tenancyAgreement;
        }  
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_boilerLandLordPerm').then((landlordPerm) => {
        
        if(landlordPerm != null){
          this.landlordPerm = landlordPerm;
        }  
    });
  }

  savedImagesLoft(){
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_loftUBIL').then((ubil) => {
      if(ubil != null){
        this.ubil = ubil;
      }  
      
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_loftEPOP").then((EPOP) => {
      if(EPOP != null){
        this.EPOPImage = EPOP;
        
      } 
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_loftTenancyAgreement').then((tenancyAgreement) => {
        
        if(tenancyAgreement != null){
          this.tenancyAgreement = tenancyAgreement;
        }  
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_loftLandLordPerm').then((landlordPerm) => {
        
        if(landlordPerm != null){
          this.landlordPerm = landlordPerm;
        }  
    });
  
  }

  savedImagesCavityWall(){
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_cavUBIL').then((ubil) => {
      if(ubil != null){
        this.ubil = ubil;
      }  
      
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_cavTenancyAgreement').then((tenancyAgreement) => {
        
        if(tenancyAgreement != null){
          this.tenancyAgreement = tenancyAgreement;
        }  
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_cavLandLordPerm').then((landlordPerm) => {
        
        if(landlordPerm != null){
          this.landlordPerm = landlordPerm;
        }  
    });
  }

  savedImagesEsh(){
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_eshUBIL').then((ubil) => {
      if(ubil != null){
        this.ubil = ubil;
      }  
      
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +'_eshTenancyAgreement').then((tenancyAgreement) => {
        
        if(tenancyAgreement != null){
          this.tenancyAgreement = tenancyAgreement;
        }  
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + '_eshLandLordPerm').then((landlordPerm) => {
        
        if(landlordPerm != null){
          this.landlordPerm = landlordPerm;
        }  
    });
  }

  savedImagesGen(){

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
    EPOPImage: this.EPOPImage,
    engSign: this.engSign
   };

     this.rest.fileUploadMainForm(imgObj);

  }

  savedObject(){

    this.mainFormData = this.sharedObject.getSharedMainForm();
    this.boilerData = this.sharedObject.getSharedBoilerObject();
    this.cavityWallData = this.sharedObject.getSharedCavityWallObject();
    this.loftData = this.sharedObject.getSharedLoftObject();
    this.eshData = this.sharedObject.getSharedEshObject();
    this.eshBoilerData = this.sharedObject.getSharedEshBoilerObject();
    this.poptData = this.sharedObject.getSharedSelectedPOPT();

   
    const submitDataAll = {
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
      dob: this.mainFormData.myDate , 
      newHeatingSystemUsing: this.eshBoilerData.newHeatingSystemUsing != null ? this.eshBoilerData.newHeatingSystemUsing : "",
      newSystemHeatBool: this.eshBoilerData.newSystemHeatBool != null ? this.eshBoilerData.newSystemHeatBool : "",
      eshUnroundedPOPT: this.eshBoilerData.eshUnroundedPOPT != null ? this.eshBoilerData.eshUnroundedPOPT : "",
      eshRoundedPOPT: this.eshBoilerData.eshRoundedPOPT != null ? this.eshBoilerData.eshRoundedPOPT : "" ,
      preExttESHSlimline: this.eshData.eshSlimline != null ? this.eshBoilerData.eshSlimline : "",
      preExtEshFanAsst: this.eshData.eshFanAssisted != null ? this.eshData.eshFanAssisted : "",
      preExtEshHighHeatRet: this.eshData.eshHighHeatRetention != null ? this.eshData.eshHighHeatRetention : "",
      numberOfEshInstalledQlfySL: this.eshData.eshInstalledQualifyingSlimline != null ? this.eshData.eshInstalledQualifyingSlimline : "",
      numberOfEshInstalledNQlfySL:this.eshData.eshInstalledNonQualifyingSlimline != null ? this.eshData.eshInstalledNonQualifyingSlimline : "",
      numberOfEshInstalledQlfyFA: this.eshData.eshInstalledQualifyingFanAsst != null ? this.eshData.eshInstalledQualifyingFanAsst : "",
      numberOfEshInstalledNQlfyFA: this.eshData.estInstalledNonQualifyingFanAsst != null ? this.eshData.estInstalledNonQualifyingFanAsst : "",
      numberOfEshInstalledQlfyHHR: this.eshData.eshInstalledQualHighHeatRet != null ? this.eshData.eshInstalledQualHighHeatRet : "",
      numberOfEshInstalledNQlfyHHR:this.eshData.eshInstalledNonQualHighHeatRet != null ? this.eshData.eshInstalledNonQualHighHeatRet : "",
      qeshRepSL: this.eshData.eshQeshRepairSlimline != null ? this.eshData.eshQeshRepairSlimline : "",
      qeshRepHHR: this.eshData.eshQeshRepairHighHeatRet != null ? this.eshData.eshQeshRepairHighHeatRet : "",
      qeshFA: this.eshData.eshQeshRepairFanAsst != null ? this.eshData.eshQeshRepairFanAsst : "",  
      loftPropSectionMain:  this.loftData.loftPropSectionMain != null ? this.loftData.loftPropSectionMain : "",
      loftRooftype:  this.loftData.loftRooftype != null ? this.loftData.loftRooftype : "",
      loftRoofArea:  this.loftData.loftRoofArea != null ? this.loftData.loftRoofArea : "",
      loftTypeofinstall:  this.loftData.loftTypeofinstall != null ? this.loftData.loftTypeofinstall : "",
      loftTypeInstallValue:  this.loftData.loftTypeInstallValue != null ? this.loftData.loftTypeInstallValue : "",
      loftPropSectionExt1:  this.loftData.loftPropSectionExt1 != null ? this.loftData.loftPropSectionExt1 : "",
      loftRooftypePropExt1:  this.loftData.loftRooftypePropExt1 != null ? this.loftData.loftRooftypePropExt1 : "",
      loftRoofAreaPSExt1:  this.loftData.loftRoofAreaPSExt1 != null ? this.loftData.loftRoofAreaPSExt1 : "",
      loftTypeofinstallPropExt1:  this.loftData.loftTypeofinstallPropExt1 != null ? this.loftData.loftTypeofinstallPropExt1 : "",
      loftTypeOfInstallValuePSExt1:  this.loftData.loftTypeOfInstallValuePSExt1 != null ? this.loftData.loftTypeOfInstallValuePSExt1 : "",
      loftPropExt2:  this.loftData.loftPropExt2 != null ? this.loftData.loftPropExt2 : "",
      loftRooftypePropExt2:  this.loftData.loftRooftypePropExt2 != null ? this.loftData.loftRooftypePropExt2 : "",
      loftRoofAreaPropExt2:  this.loftData.loftRoofAreaPropExt2 != null ? this.loftData.loftRoofAreaPropExt2 : "",
      loftTypeofinstallPropExt2:  this.loftData.loftTypeofinstallPropExt2 != null ? this.loftData.loftTypeofinstallPropExt2 : "",
      loftTypeofinstallValuePropExt2:  this.loftData.loftTypeofinstallValuePropExt2 != null ? this.loftData.loftTypeofinstallValuePropExt2 : "",
      loftPropSecExt3:  this.loftData.loftPropSecExt3 != null ? this.loftData.loftPropSecExt3 : "",
      loftRooftypePropExt3:  this.loftData.loftRooftypePropExt3 != null ? this.loftData.loftRooftypePropExt3 : "",
      loftRoofAreaExt3:  this.loftData.loftRoofAreaExt3 != null ? this.loftData.loftRoofAreaExt3 : "",
      loftTypeOfInstallPropSecExt3:  this.loftData.loftTypeOfInstallPropSecExt3 != null ? this.loftData.loftTypeOfInstallPropSecExt3 : "",
      loftTypeOfInstallValuePropExt3:  this.loftData.loftTypeOfInstallValuePropExt3 != null ? this.loftData.loftTypeOfInstallValuePropExt3 : "",
      loftPropSecExt4:  this.loftData.loftPropSecExt4 != null ? this.loftData.loftPropSecExt4 : "",
      loftRooftypePropExt4:  this.loftData.loftRooftypePropExt4 != null ? this.loftData.loftRooftypePropExt4 : "",
      loftRoofAreaPropExt4:  this.loftData.loftRoofAreaPropExt4 != null ? this.loftData.loftRoofAreaPropExt4 : "",
      loftTypeofinstallPropExt4:  this.loftData.loftTypeofinstallPropExt4 != null ? this.loftData.loftTypeofinstallPropExt4 : "",
      loftTypeofinstallValuePropExt4:  this.loftData.loftTypeofinstallValuePropExt4 != null ? this.loftData.loftTypeofinstallValuePropExt4 : "",
      loftTotalRoofAreaA:  this.loftData.loftTotalRoofAreaA != null ? this.loftData.loftTotalRoofAreaA : "",
      loftTotalRoofAreaB:  this.loftData.loftTotalRoofAreaB != null ? this.loftData.loftTotalRoofAreaB : "",
      loftTotalRoofAreaC:  this.loftData.loftTotalRoofAreaC != null ? this.loftData.loftTotalRoofAreaC : "",
      loftTotalRoofAreaD:  this.loftData.loftTotalRoofAreaD != null ? this.loftData.loftTotalRoofAreaD : "",
      loftTotalRoofAreaE:  this.loftData.loftTotalRoofAreaE != null ? this.loftData.loftTotalRoofAreaE : "",
      loftTotalRoofAreaF:  this.loftData.loftTotalRoofAreaF != null ? this.loftData.loftTotalRoofAreaF : "",
      loftIfRoomInRoofIns:  this.loftData.loftIfRoomInRoofIns != null ? this.loftData.loftIfRoomInRoofIns : "",
      cwiOnly: this.cavityWallData.cwiOnly != null ? this.cavityWallData.cwiOnly : "",
      cwSWIMeasure: this.cavityWallData.cwSWIMeasure != null ? this.cavityWallData.cwSWIMeasure : "",
      cavWallPropSection1: this.cavityWallData.cavWallPropSection1 != null ? this.cavityWallData.cavWallPropSection1 : "",
      cavWallPropSection2: this.cavityWallData.cavWallPropSection2 != null ? this.cavityWallData.cavWallPropSection2 : "",
      cavWallPropSection3: this.cavityWallData.cavWallPropSection3 != null ? this.cavityWallData.cavWallPropSection3 : "",
      cavWallPropSection4: this.cavityWallData.cavWallPropSection4 != null ? this.cavityWallData.cavWallPropSection4 : "",
      cavWallPropSection5: this.cavityWallData.cavWallPropSection5 != null ? this.cavityWallData.cavWallPropSection5 : "",
      cavWallWallConstruction1: this.cavityWallData.cavWallWallConstruction1 != null ? this.cavityWallData.cavWallWallConstruction1 : "",
      cavWallWallConstruction2: this.cavityWallData.cavWallWallConstruction2 != null ? this.cavityWallData.cavWallWallConstruction2 : "",
      cavWallWallConstruction3: this.cavityWallData.cavWallWallConstruction3 != null ? this.cavityWallData.cavWallWallConstruction3 : "",
      cavWallWallConstruction4: this.cavityWallData.cavWallWallConstruction4 != null ? this.cavityWallData.cavWallWallConstruction4 : "",
      cavWallWallConstruction5: this.cavityWallData.cavWallWallConstruction5 != null ? this.cavityWallData.cavWallWallConstruction5 : "",
      cavWallWallArea1: this.cavityWallData.cavWallWallArea1 != null ? this.cavityWallData.cavWallWallArea1 : "",
      cavWallWallArea2: this.cavityWallData.cavWallWallArea2 != null ? this.cavityWallData.cavWallWallArea2 : "",
      cavWallWallArea3: this.cavityWallData.cavWallWallArea3 != null ? this.cavityWallData.cavWallWallArea3 : "",
      cavWallWallArea4: this.cavityWallData.cavWallWallArea4 != null ? this.cavityWallData.cavWallWallArea4 : "",
      cavWallWallArea5: this.cavityWallData.cavWallWallArea5 != null ? this.cavityWallData.cavWallWallArea5 : "",
      m2InsulationInstalledCWI1: this.cavityWallData.m2InsulationInstalledCWI1 != null ? this.cavityWallData.m2InsulationInstalledCWI1 : "",
      m2InsulationInstalledCWI2: this.cavityWallData.m2InsulationInstalledCWI2 != null ? this.cavityWallData.m2InsulationInstalledCWI2 : "",
      m2InsulationInstalledCWI3: this.cavityWallData.m2InsulationInstalledCWI3 != null ? this.cavityWallData.m2InsulationInstalledCWI3 : "",
      m2InsulationInstalledCWI4: this.cavityWallData.m2InsulationInstalledCWI4 != null ? this.cavityWallData.m2InsulationInstalledCWI4 : "",
      m2InsulationInstalledCWI5: this.cavityWallData.m2InsulationInstalledCWI5 != null ? this.cavityWallData.m2InsulationInstalledCWI5 : "",
      m2InsulationInstalledSWI1: this.cavityWallData.m2InsulationInstalledSWI1 != null ? this.cavityWallData.m2InsulationInstalledSWI1 : "",
      m2InsulationInstalledSWI2: this.cavityWallData.m2InsulationInstalledSWI2 != null ? this.cavityWallData.m2InsulationInstalledSWI2 : "",
      m2InsulationInstalledSWI3: this.cavityWallData.m2InsulationInstalledSWI3 != null ? this.cavityWallData.m2InsulationInstalledSWI3 : "",
      m2InsulationInstalledSWI4: this.cavityWallData.m2InsulationInstalledSWI4 != null ? this.cavityWallData.m2InsulationInstalledSWI4 : "",
      m2InsulationInstalledSWI5: this.cavityWallData.m2InsulationInstalledSWI5 != null ? this.cavityWallData.m2InsulationInstalledSWI5 : "",
      cwtotalWallAreasA: this.cavityWallData.cwtotalWallAreasA != null ? this.cavityWallData.cwtotalWallAreasA : "",
      cwtotalWallAreasB: this.cavityWallData.cwtotalWallAreasB != null ? this.cavityWallData.cwtotalWallAreasB : "",
      cwtotalWallAreasC: this.cavityWallData.cwtotalWallAreasC != null ? this.cavityWallData.cwtotalWallAreasC : "",
      cwtotalWallAreasD: this.cavityWallData.cwtotalWallAreasD != null ? this.cavityWallData.cwtotalWallAreasD : "",
      cwUnroundedCWIPOPT: this.cavityWallData.cwUnroundedCWIPOPT != null ? this.cavityWallData.cwUnroundedCWIPOPT : "",
      cwUnroundedSWIPOPT: this.cavityWallData.cwUnroundedSWIPOPT != null ? this.cavityWallData.cwUnroundedSWIPOPT : "",
      cwRoundedCWIPOPT: this.cavityWallData.cwRoundedCWIPOPT != null ? this.cavityWallData.cwRoundedCWIPOPT : "",
      cwRoundedSWIPOPT: this.cavityWallData.cwRoundedSWIPOPT != null ? this.cavityWallData.cwRoundedSWIPOPT : "",
      cwRoundedSWIPOPT2: this.cavityWallData.cwRoundedSWIPOPT2 != null ? this.cavityWallData.cwRoundedSWIPOPT2 : "",
      cwApproxYearAgeReason: this.cavityWallData.cwApproxYearAgeReason != null ? this.cavityWallData.cwApproxYearAgeReason : "",
      insulateCavParWalls: this.cavityWallData.insulateCavParWalls != null ? this.cavityWallData.insulateCavParWalls : "",
      cwCavParUnroundedPWIPOPT: this.cavityWallData.cwCavParUnroundedPWIPOPT != null ? this.cavityWallData.cwCavParUnroundedPWIPOPT : "",
      cwCavParRoundedPWIPOPT: this.cavityWallData.cwCavParRoundedPWIPOPT != null ? this.cavityWallData.cwCavParRoundedPWIPOPT : "",
      mainWallConstType: this.boilerData.mainWallConstType != null ? this.boilerData.mainWallConstType : "",
      preExistHeatControls: this.boilerData.preExistHeatControls != null ? this.boilerData.preExistHeatControls : "",
      boilerRecordFaults: this.boilerData.boilerRecordFaults != null ? this.boilerData.boilerRecordFaults : "",
      heatControlsCurrent: this.boilerData.heatControlsCurrent != null ? this.boilerData.heatControlsCurrent : "",
      numberNormalRadiators: this.boilerData.numberNormalRadiators != null ? this.boilerData.numberNormalRadiators : "",
      numberTowelRadiators: this.boilerData.numberTowelRadiators != null ? this.boilerData.numberTowelRadiators : "",
      heatMeasureCurrent: this.boilerData.heatMeasureCurrent != null ? this.boilerData.heatMeasureCurrent : "",
      accompanyingInstMeasure: this.boilerData.accompanyingInstMeasure != null ? this.boilerData.accompanyingInstMeasure : "",
      numberTRVs: this.boilerData.numberTRVs != null ? this.boilerData.numberTRVs : "",
      eshSlimline: this.boilerData.eshSlimline != null ? this.boilerData.eshSlimline : "",
      eshFanAssisted: this.boilerData.eshFanAssisted != null ? this.boilerData.eshFanAssisted : "",
      eshHighHeatRetention: this.boilerData.eshHighHeatRetention != null ? this.boilerData.eshHighHeatRetention : "",
      eshInstalledQualifyingSlimline: this.boilerData.eshInstalledQualifyingSlimline != null ? this.boilerData.eshInstalledQualifyingSlimline : "",
      eshInstalledBrokenFanAsst: this.boilerData.eshInstalledBrokenFanAsst != null ? this.boilerData.eshInstalledBrokenFanAsst : null,
      eshInstalledUpgradeFanAsst: this.boilerData.eshInstalledUpgradeFanAsst != null ? this.boilerData.eshInstalledUpgradeFanAsst : "",
      eshInstalledBrokenHighHeatRet: this.boilerData.eshInstalledBrokenHighHeatRet != null ? this.boilerData.eshInstalledBrokenHighHeatRet : "",
      eshInstalledUpgradeHighHeatRet: this.boilerData.eshInstalledUpgradeHighHeatRet != null ? this.boilerData.eshInstalledUpgradeHighHeatRet : "",
      eshInstalledNonQualifyingSlimline: this.boilerData.eshInstalledNonQualifyingSlimline != null ? this.boilerData.eshInstalledNonQualifyingSlimline : "",
      estInstalledNonQualifyingFanAsst: this.boilerData.estInstalledNonQualifyingFanAsst != null ? this.boilerData.estInstalledNonQualifyingFanAsst : "",
      eshInstalledNonQualHighHeatRet: this.boilerData.eshInstalledNonQualHighHeatRet != null ? this.boilerData.eshInstalledNonQualHighHeatRet : "",
      eshQeshRepairSlimline: this.boilerData.eshQeshRepairSlimline != null ? this.boilerData.eshQeshRepairSlimline : "",
      eshQeshRepairFanAsst: this.boilerData.eshQeshRepairFanAsst != null ? this.boilerData.eshQeshRepairFanAsst : "",
      eshQeshRepairHighHeatRet: this.boilerData.eshQeshRepairHighHeatRet != null ? this.boilerData.eshQeshRepairHighHeatRet : "",
      boierRepairNoPreExtHeat: this.boilerData.boierRepairNoPreExtHeat != null ? this.boilerData.boierRepairNoPreExtHeat : "",
      boierReplaceNoPreExtHeat: this.boilerData.boierReplaceNoPreExtHeat != null ? this.boilerData.boierReplaceNoPreExtHeat : "",
      boierRepairNoPreExtHeatNonQlfy: this.boilerData.boierRepairNoPreExtHeatNonQlfy != null ? this.boilerData.boierRepairNoPreExtHeatNonQlfy : "",
      boierReplaceNoPreExtHeatNonQlfy: this.boilerData.boierReplaceNoPreExtHeatNonQlfy != null ? this.boilerData.boierReplaceNoPreExtHeatNonQlfy : "",
      boilerHeatingControls: this.boilerData.boilerHeatingControls != null ? this.eshBoilerData.newHeatingSystemUsing : "",
      cwiInsulationMeasure: this.poptData.cwiInsulationMeasure != null ? this.poptData.cwiInsulationMeasure : null,
      cwInsulationAnnex: this.poptData.cwInsulationAnnex != null ? this.poptData.cwInsulationAnnex : null,
      loftInsulationMeasure: this.poptData.loftInsulationMeasure != null ? this.poptData.loftInsulationMeasure : null,
      loftInsulationAnnex: this.poptData.loftInsulationAnnex != null ? this.poptData.loftInsulationAnnex : null,
      boilerMeasure: this.poptData.boilerMeasure != null ? this.poptData.boilerMeasure : null,
      boilerAnnex: this.poptData.boilerAnnex != null ? this.poptData.boilerAnnex : null,
      heatingControlsItem: this.poptData.heatingControlsItem != null ? this.poptData.heatingControlsItem : null,
      eshHHR: this.poptData.eshHHR != null ? this.poptData.eshHHR : null,
      eshHHRAnnex: this.poptData.eshHHRAnnex != null ? this.poptData.eshHHRAnnex : null,
      eshFan: this.poptData.eshFan != null ? this.poptData.eshFan : null,
      eshFanAnnex: this.poptData.eshFanAnnex != null ? this.poptData.eshFanAnnex : null,
      ftchAnnex: this.poptData.ftchAnnex != null ? this.poptData.ftchAnnex : null,
      extInsAnnex: this.poptData.extInsAnnex != null ? this.poptData.extInsAnnex : null,
      internalInstAnnex: this.poptData.internalInstAnnex != null ? this.poptData.internalInstAnnex : null,
      roomInRoofInst: this.poptData.roomInRoofInst != null ? this.poptData.roomInRoofInst : null,
      roomInRoofInstAnnex: this.poptData.roomInRoofInstAnnex != null ? this.poptData.roomInRoofInstAnnex : null,
      flatRoofInstAnnex: this.poptData.flatRoofInstAnnex != null ? this.poptData.flatRoofInstAnnex : null,
      undFloorInstAnnex: this.poptData.undFloorInstAnnex != null ? this.poptData.undFloorInstAnnex : null,
      PartyCavWallInstAnnex: this.poptData.PartyCavWallInstAnnex != null ? this.poptData.PartyCavWallInstAnnex : null,
      draughtProofingAnnex: this.poptData.draughtProofingAnnex != null ? this.poptData.draughtProofingAnnex : null,
      otherAnnex: this.poptData.otherAnnex != null ? this.poptData.otherAnnex : null,
      other2Annex: this.poptData.other2Annex != null ? this.poptData.other2Annex : null, 
      postHeatingFuel: this.poptData.postHeatingFuel != null ? this.poptData.postHeatingFuel : null
    };

    

    if(this.sharedObject.getSharedSelectedLeadTag() == "boilers"){
      this.savedImagesBoiler();
      this.sharedObject.setSharedSelectedLeadTag("boilers");
      this.sharedObject.setSharedSubmitObject(submitDataAll);

    } else if(this.sharedObject.getSharedSelectedLeadTag() == "cavities"){
      this.savedImagesCavityWall();
      this.sharedObject.setSharedSelectedLeadTag("cavities");
      this.sharedObject.setSharedSubmitObject(submitDataAll);

    } else if(this.sharedObject.getSharedSelectedLeadTag() == "lofts"){
      this.savedImagesLoft();
      this.sharedObject.setSharedSelectedLeadTag("lofts");
      this.sharedObject.setSharedSubmitObject(submitDataAll);

    } else if(this.sharedObject.getSharedSolidWallObject()) {
      this.solidWallData = this.sharedObject.getSharedSolidWallObject();

    } else if(this.sharedObject.getSharedSelectedLeadTag() == "esh") {
     
      this.savedImagesEsh();
      this.sharedObject.setSharedSelectedLeadTag("esh");
      this.sharedObject.setSharedSubmitObject(submitDataAll);
    }

    
    console.log("This submit object => " + JSON.stringify(submitDataAll));
    this.savedImagesGen();
    this.presentToastSave();

    // Tracking ALl Keys and value for verification to insert to DB
    // this.storage.forEach( (value, key, index) => {
    //    console.log("This is the value", value);
    //    console.log("from the key", key);
    //    console.log("Index is", index);
    //  });

  }


  submitObject(){
    this.savedImagesGen();
    const submitData = this.sharedObject.getSharedSubmitObject();
    this.rest.updateLeadData(this.lead_slug,submitData,
      submitData.notes,
      submitData.postCode,
      submitData.addressInstall,
      submitData.name_of_customer).then((result) => {
            console.log(result);
          this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_isSubmitted", "Yes");
          this.saveImageObject();
          this.navCtrl.setRoot(DashboardPage, {uploading : 'Yes', campaignName: this.sharedObject.getSharedCampaignMeasure()});

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
      this.presentToast("2nd Level Floor Plan Saved Successfully");
      this.toggleFloorPlan2();
      this.toggleFloorPlan3();
    } else if (tag == 'floorPlan3') {
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_FloorPlan3", this.signaturePadFloorPlan3.toDataURL());
      this.presentToast("3rd Level Floor Plan Saved Successfully");
      this.toggleFloorPlan3();
      this.toggleDeclaration();
     
    } else if (tag == 'declaration') {
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_declaration", this.signaturePadDeclaration.toDataURL());
      this.presentToast("Declaration");
      this.toggleDeclaration();
     
    } else if (tag == 'engSign') {
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_engSign", this.signaturePadEngSign.toDataURL());
      this.toggleSignature();
      this.presentToast("Surveyor Signature");
      
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

  toggleSignature(){
    this.signatureStatus = !this.signatureStatus;
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

  presentToastSave(){
    let toast = this.toastCtrl.create({
      message: 'Saved Lead Successfully!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  

}


