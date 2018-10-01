import { Component, ViewChild, Renderer, Input } from '@angular/core';

import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the AccordionEshBoilerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-esh-boiler',
  templateUrl: 'accordion-esh-boiler.html'
})
export class AccordionEshBoilerComponent {
  accordionExpanded = false;
  newHeatingSystemUsing: any;
  newSystemHeatBool: any;
  eshUnroundedPOPT: any;
  eshRoundedPOPT: any;

  eshData: any;
  @ViewChild("eshboilerForms") eshboilerFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";
  constructor(public renderer: Renderer,
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider,
              public storage: Storage) {

                
              }

  ionViewDidLoad(){
    console.log(this.eshboilerFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshboilerFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // if(this.sharedObject.getSharedSelectedLeadObject()){
    //   let data = this.sharedObject.getSharedSelectedLeadObject();
    //   data = JSON.parse(data["additional_fields"]);
    //   this.newHeatingSystemUsing =  data.newHeatingSystemUsing;
    //   this.newSystemHeatBool = data.newSystemHeatBool;
    //   this.eshUnroundedPOPT = data.eshUnroundedPOPT;
    //   this.eshRoundedPOPT = data.eshRoundedPOPT;
    // }

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_EshFormData").then((formData) => {
      if(formData != null){
        let data = formData;
        this.newHeatingSystemUsing =  data.newHeatingSystemUsing;
        this.newSystemHeatBool = data.newSystemHeatBool;
        this.eshUnroundedPOPT = data.eshUnroundedPOPT;
        this.eshRoundedPOPT = data.eshRoundedPOPT;
        this.sharedObject.setSharedEshBoilerObject(formData);
      }
    });
  }

  // Toggle Form for ESH - Boiler
  toggleAccordionESHBoiler() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.eshboilerFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.eshboilerFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.eshboilerFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.eshboilerFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

    
    

  }

  saveEshBoiler(){

    const dataFromEshForm = {
      newHeatingSystemUsing: this.newHeatingSystemUsing,
      newSystemHeatBool: this.newSystemHeatBool,
      eshUnroundedPOPT: this.eshUnroundedPOPT,
      eshRoundedPOPT: this.eshRoundedPOPT
    };


    this.sharedObject.setSharedEshBoilerObject(dataFromEshForm);
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_EshFormData", dataFromEshForm);
    this.presentEshBoiler();
    this.toggleAccordionESHBoiler();
  }

  presentEshBoiler(){
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
