import { Component, ViewChild, Renderer, Input  } from '@angular/core';

import { Storage } from '@ionic/storage';

import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ToastController } from 'ionic-angular';
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
export class AccordionComponent {
  accordionExpanded = false;
  // Main Form
  myDate: any;
  myDOB: any;
  surveyorName: any;
  nameOfCustomer: any;
  postCode: any;
  addressInstall: any;
  custType: any;
  propertyType: any;
  propertyType1: any;
  propertyType2: any;
  bedrooms: any;
  tenure: any;
  heatingSource: any;
  other: any;
  notes: any;
  drawing: any;

  mainFormData: any;

  @ViewChild("genForms") genFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer, 
              private storage: Storage, 
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider) {}

  ionViewDidLoad(){
    console.log(this.genFormContent.nativeElement);
    this.renderer.setElementStyle(this.genFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
     
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_genForm").then((formData) => {
        if(formData != null){
          this.mainFormData = formData;
          this.myDate = this.mainFormData.myDate;
          this.myDOB = this.mainFormData.myDOB;
          this.surveyorName = this.mainFormData.surveyorName;
          this.nameOfCustomer = this.mainFormData.nameOfCustomer;
          this.postCode =  this.mainFormData.postCode;
          this.addressInstall = this.mainFormData.addressInstall;
          this.custType = this.mainFormData.custType;
          this.propertyType = this.mainFormData.propertyType;
          this.propertyType1 =  this.mainFormData.propertyType1;
          this.propertyType2 = this.mainFormData.propertyType2;
          this.bedrooms = this.mainFormData.bedrooms;
          this.tenure = this.mainFormData.tenure;
          this.heatingSource = this.mainFormData.heatingSource;
          this.other = this.mainFormData.other;
          this.notes = this.mainFormData.notes;
          this.drawing = this.mainFormData.drawing;
        }
    });

          
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

  saveMainForm(){
    const dataMainForm = {
      myDate: this.myDate,
      myDOB: this.myDOB,
      surveyorName: this.surveyorName,
      nameOfCustomer: this.nameOfCustomer,
      postCode: this.postCode,
      addressInstall: this.addressInstall,
      custType: this.custType,
      propertyType: this.propertyType,
      propertyType1: this.propertyType1,
      propertyType2: this.propertyType2,
      bedrooms: this.bedrooms,
      tenure: this.tenure,
      heatingSource: this.heatingSource,
      other: this.other,
      notes: this.notes,
      drawing: this.drawing
    };


    this.sharedObject.setSharedMainForm(dataMainForm);
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_genForm", dataMainForm);
    this.presentToastMainForm();
    this.toggleAccordion();
  }

  presentToastMainForm(){
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
