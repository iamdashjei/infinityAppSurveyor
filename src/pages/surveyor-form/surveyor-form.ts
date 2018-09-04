import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
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



}
