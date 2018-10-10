import { Component,  ViewChild, Renderer, Input } from '@angular/core';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

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
export class AccordionLoftComponent {
  accordionExpanded = false;
  @ViewChild("loftForms") loftFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  loftPropSectionMain: any;
  loftRooftype: any;
  loftRoofArea: any;
  loftTypeofinstall: any;
  loftTypeInstallValue: any;
  loftPropSectionExt1: any;
  loftRooftypePropExt1: any;
  loftRoofAreaPSExt1: any;
  loftTypeofinstallPropExt1: any;
  loftTypeOfInstallValuePSExt1: any;
  loftPropExt2: any;
  loftRooftypePropExt2: any;
  loftRoofAreaPropExt2: any;
  loftTypeofinstallPropExt2: any;
  loftTypeofinstallValuePropExt2: any;
  loftPropSecExt3: any;
  loftRooftypePropExt3: any;
  loftRoofAreaExt3: any;
  loftTypeOfInstallPropSecExt3: any;
  loftTypeOfInstallValuePropExt3: any;
  loftPropSecExt4: any;
  loftRooftypePropExt4: any;
  loftRoofAreaPropExt4: any;
  loftTypeofinstallPropExt4: any;
  loftTypeofinstallValuePropExt4: any;
  loftTotalRoofAreaA: any;
  loftTotalRoofAreaB: any;
  loftTotalRoofAreaC: any;
  loftTotalRoofAreaD: any;
  loftTotalRoofAreaE: any;
  loftTotalRoofAreaF: any;
  loftUnroundedLess100POPT: any;
  loftUnroundedMore100POPT: any;
  loftUnroundedFRIPOPT: any;
  loftRoundedLess100POPT: any;
  loftRoundedMore100POPT: any;
  loftRoundedFRIPOPT: any;
  loftRoundedRIRIPOPT: any;
  loftIfRoomInRoofIns: any;

  constructor(private renderer: Renderer, 
              private sharedObject: SharedobjectserviceProvider,
              private toastCtrl: ToastController,
              private storage: Storage) {}

  ionViewDidLoad(){
    console.log(this.loftFormContent.nativeElement);
    this.renderer.setElementStyle(this.loftFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_loftForm").then((data) => {
      const loftForm = data;
      this.loftPropSectionMain= loftForm.loftPropSectionMain;
      this.loftRooftype= loftForm.loftRooftype;
      this.loftRoofArea= loftForm.loftRoofArea;
      this.loftTypeofinstall= loftForm.loftTypeofinstall;
      this.loftTypeInstallValue= loftForm.loftTypeInstallValue;
      this.loftPropSectionExt1= loftForm.loftPropSectionExt1;
      this.loftRooftypePropExt1= loftForm.loftRooftypePropExt1;
      this.loftRoofAreaPSExt1= loftForm.loftRoofAreaPSExt1;
      this.loftTypeofinstallPropExt1= loftForm.loftTypeofinstallPropExt1;
      this.loftTypeOfInstallValuePSExt1= loftForm.loftTypeOfInstallValuePSExt1;
      this.loftPropExt2= loftForm.loftPropExt2;
      this.loftRooftypePropExt2= loftForm.loftRooftypePropExt2;
      this.loftRoofAreaPropExt2= loftForm.loftRoofAreaPropExt2;
      this.loftTypeofinstallPropExt2= loftForm.loftTypeofinstallPropExt2;
      this.loftTypeofinstallValuePropExt2= loftForm.loftTypeofinstallValuePropExt2 ;
      this.loftPropSecExt3 = loftForm.loftPropSecExt3;
      this.loftRooftypePropExt3= loftForm.loftRooftypePropExt3;
      this.loftRoofAreaExt3= loftForm.loftRoofAreaExt3;
      this.loftTypeOfInstallPropSecExt3= loftForm.loftTypeOfInstallPropSecExt3;
      this.loftTypeOfInstallValuePropExt3= loftForm.loftTypeOfInstallValuePropExt3;
      this.loftPropSecExt4= loftForm.loftPropSecExt4;
      this.loftRooftypePropExt4= loftForm.loftRooftypePropExt4;
      this.loftRoofAreaPropExt4= loftForm.loftRoofAreaPropExt4;
      this.loftTypeofinstallPropExt4= loftForm.loftTypeofinstallPropExt4;
      this.loftTypeofinstallValuePropExt4= loftForm.loftTypeofinstallValuePropExt4;
      this.loftTotalRoofAreaA= loftForm.loftTotalRoofAreaA;
      this.loftTotalRoofAreaB= loftForm.loftTotalRoofAreaB;
      this.loftTotalRoofAreaC= loftForm.loftTotalRoofAreaC;
      this.loftTotalRoofAreaD= loftForm.loftTotalRoofAreaD;
      this.loftTotalRoofAreaE= loftForm.loftTotalRoofAreaE;
      this.loftTotalRoofAreaF= loftForm.loftTotalRoofAreaF;
      this.loftIfRoomInRoofIns = loftForm.loftIfRoomInRoofIns;

      this.sharedObject.setSharedLoftObject(loftForm);
    });
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

