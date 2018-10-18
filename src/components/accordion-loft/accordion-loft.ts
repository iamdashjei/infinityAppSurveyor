import { Component,  ViewChild, Renderer, Input } from '@angular/core';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs';

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

  accordionExpanded2 = false;
  @ViewChild("loftForms2") loftFormContent2: any;
  

  icon2: string = "arrow-forward";

  accordionExpanded3 = false;
  @ViewChild("loftForms3") loftFormContent3: any;
  

  icon3: string = "arrow-forward";

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
  loftPropSecExt5: any;
  loftRooftypePropExt5: any;
  loftRoofAreaPropExt5: any;
  loftTypeofinstallPropExt5: any;
  loftTypeofinstallValuePropExt5: any;
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

  cavWallPropSection1: any;
  cavWallPropSection2: any;
  cavWallPropSection3: any;
  cavWallPropSection4: any;
  cavWallPropSection5: any;

  cavWallWallConstruction1: any;
  cavWallWallConstruction2: any;
  cavWallWallConstruction3: any;
  cavWallWallConstruction4: any;
  cavWallWallConstruction5: any;

  cavWallWallArea1: any;
  cavWallWallArea2: any;
  cavWallWallArea3: any;
  cavWallWallArea4: any;
  cavWallWallArea5: any;

  m2InsulationInstalledCWI1: any;
  m2InsulationInstalledCWI2: any;
  m2InsulationInstalledCWI3: any;
  m2InsulationInstalledCWI4: any;
  m2InsulationInstalledCWI5: any;

  m2InsulationInstalledSWI1: any;
  m2InsulationInstalledSWI2: any;
  m2InsulationInstalledSWI3: any;
  m2InsulationInstalledSWI4: any;
  m2InsulationInstalledSWI5: any;

  cwtotalWallAreasA: any;
  cwtotalWallAreasB: any;
  cwtotalWallAreasC: any;
  cwtotalWallAreasD: any;

  cwUnroundedCWIPOPT: any;
  cwUnroundedSWIPOPT: any;
  cwUnroundedSWIPOPT2: any;
  cwRoundedCWIPOPT: any;
  cwRoundedSWIPOPT: any;
  cwRoundedSWIPOPT2: any;

  cwApproxYearAgeReason: any;
  insulateCavParWalls: any;
  cwCavParUnroundedPWIPOPT: any;
  cwCavParRoundedPWIPOPT: any;

  heatingPOPTPercentage: any;

  floorInstPropSection1: any;
  floorInstConstruction1: any;
  floorInstArea1: any;
  m2floorInstInstalledCWI1: any;
  floorInstPropSection2: any;
  floorInstConstruction2: any;
  floorInstArea2: any;
  m2floorInstInstalledCWI2: any;
  floorInstPropSection3: any;
  floorInstConstruction3: any;
  floorInstArea3: any;
  m2floorInstInstalledCWI3: any;
  floorInstPropSection4: any;
  floorInstConstruction4: any;
  floorInstArea4: any;
  m2floorInstInstalledCWI4: any;
  floorInstPropSection5: any;
  floorInstConstruction5: any;
  floorInstArea5: any;
  m2floorInstInstalledCWI5: any;
  totalAreaPercentage: any;
  aValue: any;
  bValue: any;

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
      if(data != null){
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
      } else {
        let loftForm =  {
          loftPropSectionMain: null ,
          loftRooftype: null,
          loftRoofArea: null,
          loftTypeofinstall: null,
          loftTypeInstallValue: null,
          loftPropSectionExt1: null,
          loftRooftypePropExt1: null, 
          loftRoofAreaPSExt1: null,
          loftTypeofinstallPropExt1: null,
          loftTypeOfInstallValuePSExt1: null,
          loftPropExt2: null,
          loftRooftypePropExt2: null,
          loftRoofAreaPropExt2: null,
          loftTypeofinstallPropExt2: null,
          loftTypeofinstallValuePropExt2: null,
          loftPropSecExt3: null,
          loftRooftypePropExt3: null,
          loftRoofAreaExt3: null,
          loftTypeOfInstallPropSecExt3: null,
          loftTypeOfInstallValuePropExt3: null,
          loftPropSecExt4: null,
          loftRooftypePropExt4: null,
          loftRoofAreaPropExt4: null,
          loftTypeofinstallPropExt4: null,
          loftTypeofinstallValuePropExt4: null,
          loftTotalRoofAreaA: null,
          loftTotalRoofAreaB: null,
          loftTotalRoofAreaC: null,
          loftTotalRoofAreaD: null,
          loftTotalRoofAreaE: null,
          loftTotalRoofAreaF: null,
          loftIfRoomInRoofIns: null     
        };
        this.sharedObject.setSharedLoftObject(loftForm);
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +"_loftCavForm").then((data) => {
      if(data != null){
        this.cavWallPropSection1= data.cavWallPropSection1;
        this.cavWallPropSection2= data.cavWallPropSection2;
        this.cavWallPropSection3= data.cavWallPropSection3;
        this.cavWallPropSection4= data.cavWallPropSection4;
        this.cavWallPropSection5= data.cavWallPropSection5;
      
        this.cavWallWallConstruction1= data.cavWallWallConstruction1;
        this.cavWallWallConstruction2= data.cavWallWallConstruction2;
        this.cavWallWallConstruction3= data.cavWallWallConstruction3;
        this.cavWallWallConstruction4= data.cavWallWallConstruction4;
        this.cavWallWallConstruction5= data.cavWallWallConstruction5;
      
        this.cavWallWallArea1= data.cavWallWallArea1;
        this.cavWallWallArea2= data.cavWallWallArea2;
        this.cavWallWallArea3= data.cavWallWallArea3;
        this.cavWallWallArea4= data.cavWallWallArea4;
        this.cavWallWallArea5= data.cavWallWallArea5;
      
        this.m2InsulationInstalledCWI1= data.m2InsulationInstalledCWI1;
        this.m2InsulationInstalledCWI2= data.m2InsulationInstalledCWI2;
        this.m2InsulationInstalledCWI3= data.m2InsulationInstalledCWI3;
        this.m2InsulationInstalledCWI4= data.m2InsulationInstalledCWI4;
        this.m2InsulationInstalledCWI5= data.m2InsulationInstalledCWI5;
      
        this.m2InsulationInstalledSWI1= data.m2InsulationInstalledSWI1;
        this.m2InsulationInstalledSWI2= data.m2InsulationInstalledSWI2;
        this.m2InsulationInstalledSWI3= data.m2InsulationInstalledSWI3;
        this.m2InsulationInstalledSWI4= data.m2InsulationInstalledSWI4;
        this.m2InsulationInstalledSWI5= data.m2InsulationInstalledSWI5;
      
        this.cwtotalWallAreasA= data.cwtotalWallAreasA;
        this.cwtotalWallAreasB= data.cwtotalWallAreasB;
        this.cwtotalWallAreasC= data.cwtotalWallAreasC;
        this.cwtotalWallAreasD= data.cwtotalWallAreasD;
      
        this.cwUnroundedCWIPOPT= data.cwUnroundedCWIPOPT;
        this.cwUnroundedSWIPOPT= data.cwUnroundedSWIPOPT;
        this.cwUnroundedSWIPOPT2= data.cwUnroundedSWIPOPT2;
        this.cwRoundedCWIPOPT= data.cwRoundedCWIPOPT;
        this.cwRoundedSWIPOPT= data.cwRoundedSWIPOPT;
        this.cwRoundedSWIPOPT2= data.cwRoundedSWIPOPT2;
      
        this.cwApproxYearAgeReason= data.cwApproxYearAgeReason;
        this.insulateCavParWalls= data.insulateCavParWalls;
        this.cwCavParUnroundedPWIPOPT= data.cwCavParUnroundedPWIPOPT;
        this.cwCavParRoundedPWIPOPT= data.cwCavParRoundedPWIPOPT;
        this.sharedObject.setSharedLoftCavObject(data);
      } else {
        const data = {
          cavWallPropSection1: null,
          cavWallPropSection2: null,
          cavWallPropSection3: null,
          cavWallPropSection4: null,
          cavWallPropSection5: null,
          cavWallWallConstruction1: null,
          cavWallWallConstruction2: null,
          cavWallWallConstruction3: null,
          cavWallWallConstruction4: null,
          cavWallWallConstruction5: null,
          cavWallWallArea1: null,
          cavWallWallArea2: null,
          cavWallWallArea3: null,
          cavWallWallArea4: null,
          cavWallWallArea5: null,
          m2InsulationInstalledCWI1: null,
          m2InsulationInstalledCWI2: null,
          m2InsulationInstalledCWI3: null,
          m2InsulationInstalledCWI4: null,
          m2InsulationInstalledCWI5: null,
          m2InsulationInstalledSWI1: null,
          m2InsulationInstalledSWI2: null,
          m2InsulationInstalledSWI3: null,
          m2InsulationInstalledSWI4: null,
          m2InsulationInstalledSWI5: null,
          cwtotalWallAreasA: null,
          cwtotalWallAreasB: null,
          cwtotalWallAreasC: null,
          cwtotalWallAreasD: null,
          cwUnroundedCWIPOPT: null,
          cwUnroundedSWIPOPT: null,
          cwUnroundedSWIPOPT2: null,
          cwRoundedCWIPOPT: null,
          cwRoundedSWIPOPT: null,
          cwRoundedSWIPOPT2: null,
          insulateCavParWalls: null,
          cwCavParUnroundedPWIPOPT: null,
          cwCavParRoundedPWIPOPT: null
        };
        this.sharedObject.setSharedLoftCavObject(data);
      }

     
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +"_floorForm").then((data) => {
      if(data != null){
        this.floorInstPropSection1= data.floorInstPropSection1;
        this.floorInstConstruction1= data.floorInstConstruction1;
        this.floorInstArea1= data.floorInstArea1;
        this.m2floorInstInstalledCWI1= data.m2floorInstInstalledCWI1;
        this.floorInstPropSection2= data.floorInstPropSection2;
        this.floorInstConstruction2= data.floorInstConstruction2;
        this.floorInstArea2= data.floorInstArea2;
        this.m2floorInstInstalledCWI2= data.m2floorInstInstalledCWI2;
        this.floorInstPropSection3= data.floorInstPropSection3;
        this.floorInstConstruction3= data.floorInstConstruction3;
        this.floorInstArea3= data.floorInstArea3;
        this.m2floorInstInstalledCWI3= data.m2floorInstInstalledCWI3;
        this.floorInstPropSection4= data.floorInstPropSection4;
        this.floorInstConstruction4= data.floorInstConstruction4;
        this.floorInstArea4= data.floorInstArea4;
        this.m2floorInstInstalledCWI4= data.m2floorInstInstalledCWI4;
        this.floorInstPropSection5= data.floorInstPropSection5;
        this.floorInstConstruction5= data.floorInstConstruction5;
        this.floorInstArea5= data.floorInstArea5;
        this.m2floorInstInstalledCWI5= data.m2floorInstInstalledCWI5;
        this.totalAreaPercentage= data.totalAreaPercentage;
        this.aValue= data.aValue;
        this.bValue= data.bValue;
        this.sharedObject.setSharedFloorObject(data);
      } else {
        let data = {
        floorInstPropSection1: null,
        floorInstConstruction1: null,
        floorInstArea1: null,
        m2floorInstInstalledCWI1: null,
        floorInstPropSection2: null,
        floorInstConstruction2: null,
        floorInstArea2: null,
        m2floorInstInstalledCWI2: null,
        floorInstPropSection3: null,
        floorInstConstruction3: null,
        floorInstArea3: null,
        m2floorInstInstalledCWI3: null,
        floorInstPropSection4: null,
        floorInstConstruction4: null,
        floorInstArea4: null,
        m2floorInstInstalledCWI4: null,
        floorInstPropSection5: null,
        floorInstConstruction5: null,
        floorInstArea5: null,
        m2floorInstInstalledCWI5: null,
        totalAreaPercentage: null,
        aValue: null,
        bValue: null   
        };   
        this.sharedObject.setSharedFloorObject(data);
      }
     
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

   // Toggle Form for
   toggleAccordionCavity() {
    if(this.accordionExpanded2){
      this.renderer.setElementStyle(this.loftFormContent2.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.loftFormContent2.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.loftFormContent2.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.loftFormContent2.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded2 = !this.accordionExpanded2;
    this.icon2 = this.icon2 == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  toggleAccordionFloorIns(){
    if(this.accordionExpanded3){
      this.renderer.setElementStyle(this.loftFormContent3.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.loftFormContent3.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.loftFormContent3.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.loftFormContent3.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded3 = !this.accordionExpanded3;
    this.icon3 = this.icon3 == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  saveLoft(){
    const data = {
      loftPropSectionMain: this.loftPropSectionMain != null ? this.loftPropSectionMain : null ,
      loftRooftype: this.loftRooftype != null ? this.loftRooftype : null,
      loftRoofArea: this.loftRoofArea != null ? this.loftRoofArea : null,
      loftTypeofinstall: this.loftTypeofinstall != null ? this.loftTypeofinstall : null,
      loftTypeInstallValue: this.loftTypeInstallValue != null ? this.loftTypeInstallValue : null,
      loftPropSectionExt1: this.loftPropSectionExt1 != null ? this.loftPropSectionExt1 : null,
      loftRooftypePropExt1: this.loftRooftypePropExt1 != null ? this.loftRooftypePropExt1 : null, 
      loftRoofAreaPSExt1: this.loftRoofAreaPSExt1 != null ? this.loftRoofAreaPSExt1 : null,
      loftTypeofinstallPropExt1: this.loftTypeofinstallPropExt1 != null ? this.loftTypeofinstallPropExt1 : null,
      loftTypeOfInstallValuePSExt1: this.loftTypeOfInstallValuePSExt1 != null ? this.loftTypeOfInstallValuePSExt1 : null,
      loftPropExt2: this.loftPropExt2 != null ? this.loftPropExt2 : null,
      loftRooftypePropExt2: this.loftRooftypePropExt2 != null ? this.loftRooftypePropExt2 : null,
      loftRoofAreaPropExt2: this.loftRoofAreaPropExt2 != null ? this.loftRoofAreaPropExt2 : null,
      loftTypeofinstallPropExt2: this.loftTypeofinstallPropExt2 != null ? this.loftTypeofinstallPropExt2 : null,
      loftTypeofinstallValuePropExt2: this.loftTypeofinstallValuePropExt2 != null ? this.loftTypeofinstallValuePropExt2 : null,
      loftPropSecExt3: this.loftPropSecExt3 != null ? this.loftPropSecExt3 : null,
      loftRooftypePropExt3: this.loftRooftypePropExt3 != null ? this.loftRooftypePropExt3 : null,
      loftRoofAreaExt3: this.loftRoofAreaExt3 != null ? this.loftRoofAreaExt3 : null,
      loftTypeOfInstallPropSecExt3: this.loftTypeOfInstallPropSecExt3 != null ? this.loftTypeOfInstallPropSecExt3 : null,
      loftTypeOfInstallValuePropExt3: this.loftTypeOfInstallValuePropExt3 != null ? this.loftTypeOfInstallValuePropExt3 : null,
      loftPropSecExt4: this.loftPropSecExt4 != null ? this.loftPropSecExt4 : null,
      loftRooftypePropExt4: this.loftRooftypePropExt4 != null ? this.loftRooftypePropExt4 : null,
      loftRoofAreaPropExt4: this.loftRoofAreaPropExt4 != null ? this.loftRoofAreaPropExt4 : null,
      loftTypeofinstallPropExt4: this.loftTypeofinstallPropExt4 != null ? this.loftTypeofinstallPropExt4 : null,
      loftTypeofinstallValuePropExt4: this.loftTypeofinstallValuePropExt4 != null ? this.loftTypeofinstallValuePropExt4 : null,
      loftTotalRoofAreaA: this.loftTotalRoofAreaA != null ? this.loftTotalRoofAreaA : null,
      loftTotalRoofAreaB: this.loftTotalRoofAreaB != null ? this.loftTotalRoofAreaB : null,
      loftTotalRoofAreaC: this.loftTotalRoofAreaC != null ? this.loftTotalRoofAreaC : null,
      loftTotalRoofAreaD: this.loftTotalRoofAreaD != null ? this.loftTotalRoofAreaD : null,
      loftTotalRoofAreaE: this.loftTotalRoofAreaE != null ? this.loftTotalRoofAreaE : null,
      loftTotalRoofAreaF: this.loftTotalRoofAreaF != null ? this.loftTotalRoofAreaF : null,
      loftIfRoomInRoofIns: this.loftIfRoomInRoofIns != null ? this.loftIfRoomInRoofIns : null
    };
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_loftForm", data);
    this.sharedObject.setSharedLoftObject(data);
    this.toggleAccordionLoft();
    this.presentToastSave("Saved Roof Insulation Measures Successfully!");
  }

  saveCavity(){
    const data = {
      cavWallPropSection1: this.cavWallPropSection1 != null ? this.cavWallPropSection1 : null,
      cavWallPropSection2: this.cavWallPropSection2 != null ? this.cavWallPropSection2 : null,
      cavWallPropSection3: this.cavWallPropSection3 != null ? this.cavWallPropSection3 : null,
      cavWallPropSection4: this.cavWallPropSection4 != null ? this.cavWallPropSection4 : null,
      cavWallPropSection5: this.cavWallPropSection5 != null ? this.cavWallPropSection5 : null,
      cavWallWallConstruction1: this.cavWallWallConstruction1 != null ? this.cavWallWallConstruction1 : null,
      cavWallWallConstruction2: this.cavWallWallConstruction2 != null ? this.cavWallWallConstruction2 : null,
      cavWallWallConstruction3: this.cavWallWallConstruction3 != null ? this.cavWallWallConstruction3 : null,
      cavWallWallConstruction4: this.cavWallWallConstruction4 != null ? this.cavWallWallConstruction4 : null,
      cavWallWallConstruction5: this.cavWallWallConstruction5 != null ? this.cavWallWallConstruction5 : null,
      cavWallWallArea1: this.cavWallWallArea1 != null ? this.cavWallWallArea1 : null,
      cavWallWallArea2: this.cavWallWallArea2 != null ? this.cavWallWallArea2 : null,
      cavWallWallArea3: this.cavWallWallArea3 != null ? this.cavWallWallArea3 : null,
      cavWallWallArea4: this.cavWallWallArea4 != null ? this.cavWallWallArea4 : null,
      cavWallWallArea5: this.cavWallWallArea5 != null ? this.cavWallWallArea5 : null,
      m2InsulationInstalledCWI1: this.m2InsulationInstalledCWI1 != null ? this.m2InsulationInstalledCWI1 : null,
      m2InsulationInstalledCWI2: this.m2InsulationInstalledCWI2 != null ? this.m2InsulationInstalledCWI2 : null,
      m2InsulationInstalledCWI3: this.m2InsulationInstalledCWI3 != null ? this.m2InsulationInstalledCWI3 : null,
      m2InsulationInstalledCWI4: this.m2InsulationInstalledCWI4 != null ? this.m2InsulationInstalledCWI4 : null,
      m2InsulationInstalledCWI5: this.m2InsulationInstalledCWI5 != null ? this.m2InsulationInstalledCWI5 : null,
      m2InsulationInstalledSWI1: this.m2InsulationInstalledSWI1 != null ? this.m2InsulationInstalledSWI1 : null,
      m2InsulationInstalledSWI2: this.m2InsulationInstalledSWI2 != null ? this.m2InsulationInstalledSWI2 : null,
      m2InsulationInstalledSWI3: this.m2InsulationInstalledSWI3 != null ? this.m2InsulationInstalledSWI3 : null,
      m2InsulationInstalledSWI4: this.m2InsulationInstalledSWI4 != null ? this.m2InsulationInstalledSWI4 : null,
      m2InsulationInstalledSWI5: this.m2InsulationInstalledSWI5 != null ? this.m2InsulationInstalledSWI5 : null,
      cwtotalWallAreasA: this.cwtotalWallAreasA != null ? this.cwtotalWallAreasA : null,
      cwtotalWallAreasB: this.cwtotalWallAreasB != null ? this.cwtotalWallAreasB : null,
      cwtotalWallAreasC: this.cwtotalWallAreasC != null ? this.cwtotalWallAreasC : null,
      cwtotalWallAreasD: this.cwtotalWallAreasD != null ? this.cwtotalWallAreasD : null,
      cwUnroundedCWIPOPT: this.cwUnroundedCWIPOPT != null ? this.cwUnroundedCWIPOPT : null,
      cwUnroundedSWIPOPT: this.cwUnroundedSWIPOPT != null ? this.cwUnroundedSWIPOPT : null,
      cwUnroundedSWIPOPT2: this.cwUnroundedSWIPOPT2 != null ? this.cwUnroundedSWIPOPT2 : null,
      cwRoundedCWIPOPT: this.cwRoundedCWIPOPT != null ? this.cwRoundedCWIPOPT : null,
      cwRoundedSWIPOPT: this.cwRoundedSWIPOPT != null ? this.cwRoundedSWIPOPT : null,
      cwRoundedSWIPOPT2: this.cwRoundedSWIPOPT2 != null ? this.cwRoundedSWIPOPT2 : null,
      insulateCavParWalls: this.insulateCavParWalls != null ? this.insulateCavParWalls : null,
      cwCavParUnroundedPWIPOPT: this.cwCavParUnroundedPWIPOPT != null ? this.cwCavParUnroundedPWIPOPT : null,
      cwCavParRoundedPWIPOPT: this.cwCavParRoundedPWIPOPT != null ? this.cwCavParRoundedPWIPOPT : null
    };

    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_loftCavForm", data);
    this.sharedObject.setSharedLoftCavObject(data);
    this.toggleAccordionCavity();
    this.presentToastSave("Saved Wall Insulation Measures Successfully!");
  }

  saveFloorInstMeasure(){
    
    const data = {
      floorInstPropSection1: this.floorInstPropSection1 != null ? this.floorInstPropSection1 : null,
      floorInstConstruction1: this.floorInstConstruction1 != null ? this.floorInstConstruction1 : null,
      floorInstArea1: this.floorInstArea1 != null ? this.floorInstArea1 : null,
      m2floorInstInstalledCWI1: this.m2floorInstInstalledCWI1 != null ? this.m2floorInstInstalledCWI1 : null,
      floorInstPropSection2: this.floorInstPropSection2 != null ? this.floorInstPropSection2 : null,
      floorInstConstruction2: this.floorInstConstruction2 != null ? this.floorInstConstruction2 : null,
      floorInstArea2: this.floorInstArea2 != null ? this.floorInstArea2 : null,
      m2floorInstInstalledCWI2: this.m2floorInstInstalledCWI2 != null ? this.m2floorInstInstalledCWI2 : null,
      floorInstPropSection3: this.floorInstPropSection3 != null ? this.floorInstPropSection3 : null,
      floorInstConstruction3: this.floorInstConstruction3 != null ? this.floorInstConstruction3 : null,
      floorInstArea3: this.floorInstArea3 != null ? this.floorInstArea3 : null,
      m2floorInstInstalledCWI3: this.m2floorInstInstalledCWI3 != null ? this.m2floorInstInstalledCWI3 : null,
      floorInstPropSection4: this.floorInstPropSection4 != null ? this.floorInstPropSection4 : null,
      floorInstConstruction4: this.floorInstConstruction4 != null ? this.floorInstConstruction4 : null,
      floorInstArea4: this.floorInstArea4 != null ? this.floorInstArea4 : null,
      m2floorInstInstalledCWI4: this.m2floorInstInstalledCWI4 != null ? this.m2floorInstInstalledCWI4 : null,
      floorInstPropSection5: this.floorInstPropSection5 != null ? this.floorInstPropSection5 : null,
      floorInstConstruction5: this.floorInstConstruction5 != null ? this.floorInstConstruction5 : null,
      floorInstArea5: this.floorInstArea5 != null ? this.floorInstArea5 : null,
      m2floorInstInstalledCWI5: this.m2floorInstInstalledCWI5 != null ? this.m2floorInstInstalledCWI5 : null,
      totalAreaPercentage: this.totalAreaPercentage != null ? this.totalAreaPercentage : null,
      aValue: this.aValue != null ? this.aValue : null,
      bValue: this.bValue != null ? this.bValue : null
    };

    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_floorForm", data);
    this.sharedObject.setSharedFloorObject(data);
    this.toggleAccordionFloorIns();
    this.presentToastSave("Saved Floor Insulation Measures Successfully!");
  }

  calculatePOPT(){
    if(this.loftTypeOfInstallValuePSExt1 != undefined &&
      this.loftTypeofinstallValuePropExt2 != undefined &&
      this.loftTypeOfInstallValuePropExt3 != undefined &&
      this.loftTypeofinstallValuePropExt4 != undefined &&
      this.loftTypeofinstallValuePropExt5 != undefined){
        let sumB = parseInt(this.loftTypeOfInstallValuePSExt1) + 
        parseInt(this.loftTypeofinstallValuePropExt2) +
        parseInt(this.loftTypeOfInstallValuePropExt3) + 
        parseInt(this.loftTypeofinstallValuePropExt4) + 
        parseInt(this.loftTypeofinstallValuePropExt5);

        let sumA = parseInt(this.loftRoofAreaPSExt1) + parseInt(this.loftRoofAreaPropExt2) +  
        parseInt(this.loftRoofAreaExt3) + parseInt(this.loftRoofAreaPropExt4) + parseInt(this.loftRoofAreaPropExt5);
        this.loftUnroundedLess100POPT = (sumB / sumA);
      return true;
    }
    return false;
  }

  calculateCWIPOPT(){

  }

  calculateSWIPOPT(){

  }

  calculateSWIPOPT2(){

  }

  calculatePWIPOPT(){
    
  }


  calculateUFIPOPT(){
    

    if(this.floorInstArea1 != undefined && this.floorInstArea2 != undefined &&
      this.floorInstArea3 != undefined && this.floorInstArea4 != undefined &&
      this.floorInstArea5 != undefined){
        this.aValue = parseInt(this.floorInstArea1) + parseInt(this.floorInstArea2) +
                  parseInt(this.floorInstArea3) + parseInt(this.floorInstArea4) + 
                  parseInt(this.floorInstArea5);
    }
    
    if(this.m2floorInstInstalledCWI1 != undefined && this.m2floorInstInstalledCWI2 != undefined &&
      this.m2floorInstInstalledCWI3 != undefined && this.m2floorInstInstalledCWI4 != undefined &&
      this.m2floorInstInstalledCWI5 != undefined){ 
        this.bValue = parseInt(this.m2floorInstInstalledCWI1) + parseInt(this.m2floorInstInstalledCWI2) +
          parseInt(this.m2floorInstInstalledCWI3) + parseInt(this.m2floorInstInstalledCWI4) + 
          parseInt(this.m2floorInstInstalledCWI5);
      }

    if(parseInt(this.aValue) > 0 && parseInt(this.bValue) > 0){
      this.totalAreaPercentage = parseInt(this.bValue) / parseInt(this.aValue);
      return true;
    }
    

  }

  presentToastSave(tag){
    let toast = this.toastCtrl.create({
      message: tag,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
