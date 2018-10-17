import { Component, ViewChild, Input, Renderer } from '@angular/core';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PoptAnnexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popt-annex',
  templateUrl: 'popt-annex.html'
})
export class PoptAnnexComponent {
  accordionExpanded = false;
  @ViewChild("poptForms") poptFormContent: any;
  @Input('title') title: string;
  icon: string = "arrow-forward";

  cwiInsulationMeasure: any;
  cwInsulationAnnex: any;
  loftInsulationMeasure: any;
  loftInsulationAnnex: any;
  boilerMeasure: any;
  boilerAnnex: any;
  heatingControlsItem: any;
  eshHHR: any;
  eshHHRAnnex: any;
  eshFan: any;
  eshFanAnnex: any;
  ftchAnnex: any;
  extInsAnnex: any;
  internalInstAnnex: any;
  roomInRoofInst: any;
  roomInRoofInstAnnex: any;
  flatRoofInstAnnex: any;
  undFloorInstAnnex: any;
  PartyCavWallInstAnnex: any;
  draughtProofingAnnex: any;
  otherAnnex: any;
  other2Annex: any;
  postHeatingFuel: any;

  constructor(private renderer: Renderer, 
              private sharedObject: SharedobjectserviceProvider,
              private toastCtrl: ToastController,
              private storage: Storage) {
    console.log('Hello PoptAnnexComponent Component');
  }

