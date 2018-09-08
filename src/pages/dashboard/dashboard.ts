import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { RestProvider } from '../../providers/rest/rest';
import { DatasourceProvider } from '../../providers/datasource/datasource';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { Badge } from '@ionic-native/badge';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Storage } from '@ionic/storage';
import firebase from 'firebase';

import { ImagePicker } from '@ionic-native/image-picker';

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

    images: any[] = [];

    imageURI:any;
    imageFileName:any;
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
              public imagePicker: ImagePicker,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider,
              public datasource: DatasourceProvider) {
      this.menuCtrl.enable(true, 'menu-material');

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

  getLeadsAssigned(){
    this.storage.get("user_id").then((val) => {
      this.user_id = val;
      this.rest.fetchLeadAssigned(val).then((result) => {

        this.leadsNew = result['New Leads'];
        this.leadsInProgress = result['In Progress'];
        this.leadsCompleted = result['Completed'];

        console.log("All Leads: " +   JSON.stringify(this.leadsNew));
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

  openLeads(lead_slug, campaign_name){
    this.navCtrl.push('SurveyorFormPage', {
      lead_slug: lead_slug,
      campaignValue: campaign_name
    });

    this.sharedObject.setSharedCampaignMeasure(campaign_name);
  }

  isleadsCompletedHaveValue(){
    if(this.leadsCompleted != 'undefined'){

      return false;
    }
    return true;

  }

  updateLeads(lead_slug, remarks){
    this.rest.updateLeadsFromActionBtn(lead_slug, this.user_id, 'In Progress', remarks).then((result) => {
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

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



}
