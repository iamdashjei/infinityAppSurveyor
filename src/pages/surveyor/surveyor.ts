import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { RestProvider} from '../../providers/rest/rest';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DashboardPage } from '../dashboard/dashboard';
import { NotificationPage } from '../notification/notification';
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
  @ViewChild(SignaturePad) public signaturePad : SignaturePad;
  @ViewChild(SignaturePad) public signaturePad2 : SignaturePad;
  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 100,
    'canvasHeight': 100
  }

  public signaturePadOptions2 : Object = {
    'minWidth2': 2,
    'canvasWidth2': 300,
    'canvasHeight2': 300
  }

  accordionExpanded = false;
  accordionExpandedCustSign = false;
  @ViewChild("signatureForm") signatureForms: any;
  @ViewChild("custsignatureForm") custsignatureForms: any;
  icon: string = "arrow-forward";
  icon2: string = "arrow-forward";

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

  kitchen: any;
  dinningroom: any;
  livingroom: any;
  hallway: any;
  landingupstair: any;
  frontelevation: any;
  leftelevation: any;
  rearelevation: any;
  sideelevation: any;
  utility: any;
  heatingsource: any;
  airingcupboard: any;
  conservatory: any;
  other: any;
  garage: any;
  wallthickness: any;
  fusedspur: any;
  roomstat: any;
  programmer: any;
  bathroom: any;
  kitchenImg: any;
  stairs: any;

  ubil: any;
  tenancyAgreement: any;
  landlordPerm: any;
  custSign: any;
  floorPlan: any;

  img: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public renderer: Renderer,
              public modalController: ModalController,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider,
              public rest: RestProvider)
     {
    this.signatureImage = navParams.get('signatureImage');
    this.campaignMeasureView = navParams.get('campaignValue');
    this.lead_slug = navParams.get('lead_slug');
    this.leadCreatedDate = navParams.get('leadCreatedDate');
    this.leadCustName = navParams.get('leadCustName');

    sharedObject.setSharedSelectedLeadObject(navParams.get('leadItem'));
    sharedObject.setSharedSlugSelectedCM(this.lead_slug);
    sharedObject.setSharedCustName(this.leadCustName);

  }

  ionViewDidLoad(){
      this.renderer.setElementStyle(this.signatureForms.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
      this.renderer.setElementStyle(this.custsignatureForms.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
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
  toggleCustSignatures() {
    if(this.accordionExpandedCustSign){
      this.renderer.setElementStyle(this.custsignatureForms.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.custsignatureForms.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.custsignatureForms.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.custsignatureForms.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpandedCustSign = !this.accordionExpandedCustSign;
    this.icon2 = this.icon2 == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  // For Signature Drawpad
  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(NotificationPage);
    modal.present();
    }, 300);
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

  savedImagesEsh(){
    this.storage.get('kitchen').then((kitchen) => {
        this.kitchen = kitchen;
    });

    this.storage.get('dinningroom').then((dinningroom) => {
        this.dinningroom = dinningroom;
    });

    this.storage.get('livingroom').then((livingroom) => {
        this.livingroom = livingroom;
    });

    this.storage.get('hallway').then((hallway) => {
        this.hallway = hallway;
    });

    this.storage.get('landingupstair').then((landingupstair) => {
        this.landingupstair = landingupstair;
    });

    this.storage.get('frontelevation').then((frontelevation) => {
        this.frontelevation = frontelevation;
    });

    this.storage.get('leftelevation').then((leftelevation) => {
        this.leftelevation = leftelevation;
    });

    this.storage.get('rearelevation').then((rearelevation) => {
        this.rearelevation = rearelevation;
    });

    this.storage.get('sideelevation').then((sideelevation) => {
        this.sideelevation = sideelevation;
    });

    this.storage.get('utility').then((utility) => {
        this.utility = utility;
    });

    this.storage.get('heatingsource').then((heatingsource) => {
        this.heatingsource = heatingsource;
    });

    this.storage.get('airingcupboard').then((airingcupboard) => {
        this.airingcupboard = airingcupboard;
    });

    this.storage.get('conservatory').then((conservatory) => {
        this.conservatory = conservatory;
    });

    this.storage.get('other').then((other) => {
        this.other = other;
    });

    this.storage.get('garage').then((garage) => {
        this.garage = garage;
    });

    this.storage.get('wallthickness').then((wallthickness) => {
        this.wallthickness = wallthickness;
    });

    this.storage.get('fusedspur').then((fusedspur) => {
        this.fusedspur = fusedspur;
    });

    this.storage.get('roomstat').then((roomstat) => {
        this.roomstat = roomstat;
    });

    this.storage.get('programmer').then((programmer) => {
        this.programmer = programmer;
    });

    this.storage.get('bathroom').then((bathroom) => {
        this.bathroom = bathroom;
    });


    this.storage.get('stairs').then((stairs) => {
        this.stairs = stairs;
    });

    this.storage.get('eshUBIL').then((ubil) => {
        this.ubil = ubil;
    });

    this.storage.get('eshTenancyAgreement').then((tenancyAgreement) => {
        this.tenancyAgreement = tenancyAgreement;
    });

    this.storage.get('eshLandLordPerm').then((landlordPerm) => {
        this.landlordPerm = landlordPerm;
    });

    this.storage.get('CustSign').then((custSign) => {
        this.custSign = custSign;
    });

    this.storage.get('FloorPlan').then((floorPlan) => {
        this.floorPlan = floorPlan;
    });

  }

  saveImageObject(){
    const imgObj = {
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
    floorPlan: this.floorPlan
   };

     this.rest.fileUploadMainForm('Image', imgObj);
  }

  savedObject(){
    this.eshData = this.sharedObject.getSharedEshObject();
    this.mainFormData = this.sharedObject.getSharedMainForm();
    this.eshBoilerData = this.sharedObject.getSharedEshBoilerObject();


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
          alert("Successfully Submitted!");
    }, (err) => {
            console.log(err);

      });
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this
      .signaturePad
      .set('minWidth', 1);
      console.log(canvas.offsetWidth);
    this
      .signaturePad
      .set('canvasWidth', canvas.offsetWidth);

    this
      .signaturePad
      .set('canvasHeight', canvas.offsetHeight);
  }

  canvasResize2() {
    let canvas = document.querySelector('canvas');
    this
      .signaturePad2
      .set('minWidth2', 2);
      console.log(canvas.offsetWidth);
    this
      .signaturePad2
      .set('canvasWidth2', canvas.offsetWidth);

    this
      .signaturePad2
      .set('canvasHeight2', canvas.offsetHeight);
  }


   ngAfterViewInit() {
     console.log("Reset Model Screen");
      this.signaturePad.clear();
      this.signaturePad2.clear();
      this.canvasResize();
      this.canvasResize2();
   }

   drawComplete() {
     this.signatureImage = 'data:image/jpeg;base64,' + this.signaturePad.toDataURL();
     this.storage.set("FloorPlan", this.signatureImage);
     alert("Floor Plan Saved Successfully." + this.signaturePad.toDataURL());
  }

  drawClear() {
    this
      .signaturePad
      .clear();
  }

  drawComplete2() {
    this.custSignatureImage = 'data:image/jpeg;base64,' + this.signaturePad2.toDataURL();
    this.storage.set("CustSign", this.custSignatureImage);
    alert("Signature Complete." + this.signaturePad2.toDataURL());
 }

 drawClear2() {
   this
     .signaturePad2
     .clear();
 }


}
