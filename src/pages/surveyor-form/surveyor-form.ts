import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';

import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { RestProvider} from '../../providers/rest/rest';

import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the SurveyorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surveyor-form',
  templateUrl: 'surveyor-form.html',
})
export class SurveyorFormPage{
  public signatureImage: any;
  campaignMeasureView: any;
  lead_slug: any;
  lead_info: any;

  eshData: any;
  mainFormData: any;
  eshBoilerData: any;
  loftData: any;
  boilerData: any;
  solidWallData: any;
  cavityWallData: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalController: ModalController,
              public sharedObject: SharedobjectserviceProvider,
              public rest: RestProvider)
     {
    this.signatureImage = navParams.get('signatureImage');
    this.campaignMeasureView = navParams.get('campaignValue');
    this.lead_slug = navParams.get('lead_slug');

  }

  // For Signature Drawpad
  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);
  }

  // View Restriction for Forms. etc.
  isViewedLoft(){
    if (this.campaignMeasureView === 'JUNE LOFT'){
      return true;
    }
  }

  isViewedBoiler(){
    if (this.campaignMeasureView === 'Boiler July 2018'){
     return true;
   }  else if (this.campaignMeasureView === 'Boiler April 2018'){
     return true;
   } else if (this.campaignMeasureView === 'INFINITY BOILER MARCH'){
     return true;
   } else if (this.campaignMeasureView === 'JUNE BOILER'){
     return true;
   }
  }

  isViewedCavityWall(){
     if (this.campaignMeasureView === 'CAVITY July 2018'){
     return true;
   }  else if (this.campaignMeasureView === 'Cavity Wall April 2018'){
     return true;
   } else if (this.campaignMeasureView === 'INFINITY CAVITY MARCH'){
     return true;
   }  else if (this.campaignMeasureView === 'JUNE CAVITY WALL'){
     return true;
   }
  }

  isViewedESH(){
    if(this.campaignMeasureView === 'JUNE ESH'){
      return true;
    } else if (this.campaignMeasureView === 'ESH July 2018'){
      return true;
    } else if (this.campaignMeasureView === 'ESH April 2018'){
      return true;
    } else if (this.campaignMeasureView === 'INFINITY ESH MARCH'){
      return true;
    }
  }

  isViewedSolidWall(){
     if (this.campaignMeasureView === 'INFINITY SOLID WALL'){
      return true;
    }  else if (this.campaignMeasureView === 'SOLID July 2018'){
      return true;
    } else if (this.campaignMeasureView === 'JUNE SOLID WALL'){
      return true;
    }
  }

  savedObject(){
    this.eshData = this.sharedObject.getSharedEshObject();
    this.mainFormData = this.sharedObject.getSharedMainForm();
    this.eshBoilerData = this.sharedObject.getSharedEshBoilerObject();


    const saveData = {
      date_of_survey: this.mainFormData.myDate,
      property_type: this.mainFormData.propertyType,
      property_type1: this.mainFormData.propertyType1,
      property_type2: this.mainFormData.propertyType2,
      bedrooms: this.mainFormData.bedrooms,
      tenure: this.mainFormData.tenure,
      heating_source: this.mainFormData.heatingSource,
      customer_type: this.mainFormData.custType,
      surveyor_name: this.mainFormData.surveyorName,
      name_of_customer: this.mainFormData.nameOfCustomer,
      other: this.mainFormData.other,
      dob: this.mainFormData.myDate,
      newHeatingSystemUsing: this.eshBoilerData.newHeatingSystemUsing,
      newSystemHeatBool: this.eshBoilerData.newSystemHeatBool,
      eshUnroundedPOPT: this.eshBoilerData.eshUnroundedPOPT,
      eshRoundedPOPT: this.eshBoilerData.eshRoundedPOPT
    };


    this.rest.updateLeadData(this.lead_slug,saveData,
      this.mainFormData.notes,
      this.mainFormData.postCode,
      this.mainFormData.addressInstall,
    this.mainFormData.nameOfCustomer).then((result) => {
            console.log(result);
          //  this.navCtrl.setRoot(DashboardPage);
    }, (err) => {
            console.log(err);

      });

    //console.log(JSON.stringify(this.eshData));
    //console.log(JSON.stringify(this.mainFormData));
    //console.log(JSON.stringify(this.eshBoilerData));
    console.log(this.mainFormData.notes);
    console.log(this.mainFormData.postCode);
    console.log(this.mainFormData.addressInstall);
    console.log(JSON.stringify(saveData));


  }





}
