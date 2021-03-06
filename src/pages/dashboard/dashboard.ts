import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, MenuController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { RestProvider } from '../../providers/rest/rest';
import { DatasourceProvider } from '../../providers/datasource/datasource';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { Badge } from '@ionic-native/badge';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Sim } from '@ionic-native/sim';


import { Storage } from '@ionic/storage';
import firebase from 'firebase';

import { ImagePicker } from '@ionic-native/image-picker';

import { SurveyorPage } from '../surveyor/surveyor';

/* Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;

    protected uploadFinished = false;

    doughnutChart: any;
    badgeNumber: number;
    leadsNew: any;
    leadsInProgress: any;
    leadsCompleted: any;
    errorMessage: string;
    codes: any;
    surveyorName: string;
    surveyorEmail: string;
    user_id: any;
    selectedFiles: FileList;

    images: any[] = [];

    listSubmitted: any = [];

    iconMeasures: any;
    iconMeasuresAdded: any;
    iconMeasuresCompleted: any;
    // Dashboard Custom Menu
    MENU = {
      DEFAULT: 'menu-components',
      MATERIAL: 'menu-material',
      AVATAR: 'menu-avatar',
      DARK: 'menu-dark',
      RIGHT: 'menu-right',
    };

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              private badge: Badge,
              public storage: Storage,
              public rest: RestProvider,
              private camera: Camera,
              private navParam: NavParams,
              public sim: Sim,
              private transfer: FileTransfer,
              public imagePicker: ImagePicker,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider,
              public datasource: DatasourceProvider) {
      this.menuCtrl.enable(true, 'menu-material');
                if(navParam.get('uploading') == 'Yes'){
                  this.presentToastUpload(navParam.get('campaignName'));
                }

  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
              labels: ["In Progress", "Completed", "Added Leads"],
              datasets: [{
                  label: '# of Leads',
                  data: [12, 19, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)'
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          }

      });

      this.sim.getSimInfo().then(
        (info) => console.log('Sim info: '+ JSON.stringify(info)),
        (err) => console.log('Unable to get sim info: ', err)
      );

      this.listSubmitted = [];
      this.storage.forEach( (value, key, index) => {
       
        console.log("from the key", key);
        this.listSubmitted.push(key);
      });
      this.getLeadsAssigned();

  }

  saveOtpCode(){

    // this.rest.createOtpCodes().then((result) => {
    //   console.log(result);
    //
    // }, (err) => {
    //   console.log(err);
    //
    // });

  }

  //ionViewWillEnter(){}
  ionViewDidEnter(){
    this.getLeadsAssigned();
  }

  getLeadsAssigned(){
    this.storage.get("user_id").then((val) => {
      this.user_id = val;
      this.rest.fetchLeadAssigned(val).then((result) => {

        this.leadsNew = result['New Leads Surveyor'];
        this.leadsInProgress = result['In Progress Surveyor'];
        this.leadsCompleted = result['Completed Surveyor'];

        console.log("All Leads: " +   JSON.stringify(this.leadsCompleted));
      }, (err) => {
        console.log(err);

      });
    });


    this.storage.get("user_name").then((val) => {

      this.surveyorName = val;

    });

    this.storage.get("user_email").then((val) => {

      this.surveyorEmail = val;

    });


  }

  getOtpCodesList(){
    this.rest.getOtpCodes().then(data => {
      this.codes = data;
      console.log(this.codes);
    });
  }

  // Set Badge Count
  setBadges(badgeNumber: number) {
    console.log("Set Badges " + badgeNumber);
    this.badge.set(badgeNumber);
  }

  // Get Badge Count
  getBadges() {
    this.badge.get();
  }

  // Increase Badge Count
  increaseBadges(badgeNumber: number) {
      this.badge.increase(badgeNumber);
  }

  // Clear Badges
  clearBadges(){
    this.badge.clear();
  }

  openLeads(lead_slug, campaign_name, leadItem, leadCreatedDate, leadCustName){
    this.sharedObject.setSharedCampaignMeasure(campaign_name);
    this.navCtrl.push(SurveyorPage, {
      lead_slug: lead_slug,
      campaignValue: campaign_name,
      leadCreatedDate: leadCreatedDate,
      leadCustName: leadCustName,
      leadItem: leadItem
    });


  }

  isleadsCompletedHaveValue(){
    if(this.leadsCompleted != 'undefined'){

      return false;
    }
    return true;

  }

  updateLeads(lead_slug, remarks, custName){
    this.sharedObject.setSharedCustName(custName);
    console.log("Cust name => " + custName);
    this.rest.updateLeadsFromActionBtn(lead_slug, this.user_id, 'In Progress Surveyor', remarks).then((result) => {
      console.log(result);
      this.getLeadsAssigned();

    }, (err) => {
      console.log(err);

    });

  }


  getPictures(){
    this.imagePicker.getPictures({
    }).then( results =>{
      console.log(results);
      for(let i=0; i < results.length;i++){
        this.images.push(results[i]);
        console.log("Images: " + results[i]);
      };
    });
  }

  isSubmit(lead_slug, measure){
    if(this.listSubmitted.indexOf(lead_slug + "_isSubmitted") === -1){
      if(measure.includes("ESH")){
        this.iconMeasures = "assets/imgs/misc/esh.png";
      } else if(measure.includes("Cavity") || measure.includes("CAVITY")){
        this.iconMeasures = "assets/imgs/misc/wall insulation.png";
      } else if(measure.includes("Loft") || measure.includes("LOFT")){
        this.iconMeasures = "assets/imgs/misc/loft insulation.png";
      } else if(measure.includes("Boiler") || measure.includes("BOILER")){
        this.iconMeasures = "assets/imgs/misc/boiler.png";
      } else if(measure.includes("Solid") || measure.includes("SOLID")){
        this.iconMeasures = "assets/imgs/misc/solid wall insulatin.png";
      }
      
      return true;
    } else {
      return false;
    } 
  }

  isAdded(measure){
      if(measure.includes("ESH")){
        this.iconMeasuresAdded = "assets/imgs/misc/esh.png";
      } else if(measure.includes("Cavity") || measure.includes("CAVITY")){
        this.iconMeasuresAdded = "assets/imgs/misc/wall insulation.png";
      } else if(measure.includes("Loft") || measure.includes("LOFT")){
        this.iconMeasuresAdded = "assets/imgs/misc/loft insulation.png";
      } else if(measure.includes("Boiler") || measure.includes("BOILER")){
        this.iconMeasuresAdded = "assets/imgs/misc/boiler.png";
      } else if(measure.includes("Solid") || measure.includes("SOLID")){
        this.iconMeasuresAdded = "assets/imgs/misc/solid wall insulatin.png";
      }
      return true;
  }

  isCompleted(measure){
    if(measure.includes("ESH")){
      this.iconMeasuresCompleted = "assets/imgs/misc/esh.png";
    } else if(measure.includes("Cavity") || measure.includes("CAVITY")){
      this.iconMeasuresCompleted = "assets/imgs/misc/wall insulation.png";
    } else if(measure.includes("Loft") || measure.includes("LOFT")){
      this.iconMeasuresCompleted = "assets/imgs/misc/loft insulation.png";
    } else if(measure.includes("Boiler") || measure.includes("BOILER")){
      this.iconMeasuresCompleted = "assets/imgs/misc/boiler.png";
    } else if(measure.includes("Solid") || measure.includes("SOLID")){
      this.iconMeasuresCompleted = "assets/imgs/misc/solid wall insulatin.png";
    }
    return true;
  }

  isSubmit2(lead_slug, measure){
    if(this.listSubmitted.indexOf(lead_slug + "_isSubmitted") !== -1){
      if(measure.includes("ESH")){
        this.iconMeasures = "assets/imgs/misc/esh.png";
      } else if(measure.includes("Cavity") || measure.includes("CAVITY")){
        this.iconMeasures = "assets/imgs/misc/wall insulation.png";
      } else if(measure.includes("Loft") || measure.includes("LOFT")){
        this.iconMeasures = "assets/imgs/misc/loft insulation.png";
      } else if(measure.includes("Boiler") || measure.includes("BOILER")){
        this.iconMeasures = "assets/imgs/misc/boiler.png";
      } else if(measure.includes("Solid") || measure.includes("SOLID")){
        this.iconMeasures = "assets/imgs/misc/solid wall insulatin.png";
      }
      return true;
    } else {
      return false;
    }
  }

  presentToastUpload(tag){
    let toast = this.toastCtrl.create({
      message: tag + ' - Uploading to CRM!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  

}
