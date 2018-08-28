import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';

/**
 * Generated class for the AccordionCavitySolidWallComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-cavity-solid-wall',
  templateUrl: 'accordion-cavity-solid-wall.html'
})
export class AccordionCavitySolidWallComponent {
  accordionExpanded = false;

  @ViewChild("cavitysolidwallForms") cavitysolidwallContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {}

  ngOnInit(){
    console.log(this.cavitysolidwallContent.nativeElement);
    this.renderer.setElementStyle(this.cavitysolidwallContent.nativeElement, "webkitTransition", "max-height 3000ms, padding 500ms");
  }

  // Toggle Form For Cavity Solid Wall
  toggleAccordionCavitySolidWall() {
      if(this.accordionExpanded){
        this.renderer.setElementStyle(this.cavitysolidwallContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.cavitysolidwallContent.nativeElement, "padding", "0px 16px");
      } else {
        this.renderer.setElementStyle(this.cavitysolidwallContent.nativeElement, "max-height", "3000px");
        this.renderer.setElementStyle(this.cavitysolidwallContent.nativeElement, "padding", "13px 16px");
      }

      this.accordionExpanded = !this.accordionExpanded;
      this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }
}
