import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
import { Storage } from '@ionic/storage';
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
  leadCreatedDate: any;
  leadCustName: any;

  eshData: any;
  mainFormData: any;
  eshBoilerData: any;
  loftData: any;
  boilerData: any;
  solidWallData: any;
  cavityWallData: any;

  kitchen: any;
  dinningroom: any;
  livingroom: any;
  hallway: any;
  landingupstair: any;
  frontelevation: any;
  leftelevation: any;
  rearelevation: any;
  sideelevation: any;
  utility: any;
  heatingsource: any;
  airingcupboard: any;
  conservatory: any;
  other: any;
  garage: any;
  wallthickness: any;
  fusedspur: any;
  roomstat: any;
  programmer: any;
  bathroom: any;
  kitchenImg: any;
  stairs: any;

  ubil: any;
  tenancyAgreement: any;
  landlordPerm: any;

  img: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalController: ModalController,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider,
              public rest: RestProvider)
     { }


}
