import { Component,  ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionLoftComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-loft',
  templateUrl: 'accordion-loft.html'
})
export class AccordionLoftComponent implements OnInit{
  accordionExpanded = false;
  @ViewChild("loftForms") loftFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {}

  ngOnInit(){
    console.log(this.loftFormContent.nativeElement);
    this.renderer.setElementStyle(this.loftFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  // Toggle Form for Loft
  toggleAccordionLoft() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

}
