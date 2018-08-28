import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

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

  @ViewChild("eshboilerForms") eshboilerFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";
  constructor(public renderer: Renderer) {}

  ngOnInit(){
    console.log(this.eshboilerFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshboilerFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
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

}
