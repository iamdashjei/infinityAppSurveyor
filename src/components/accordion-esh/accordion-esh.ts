import { Component, ViewChild, Renderer, Input} from '@angular/core';

import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

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



  icon: string = "arrow-forward";
  constructor(public renderer: Renderer, public sharedObject: SharedobjectserviceProvider) {}

  ionViewDidLoad(){
    console.log(this.eshFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
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

    alert("Saved Successfully!");
  }

}
