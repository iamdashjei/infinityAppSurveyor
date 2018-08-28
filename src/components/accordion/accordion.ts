import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent  implements OnInit{
  accordionExpanded = false;

  @ViewChild("genForms") genFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer, private storage: Storage) {}

  ngOnInit(){
    console.log(this.genFormContent.nativeElement);
    this.renderer.setElementStyle(this.genFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
  }

  // Toggle Accordion setting max height and padding when toggled
  toggleAccordion() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.genFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.genFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.genFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.genFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  // Set Key For Specific Data
  public setKey(settingName, value){
    console.log("Saving Key For: " + settingName);
    console.log("Saving Value:" + value);
    return this.storage.set(settingName, value);
  }

  // Get Key From Saved Key
  public async getKey(settingName){
    console.log("Getting Key For: " + settingName);
    return await this.storage.get(settingName);
  }

  prompt() {
    console.log("Bedroom Dropdown");
  }


}
