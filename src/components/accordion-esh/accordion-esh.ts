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
      let data = formData;
      this.eshSlimline = data.eshSlimline;
      this.eshFanAssisted = data.eshFanAssisted;
      this.eshHighHeatRetention = data.eshHighHeatRetention;
      this.eshInstalledQualifyingSlimline = data.eshInstalledQualifyingSlimline;
      this.eshInstalledNonQualifyingSlimline = data.eshInstalledNonQualifyingSlimline;
      this.eshInstalledQualifyingFanAsst = data.eshInstalledQualifyingFanAsst;
      this.estInstalledNonQualifyingFanAsst = data.estInstalledNonQualifyingFanAsst;
      this.eshInstalledQualHighHeatRet = data.eshInstalledQualHighHeatRet;
      this.eshInstalledNonQualHighHeatRet = data.eshInstalledNonQualHighHeatRet;
      this.eshQeshRepairSlimline = data.eshQeshRepairSlimline;
      this.eshQeshRepairFanAsst = data.eshQeshRepairFanAsst;
      this.eshQeshRepairHighHeatRet = data.eshQeshRepairHighHeatRet;
      this.sharedObject.setSharedEshObject(formData);
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
      eshSlimline: this.eshSlimline,
      eshFanAssisted:this.eshFanAssisted,
      eshHighHeatRetention: this.eshHighHeatRetention,
      eshInstalledQualifyingSlimline: this.eshInstalledQualifyingSlimline,
      eshInstalledNonQualifyingSlimline: this.eshInstalledNonQualifyingSlimline,
      eshInstalledQualifyingFanAsst: this.eshInstalledQualifyingFanAsst,
      estInstalledNonQualifyingFanAsst: this.estInstalledNonQualifyingFanAsst,
      eshInstalledQualHighHeatRet: this.eshInstalledQualHighHeatRet,
      eshInstalledNonQualHighHeatRet: this.eshInstalledNonQualHighHeatRet,
      eshQeshRepairSlimline: this.eshQeshRepairSlimline,
      eshQeshRepairFanAsst: this.eshQeshRepairFanAsst,
      eshQeshRepairHighHeatRet: this.eshQeshRepairHighHeatRet
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