  saveLoft(){
    const data = {
      loftPropSectionMain: this.loftPropSectionMain,
      loftRooftype: this.loftRooftype,
      loftRoofArea: this.loftRoofArea,
      loftTypeofinstall: this.loftTypeofinstall,
      loftTypeInstallValue: this.loftTypeInstallValue,
      loftPropSectionExt1: this.loftPropSectionExt1,
      loftRooftypePropExt1: this.loftRooftypePropExt1,
      loftRoofAreaPSExt1: this.loftRoofAreaPSExt1,
      loftTypeofinstallPropExt1: this.loftTypeofinstallPropExt1,
      loftTypeOfInstallValuePSExt1: this.loftTypeOfInstallValuePSExt1,
      loftPropExt2: this.loftPropExt2,
      loftRooftypePropExt2: this.loftRooftypePropExt2,
      loftRoofAreaPropExt2: this.loftRoofAreaPropExt2,
      loftTypeofinstallPropExt2: this.loftTypeofinstallPropExt2,
      loftTypeofinstallValuePropExt2: this.loftTypeofinstallValuePropExt2,
      loftPropSecExt3: this.loftPropSecExt3,
      loftRooftypePropExt3: this.loftRooftypePropExt3,
      loftRoofAreaExt3: this.loftRoofAreaExt3,
      loftTypeOfInstallPropSecExt3: this.loftTypeOfInstallPropSecExt3,
      loftTypeOfInstallValuePropExt3: this.loftTypeOfInstallValuePropExt3,
      loftPropSecExt4: this.loftPropSecExt4,
      loftRooftypePropExt4: this.loftRooftypePropExt4,
      loftRoofAreaPropExt4: this.loftRoofAreaPropExt4,
      loftTypeofinstallPropExt4: this.loftTypeofinstallPropExt4,
      loftTypeofinstallValuePropExt4: this.loftTypeofinstallValuePropExt4,
      loftTotalRoofAreaA: this.loftTotalRoofAreaA,
      loftTotalRoofAreaB: this.loftTotalRoofAreaB,
      loftTotalRoofAreaC: this.loftTotalRoofAreaC,
      loftTotalRoofAreaD: this.loftTotalRoofAreaD,
      loftTotalRoofAreaE: this.loftTotalRoofAreaE,
      loftTotalRoofAreaF: this.loftTotalRoofAreaF,
      // loftUnroundedLess100POPT: this.loftUnroundedLess100POPT,
      // loftUnroundedMore100POPT: this.loftUnroundedMore100POPT,
      // loftUnroundedFRIPOPT: this.loftUnroundedFRIPOPT,
      // loftRoundedLess100POPT: this.loftRoundedLess100POPT,
      // loftRoundedMore100POPT: this.loftRoundedMore100POPT,
      // loftRoundedFRIPOPT: this.loftRoundedFRIPOPT,
      // loftRoundedRIRIPOPT: this.loftRoundedRIRIPOPT,
      loftIfRoomInRoofIns: this.loftIfRoomInRoofIns,
    };
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_loftForm", data);
    this.sharedObject.setSharedLoftObject(data);
    this.toggleAccordionLoft();
    this.presentToastSave();
  }

  presentToastSave(){
    let toast = this.toastCtrl.create({
      message: 'Saved Loft Successfully!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
