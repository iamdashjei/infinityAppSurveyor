import { Component, ViewChild, Renderer, Input  } from '@angular/core';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  cwiOnly: any;
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

  cwSWIMeasure: any;

  constructor(private renderer: Renderer,
              private storage: Storage,
              private sharedObject: SharedobjectserviceProvider,
              private toastCtrl: ToastController) {}

  ionViewDidLoad(){
    console.log(this.cavitysolidwallContent.nativeElement);
    this.renderer.setElementStyle(this.cavitysolidwallContent.nativeElement, "webkitTransition", "max-height 3000ms, padding 500ms");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() +"_cwMain").then((data) => {
        if(data != null){
          this.cwiOnly = data.cwiOnly;
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
          this.m2InsulationInstalledCWI5= data.m2InsulationInstalledCWI4;
        
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
          this.cwSWIMeasure = data.cwSWIMeasure;       
          this.sharedObject.setSharedCavityWallObject(data);
        } else {
          let data = {
            cwiOnly: null,
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
            cwApproxYearAgeReason: null,
            insulateCavParWalls: null,
            cwCavParUnroundedPWIPOPT: null,
            cwCavParRoundedPWIPOPT: null,
            cwSWIMeasure: null
          };
          this.sharedObject.setSharedCavityWallObject(data);
        }
    });
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

  saveCavityWallSolidWall(){
    const data = {
      cwiOnly: this.cwiOnly != null ? this.cwiOnly : "",
      cavWallPropSection1: this.cavWallPropSection1 != null ? this.cavWallPropSection1 : "",
      cavWallPropSection2: this.cavWallPropSection2 != null ? this.cavWallPropSection2 : "",
      cavWallPropSection3: this.cavWallPropSection3 != null ? this.cavWallPropSection3 : "",
      cavWallPropSection4: this.cavWallPropSection4 != null ? this.cavWallPropSection4 : "",
      cavWallPropSection5: this.cavWallPropSection5 != null ? this.cavWallPropSection5 : "",
      cavWallWallConstruction1: this.cavWallWallConstruction1 != null ? this.cavWallWallConstruction1 : "",
      cavWallWallConstruction2: this.cavWallWallConstruction2 != null ? this.cavWallWallConstruction2 : "",
      cavWallWallConstruction3: this.cavWallWallConstruction3 != null ? this.cavWallWallConstruction3 : "",
      cavWallWallConstruction4: this.cavWallWallConstruction4 != null ? this.cavWallWallConstruction4 : "",
      cavWallWallConstruction5: this.cavWallWallConstruction5 != null ? this.cavWallWallConstruction5 : "",
      cavWallWallArea1: this.cavWallWallArea1 != null ? this.cavWallWallArea1 : "",
      cavWallWallArea2: this.cavWallWallArea2 != null ? this.cavWallWallArea2 : "",
      cavWallWallArea3: this.cavWallWallArea3 != null ? this.cavWallWallArea3 : "",
      cavWallWallArea4: this.cavWallWallArea4 != null ? this.cavWallWallArea4 : "",
      cavWallWallArea5: this.cavWallWallArea5 != null ? this.cavWallWallArea5 : "",
      m2InsulationInstalledCWI1: this.m2InsulationInstalledCWI1 != null ? this.m2InsulationInstalledCWI1 : "",
      m2InsulationInstalledCWI2: this.m2InsulationInstalledCWI2 != null ? this.m2InsulationInstalledCWI2 : "",
      m2InsulationInstalledCWI3: this.m2InsulationInstalledCWI3 != null ? this.m2InsulationInstalledCWI3 : "",
      m2InsulationInstalledCWI4: this.m2InsulationInstalledCWI4 != null ? this.m2InsulationInstalledCWI4 : "",
      m2InsulationInstalledCWI5: this.m2InsulationInstalledCWI5 != null ? this.m2InsulationInstalledCWI5 : "",
      m2InsulationInstalledSWI1: this.m2InsulationInstalledSWI1 != null ? this.m2InsulationInstalledSWI1 : "",
      m2InsulationInstalledSWI2: this.m2InsulationInstalledSWI2 != null ? this.m2InsulationInstalledSWI2 : "",
      m2InsulationInstalledSWI3: this.m2InsulationInstalledSWI3 != null ? this.m2InsulationInstalledSWI3 : "",
      m2InsulationInstalledSWI4: this.m2InsulationInstalledSWI4 != null ? this.m2InsulationInstalledSWI4 : "",
      m2InsulationInstalledSWI5: this.m2InsulationInstalledSWI5 != null ? this.m2InsulationInstalledSWI5 : "",
      cwtotalWallAreasA: this.cwtotalWallAreasA != null ? this.cwtotalWallAreasA : "",
      cwtotalWallAreasB: this.cwtotalWallAreasB != null ? this.cwtotalWallAreasB : "",
      cwtotalWallAreasC: this.cwtotalWallAreasC != null ? this.cwtotalWallAreasC : "",
      cwtotalWallAreasD: this.cwtotalWallAreasD != null ? this.cwtotalWallAreasD : "",
      cwUnroundedCWIPOPT: this.cwUnroundedCWIPOPT != null ? this.cwUnroundedCWIPOPT : "",
      cwUnroundedSWIPOPT: this.cwUnroundedSWIPOPT != null ? this.cwUnroundedSWIPOPT : "",
      cwUnroundedSWIPOPT2: this.cwUnroundedSWIPOPT2 != null ? this.cwUnroundedSWIPOPT2 : "",
      cwRoundedCWIPOPT: this.cwRoundedCWIPOPT != null ? this.cwRoundedCWIPOPT : "",
      cwRoundedSWIPOPT: this.cwRoundedSWIPOPT != null ? this.cwRoundedSWIPOPT : "",
      cwRoundedSWIPOPT2: this.cwRoundedSWIPOPT2 != null ? this.cwRoundedSWIPOPT2 : "",
      cwApproxYearAgeReason: this.cwApproxYearAgeReason != null ? this.cwApproxYearAgeReason : "",
      insulateCavParWalls: this.insulateCavParWalls != null ? this.insulateCavParWalls : "",
      cwCavParUnroundedPWIPOPT: this.cwCavParUnroundedPWIPOPT != null ? this.cwCavParUnroundedPWIPOPT : "",
      cwCavParRoundedPWIPOPT: this.cwCavParRoundedPWIPOPT != null ? this.cwCavParRoundedPWIPOPT : "",
      cwSWIMeasure: this.cwSWIMeasure != null ? this.cwSWIMeasure : null
    };

    this.sharedObject.setSharedCavityWallObject(data);
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() +"_cwMain", data);
    this.presentToast();
  }

  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Cavity Wall Form Saved Successfully!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed Toast');
    });

    toast.present();
  }
}
