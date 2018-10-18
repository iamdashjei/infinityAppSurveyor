import { Component, ViewChild, Renderer, Input } from '@angular/core';

import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AccordionBoilerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-boiler',
  templateUrl: 'accordion-boiler.html'
})
export class AccordionBoilerComponent {
  accordionExpanded = false;

  @ViewChild("boilerForms") boilerFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";
  mainWallConstType: any;
  preExistHeatControls: any;
  boilerRecordFaults: any;
  heatControlsCurrent: any;
  numberNormalRadiators: any;
  numberTowelRadiators: any;
  numberTRVs: any;
  boierRepairNoPreExtHeat: any;
  boierReplaceNoPreExtHeat: any;
  boierRepairNoPreExtHeatNonQlfy: any;
  boierReplaceNoPreExtHeatNonQlfy: any;
  boilerHeatingControls: any;
  heatMeasureCurrent: any;
  accompanyingInstMeasure: any;

  eshSlimline: any;
  eshFanAssisted: any;
  eshHighHeatRetention: any;
  eshInstalledQualifyingSlimline: any;
  eshInstalledBrokenFanAsst: any;
  eshInstalledUpgradeFanAsst: any;
  eshInstalledBrokenHighHeatRet: any;
  eshInstalledUpgradeHighHeatRet: any;
  eshInstalledNonQualifyingSlimline: any;
  estInstalledNonQualifyingFanAsst: any;
  eshInstalledNonQualHighHeatRet: any;
  eshQeshRepairSlimline: any;
  eshQeshRepairFanAsst: any;
  eshQeshRepairHighHeatRet: any;

  constructor(private renderer: Renderer,
              private storage: Storage,
              private sharedObject: SharedobjectserviceProvider,
              private toastCtrl: ToastController) { }

