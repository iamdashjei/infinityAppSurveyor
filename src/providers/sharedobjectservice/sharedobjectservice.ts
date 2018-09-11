import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SharedobjectserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedobjectserviceProvider {

  // Campaign Measures
  sharedEshObject: any;
  sharedEshBoilerObject: any;
  sharedLoftObject: any;
  sharedBoilerObject: any;
  sharedCavityWallObject: any;
  sharedSolidWallObject: any;

  // Lead Object by Status
  sharedNewLeadsObject: any;
  sharedInProgressObject: any;
  sharedCompletedObject: any;

  // Main Form
  sharedMainFormObject: any;

  // Current Campaign Measure
  sharedCampaignMeasure: string;

  // User ID
  userId: any;

  // Lead Slug
  sharedLeadSlug: any;

  // Cust name
  sharedCustName: any;

  constructor(public http: HttpClient) {
    console.log('Hello SharedobjectserviceProvider Provider');
  }

  // Shared ESH Object
  setSharedEshObject(sharedValue: any){
    this.sharedEshObject = sharedValue;
  }

  getSharedEshObject(){
    return this.sharedEshObject;
  }

  // Shared Boiler Object
  setSharedEshBoilerObject(sharedValue: any){
    this.sharedEshBoilerObject = sharedValue;
  }

  getSharedEshBoilerObject(){
    return this.sharedEshBoilerObject;
  }

  // Shared Loft Object
  setSharedLoftObject(sharedValue: any){
    this.sharedLoftObject = sharedValue;
  }

  getSharedLoftObject(){
    return this.sharedLoftObject;
  }

  // Shared Boiler sharedEshObject
  setSharedBoilerObject(sharedValue: any){
   this.sharedBoilerObject = sharedValue;
  }

  getSharedBoilerObject(){
    return this.sharedBoilerObject;
  }

  // Shared Cavity Wall Object
  setSharedCavityWallObject(sharedValue: any){
   this.sharedCavityWallObject = sharedValue;
  }

  getSharedCavityWallObject(){
    return this.sharedCavityWallObject;
  }

  // Shared Solid Wall Object
  setSharedSolidWallObject(sharedValue: any){
    this.sharedSolidWallObject = sharedValue;
  }

  getSharedSolidWallObject(){
    return this.sharedSolidWallObject;
  }


  //////// Main Form //////////
  setSharedMainForm(sharedValue){
    this.sharedMainFormObject = sharedValue;
  }

  getSharedMainForm(){
    return this.sharedMainFormObject;
  }

  // Current Campaign Measure
  setSharedCampaignMeasure(sharedValue){
    this.sharedCampaignMeasure = sharedValue;
  }

  getSharedCampaignMeasure(){
    return this.sharedCampaignMeasure;
  }

  // Set User Id upon login
  setSharedUserId(sharedValue){
    this.userId = sharedValue;
  }

  getSharedUserId(){
    return this.userId;
  }

  // Set New Leads Object
  setSharedNewLeadsObject(sharedValue){
   this.sharedNewLeadsObject = sharedValue;
  }

  getSharedNewLeadsObject(){
    return this.sharedNewLeadsObject;
  }

  // Set In Progress Leads Object
  setSharedInProgressObject(sharedValue){
   this.sharedInProgressObject = sharedValue;
  }

  getSharedInProgressObject(){
    return this.sharedInProgressObject;
  }

  // Set In Progress Leads Object
  setSharedCompletedObject(sharedValue){
   this.sharedCompletedObject = sharedValue;
  }

  getSharedCompletedObject(){
    return this.sharedCompletedObject;
  }

  // Set Slug on Selected Campaign Measure
  setSharedSlugSelectedCM(sharedValue){
    this.sharedLeadSlug = sharedValue;
  }

  getSharedSlugSelectedCM(){
    return this.sharedLeadSlug;
  }

  setSharedCustName(sharedValue){
    this.sharedCustName = sharedValue;
  }

  getSharedCustName(){
    return this.sharedCustName;
  }

}
