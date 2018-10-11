import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AccordionEshComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-esh',
  templateUrl: 'accordion-esh.html'
})
export class AccordionEshComponent {
  accordionExpanded = false;

  @ViewChild("eshForms") eshFormContent: any;
  @Input('title') title: string;

  eshSlimline: any;
  eshFanAssisted: any;
  eshHighHeatRetention: any;
  eshInstalledQualifyingSlimline: any;
  eshInstalledNonQualifyingSlimline: any;
  eshInstalledQualifyingFanAsst: any;
  estInstalledNonQualifyingFanAsst: any;
  eshInstalledQualHighHeatRet: any;
  eshInstalledNonQualHighHeatRet: any;
  eshQeshRepairSlimline: any;
  eshQeshRepairFanAsst: any;
  eshQeshRepairHighHeatRet: any;

  eshData: any;


  icon: string = "arrow-forward";
  constructor(public renderer: Renderer,
              public storage: Storage,
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider) {


              }

  ionViewDidLoad(){

    console.log(this.eshFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_EshMainFormData").then((formData) => {
      if(formData != null){
      let data = formData;
      this.eshSlimline = data.eshSlimline != null ? data.eshSlimline : null;
      this.eshFanAssisted = data.eshFanAssisted != null ? data.eshFanAssisted : null;
      this.eshHighHeatRetention = data.eshHighHeatRetention != null ? data.eshHighHeatRetention : null;
      this.eshInstalledQualifyingSlimline = data.eshInstalledQualifyingSlimline != null ? data.eshInstalledQualifyingSlimline : null;
      this.eshInstalledNonQualifyingSlimline = data.eshInstalledNonQualifyingSlimline != null ? data.eshInstalledNonQualifyingSlimline : null;
      this.eshInstalledQualifyingFanAsst = data.eshInstalledQualifyingFanAsst != null ? data.eshInstalledQualifyingFanAsst : null;
      this.estInstalledNonQualifyingFanAsst = data.estInstalledNonQualifyingFanAsst != null ? data.estInstalledNonQualifyingFanAsst : null;
      this.eshInstalledQualHighHeatRet = data.eshInstalledQualHighHeatRet != null ? data.eshInstalledQualHighHeatRet : null;
      this.eshInstalledNonQualHighHeatRet = data.eshInstalledNonQualHighHeatRet != null ? data.eshInstalledNonQualHighHeatRet : null;
      this.eshQeshRepairSlimline = data.eshQeshRepairSlimline != null ? data.eshQeshRepairSlimline : null;
      this.eshQeshRepairFanAsst = data.eshQeshRepairFanAsst != null ? data.eshQeshRepairFanAsst : null;
      this.eshQeshRepairHighHeatRet = data.eshQeshRepairHighHeatRet != null ? data.eshQeshRepairHighHeatRet : null;
      this.sharedObject.setSharedEshObject(formData);
      } else {
        let data = {
          eshSlimline: null,
          eshFanAssisted: null,
          eshHighHeatRetention: null, 
          eshInstalledQualifyingSlimline: null,
          eshInstalledNonQualifyingSlimline: null,
          eshInstalledQualifyingFanAsst: null,
          estInstalledNonQualifyingFanAsst: null,
          eshInstalledQualHighHeatRet: null,
          eshInstalledNonQualHighHeatRet: null,
          eshQeshRepairSlimline: null,
          eshQeshRepairFanAsst: null,
          eshQeshRepairHighHeatRet: null
        }; 
        this.sharedObject.setSharedEshObject(data);
      }
    });
  }

  // Toggle Form For ESH
  toggleAccordionESH() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";


  }



  saveEsh(){
    const data = {
      eshSlimline: this.eshSlimline != null ? this.eshSlimline : null,
      eshFanAssisted:this.eshFanAssisted != null ? this.eshFanAssisted : null,
      eshHighHeatRetention: this.eshHighHeatRetention != null ? this.eshHighHeatRetention : null, 
      eshInstalledQualifyingSlimline: this.eshInstalledQualifyingSlimline != null ? this.eshInstalledQualifyingSlimline : null,
      eshInstalledNonQualifyingSlimline: this.eshInstalledNonQualifyingSlimline != null ? this.eshInstalledNonQualifyingSlimline : null,
      eshInstalledQualifyingFanAsst: this.eshInstalledQualifyingFanAsst != null ? this.eshInstalledQualifyingFanAsst : null,
      estInstalledNonQualifyingFanAsst: this.estInstalledNonQualifyingFanAsst != null ? this.estInstalledNonQualifyingFanAsst : null,
      eshInstalledQualHighHeatRet: this.eshInstalledQualHighHeatRet != null ? this.eshInstalledQualHighHeatRet : null,
      eshInstalledNonQualHighHeatRet: this.eshInstalledNonQualHighHeatRet != null ? this.eshInstalledNonQualHighHeatRet : null,
      eshQeshRepairSlimline: this.eshQeshRepairSlimline != null ? this.eshQeshRepairSlimline : null,
      eshQeshRepairFanAsst: this.eshQeshRepairFanAsst != null ? this.eshQeshRepairFanAsst : null,
      eshQeshRepairHighHeatRet: this.eshQeshRepairHighHeatRet != null ? this.eshQeshRepairHighHeatRet : null
    };
    this.sharedObject.setSharedEshObject(data);
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_EshMainFormData", data);
    this.presentToast();
    this.toggleAccordionESH();
  }

  presentToast(){
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