  ionViewDidLoad(){
    console.log(this.boilerFormContent.nativeElement);
    this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_boilerForm").then((data) => {
      if(data != null){
      const boilerData = data;
      this.mainWallConstType = boilerData.mainWallConstType ;
      this.preExistHeatControls = boilerData.preExistHeatControls ;
      this.boilerRecordFaults = boilerData.boilerRecordFaults ;
      this.heatControlsCurrent = boilerData.heatControlsCurrent ;
      this.numberNormalRadiators = boilerData.numberNormalRadiators ;
      this.numberTowelRadiators = boilerData.numberTowelRadiators ;
      this.numberTRVs = boilerData.numberTRVs ;
      this.boierRepairNoPreExtHeat = boilerData.boierRepairNoPreExtHeat ;
      this.boierReplaceNoPreExtHeat = boilerData.boierReplaceNoPreExtHeat ;
      this.boierRepairNoPreExtHeatNonQlfy = boilerData.boierRepairNoPreExtHeatNonQlfy ;
      this.boierReplaceNoPreExtHeatNonQlfy = boilerData.boierReplaceNoPreExtHeatNonQlfy ;
      this.boilerHeatingControls  = boilerData.boilerHeatingControls ;
      this.heatMeasureCurrent = boilerData.heatMeasureCurrent;
      this.accompanyingInstMeasure = boilerData.accompanyingInstMeasure;
      this.sharedObject.setSharedBoilerObject(boilerData);
      } else {
        let boilerData = {
          mainWallConstType: this.mainWallConstType != null ? this.mainWallConstType : null,
          preExistHeatControls: this.preExistHeatControls != null ? this.mainWallConstType : null,
          boilerRecordFaults: this.boilerRecordFaults != null ? this.mainWallConstType : null,
          heatControlsCurrent: this.heatControlsCurrent != null ? this.mainWallConstType : null,
          numberNormalRadiators: this.numberNormalRadiators != null ? this.mainWallConstType : null,
          numberTowelRadiators: this.numberTowelRadiators != null ? this.mainWallConstType : null,
          numberTRVs: this.numberTRVs != null ? this.mainWallConstType : null,
          boierRepairNoPreExtHeat: this.boierRepairNoPreExtHeat != null ? this.mainWallConstType : null,
          boierReplaceNoPreExtHeat: this.boierReplaceNoPreExtHeat != null ? this.mainWallConstType : null,
          boierRepairNoPreExtHeatNonQlfy: this.boierRepairNoPreExtHeatNonQlfy != null ? this.mainWallConstType : null,
          boierReplaceNoPreExtHeatNonQlfy: this.boierReplaceNoPreExtHeatNonQlfy != null ? this.mainWallConstType : null,
          boilerHeatingControls: this.boilerHeatingControls != null ? this.mainWallConstType : null,
          heatMeasureCurrent: this.heatMeasureCurrent != null ? this.heatMeasureCurrent : null,
          accompanyingInstMeasure: this.accompanyingInstMeasure != null ? this.accompanyingInstMeasure : null,
          eshSlimline: this.eshSlimline != null ? this.eshSlimline : null,
          eshFanAssisted: this.eshFanAssisted != null ? this.eshFanAssisted : null,
          eshHighHeatRetention: this.eshHighHeatRetention != null ? this.eshHighHeatRetention : null,
          eshInstalledQualifyingSlimline: this.eshInstalledQualifyingSlimline != null ? this.eshInstalledQualifyingSlimline : null,
          eshInstalledBrokenFanAsst: this.eshInstalledBrokenFanAsst != null ? this.eshInstalledBrokenFanAsst : null,
          eshInstalledUpgradeFanAsst: this.eshInstalledUpgradeFanAsst != null ? this.eshInstalledUpgradeFanAsst : null,
          eshInstalledBrokenHighHeatRet: this.eshInstalledBrokenHighHeatRet != null ? this.eshInstalledBrokenHighHeatRet : null,
          eshInstalledUpgradeHighHeatRet: this.eshInstalledUpgradeHighHeatRet != null ? this.eshInstalledUpgradeHighHeatRet : null,
          eshInstalledNonQualifyingSlimline: this.eshInstalledNonQualifyingSlimline != null ? this.eshInstalledNonQualifyingSlimline : null,
          estInstalledNonQualifyingFanAsst: this.estInstalledNonQualifyingFanAsst != null ? this.estInstalledNonQualifyingFanAsst : null,
          eshInstalledNonQualHighHeatRet: this.eshInstalledNonQualHighHeatRet != null ? this.eshInstalledNonQualHighHeatRet : null,
          eshQeshRepairSlimline: this.eshQeshRepairSlimline != null ? this.eshQeshRepairSlimline : null,
          eshQeshRepairFanAsst: this.eshQeshRepairFanAsst != null ? this.eshQeshRepairFanAsst : null,
          eshQeshRepairHighHeatRet: this.eshQeshRepairHighHeatRet != null ? this.eshQeshRepairHighHeatRet : null
        };

        this.sharedObject.setSharedBoilerObject(boilerData);
      }
    });
  }
  // Toggle List For Boiler Form
  toggleAccordionBoiler() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  saveBoiler(){
    const data = { 
      mainWallConstType: this.mainWallConstType != null ? this.mainWallConstType : null,
      preExistHeatControls: this.preExistHeatControls != null ? this.preExistHeatControls : null,
      boilerRecordFaults: this.boilerRecordFaults != null ? this.boilerRecordFaults : null,
      heatControlsCurrent: this.heatControlsCurrent != null ? this.heatControlsCurrent : null,
      numberNormalRadiators: this.numberNormalRadiators != null ? this.numberNormalRadiators : null,
      numberTowelRadiators: this.numberTowelRadiators != null ? this.numberTowelRadiators : null,
      numberTRVs: this.numberTRVs != null ? this.numberTRVs : null,
      boierRepairNoPreExtHeat: this.boierRepairNoPreExtHeat != null ? this.boierRepairNoPreExtHeat : null,
      boierReplaceNoPreExtHeat: this.boierReplaceNoPreExtHeat != null ? this.boierReplaceNoPreExtHeat : null,
      boierRepairNoPreExtHeatNonQlfy: this.boierRepairNoPreExtHeatNonQlfy != null ? this.boierRepairNoPreExtHeatNonQlfy : null,
      boierReplaceNoPreExtHeatNonQlfy: this.boierReplaceNoPreExtHeatNonQlfy != null ? this.boierReplaceNoPreExtHeatNonQlfy : null,
      boilerHeatingControls: this.boilerHeatingControls != null ? this.boilerHeatingControls : null,
      heatMeasureCurrent: this.heatMeasureCurrent != null ? this.heatMeasureCurrent : null,
      accompanyingInstMeasure: this.accompanyingInstMeasure != null ? this.accompanyingInstMeasure : null

    };
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_boilerForm", data);
    this.sharedObject.setSharedBoilerObject(data);
    this.toggleAccordionBoiler();
    this.presentSave();
    
  }

  ifTRVs(value){ 
    if(this.heatControlsCurrent){
      if(value.includes("TRV")){
        return true;
       
      } else{
        return false;
      }
    }
    return false;
  }

  ifInefficientBoiler(value){
    if(this.heatMeasureCurrent){
      if(value.includes("Inefficient/broken")){
        return true;
       
      } else{
        return false;
      }
    }
    return false;
  }

  presentSave(){
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