  ionViewDidLoad(){
    console.log(this.poptFormContent.nativeElement);
    this.renderer.setElementStyle(this.poptFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_popt").then((data) => {
      if(data != null){
        this.cwiInsulationMeasure = data.cwiInsulationMeasure != null ? data.cwiInsulationMeasure : null;
        this.cwInsulationAnnex = data.cwInsulationAnnex  != null ? data.cwInsulationAnnex : null;
        this.loftInsulationMeasure = data.loftInsulationMeasure  != null ? data.loftInsulationMeasure : null;
        this.loftInsulationAnnex = data.loftInsulationAnnex  != null ? data.loftInsulationAnnex : null;
        this.boilerMeasure = data.boilerMeasure  != null ? data.boilerMeasure : null;
        this.boilerAnnex = data.boilerAnnex  != null ? data.boilerAnnex : null;
        this.heatingControlsItem = data.heatingControlsItem  != null ? data.heatingControlsItem : null;
        this.eshHHR = data.eshHHR  != null ? data.eshHHR : null;
        this.eshHHRAnnex = data.eshHHRAnnex  != null ? data.eshHHRAnnex : null;
        this.eshFan = data.eshFan  != null ? data.eshFan : null;
        this.eshFanAnnex = data.eshFanAnnex  != null ? data.eshFanAnnex : null;
        this.ftchAnnex = data.ftchAnnex  != null ? data.ftchAnnex : null;
        this.extInsAnnex = data.extInsAnnex != null ? data.extInsAnnex : null;
        this.internalInstAnnex = data.internalInstAnnex != null ? data.internalInstAnnex : null;
        this.roomInRoofInst = data.roomInRoofInst != null ? data.roomInRoofInst : null;
        this.roomInRoofInstAnnex = data.roomInRoofInstAnnex != null ? data.roomInRoofInstAnnex : null;
        this.flatRoofInstAnnex = data.flatRoofInstAnnex != null ? data.flatRoofInstAnnex : null;
        this.undFloorInstAnnex = data.undFloorInstAnnex != null ? data.undFloorInstAnnex : null;
        this.PartyCavWallInstAnnex = data.PartyCavWallInstAnnex != null ? data.PartyCavWallInstAnnex : null;
        this.draughtProofingAnnex = data.draughtProofingAnnex != null ? data.draughtProofingAnnex : null;
        this.otherAnnex = data.otherAnnex != null ? data.otherAnnex : null;
        this.other2Annex = data.other2Annex != null ? data.other2Annex : null;
        this.postHeatingFuel = data.postHeatingFuel != null ? data.postHeatingFuel : null;
        this.sharedObject.setSharedSelectedPOPT(data);  
      } else {
        const data = {
          cwiInsulationMeasure: this.cwiInsulationMeasure != null ? this.cwiInsulationMeasure : null,
          cwInsulationAnnex: this.cwInsulationAnnex != null ? this.cwInsulationAnnex : null,
          loftInsulationMeasure: this.loftInsulationMeasure != null ? this.loftInsulationMeasure : null,
          loftInsulationAnnex: this.loftInsulationAnnex != null ? this.loftInsulationAnnex : null,
          boilerMeasure: this.boilerMeasure != null ? this.boilerMeasure : null,
          boilerAnnex: this.boilerAnnex != null ? this.boilerAnnex : null,
          heatingControlsItem: this.heatingControlsItem != null ? this.heatingControlsItem : null,
          eshHHR: this.eshHHR != null ? this.eshHHR : null,
          eshHHRAnnex: this.eshHHRAnnex != null ? this.eshHHRAnnex : null,
          eshFan: this.eshFan != null ? this.eshFan : null,
          eshFanAnnex: this.eshFanAnnex != null ? this.eshFanAnnex : null,
          ftchAnnex: this.ftchAnnex != null ? this.ftchAnnex : null,
          extInsAnnex: this.extInsAnnex != null ? this.extInsAnnex : null,
          internalInstAnnex: this.internalInstAnnex != null ? this.internalInstAnnex : null,
          roomInRoofInst: this.roomInRoofInst != null ? this.roomInRoofInst : null,
          roomInRoofInstAnnex: this.roomInRoofInstAnnex != null ? this.roomInRoofInstAnnex : null,
          flatRoofInstAnnex: this.flatRoofInstAnnex != null ? this.flatRoofInstAnnex : null,
          undFloorInstAnnex: this.undFloorInstAnnex != null ? this.undFloorInstAnnex : null,
          PartyCavWallInstAnnex: this.PartyCavWallInstAnnex != null ? this.PartyCavWallInstAnnex : null,
          draughtProofingAnnex: this.draughtProofingAnnex != null ? this.draughtProofingAnnex : null,
          otherAnnex: this.otherAnnex != null ? this.otherAnnex : null,
          other2Annex: this.other2Annex != null ? this.other2Annex : null, 
          postHeatingFuel: this.postHeatingFuel != null ? this.postHeatingFuel : null
        };
        this.sharedObject.setSharedSelectedPOPT(data);  
      }
    });
  }

  toggleAccordionPOPT(){
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.poptFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.poptFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.poptFormContent.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.poptFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  savePOPT(){
    const data = {
      cwiInsulationMeasure: this.cwiInsulationMeasure != null ? this.cwiInsulationMeasure : null,
      cwInsulationAnnex: this.cwInsulationAnnex != null ? this.cwInsulationAnnex : null,
      loftInsulationMeasure: this.loftInsulationMeasure != null ? this.loftInsulationMeasure : null,
      loftInsulationAnnex: this.loftInsulationAnnex != null ? this.loftInsulationAnnex : null,
      boilerMeasure: this.boilerMeasure != null ? this.boilerMeasure : null,
      boilerAnnex: this.boilerAnnex != null ? this.boilerAnnex : null,
      heatingControlsItem: this.heatingControlsItem != null ? this.heatingControlsItem : null,
      eshHHR: this.eshHHR != null ? this.eshHHR : null,
      eshHHRAnnex: this.eshHHRAnnex != null ? this.eshHHRAnnex : null,
      eshFan: this.eshFan != null ? this.eshFan : null,
      eshFanAnnex: this.eshFanAnnex != null ? this.eshFanAnnex : null,
      ftchAnnex: this.ftchAnnex != null ? this.ftchAnnex : null,
      extInsAnnex: this.extInsAnnex != null ? this.extInsAnnex : null,
      internalInstAnnex: this.internalInstAnnex != null ? this.internalInstAnnex : null,
      roomInRoofInst: this.roomInRoofInst != null ? this.roomInRoofInst : null,
      roomInRoofInstAnnex: this.roomInRoofInstAnnex != null ? this.roomInRoofInstAnnex : null,
      flatRoofInstAnnex: this.flatRoofInstAnnex != null ? this.flatRoofInstAnnex : null,
      undFloorInstAnnex: this.undFloorInstAnnex != null ? this.undFloorInstAnnex : null,
      PartyCavWallInstAnnex: this.PartyCavWallInstAnnex != null ? this.PartyCavWallInstAnnex : null,
      draughtProofingAnnex: this.draughtProofingAnnex != null ? this.draughtProofingAnnex : null,
      otherAnnex: this.otherAnnex != null ? this.otherAnnex : null,
      other2Annex: this.other2Annex != null ? this.other2Annex : null, 
      postHeatingFuel: this.postHeatingFuel != null ? this.postHeatingFuel : null
    };
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_popt", data);
    this.sharedObject.setSharedSelectedPOPT(data);  
    this.presentToastSave();
  }

  presentToastSave(){
    let toast = this.toastCtrl.create({
      message: 'Saved Successfully!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
