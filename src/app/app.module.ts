import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CardIO } from '@ionic-native/card-io';
import { Badge } from '@ionic-native/badge';
import { Camera  } from '@ionic-native/camera';
import { Firebase } from '@ionic-native/firebase';
import { IonicStorageModule } from '@ionic/storage';
import { Push } from '@ionic-native/push';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { Sim } from '@ionic-native/sim';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { AppState } from './app.global';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { SurveyorFormPage } from '../pages/surveyor-form/surveyor-form';
import { SignaturePage } from '../pages/signature/signature';
import { SignaturesPage } from '../pages/signatures/signatures';
import { SurveyorPage } from '../pages/surveyor/surveyor';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { TimeAgoPipe } from 'time-ago-pipe';

import { AccordionComponent } from '../components/accordion/accordion';
import { AccordionLoftComponent } from '../components/accordion-loft/accordion-loft';
import { AccordionBoilerComponent } from '../components/accordion-boiler/accordion-boiler';
import { AccordionEshComponent } from '../components/accordion-esh/accordion-esh';
import { AccordionEshBoilerComponent } from '../components/accordion-esh-boiler/accordion-esh-boiler';
import { AccordionCavitySolidWallComponent } from '../components/accordion-cavity-solid-wall/accordion-cavity-solid-wall';
import { ImageUploadComponent } from '../components/image-upload/image-upload';
import { ImageUploadSurveyorComponent }  from '../components/image-upload-surveyor/image-upload-surveyor';
import { EshUploadSurveyorComponent } from '../components/esh-upload-surveyor/esh-upload-surveyor';
import { CavityWallComponentUploadComponent } from '../components/cavity-wall-component-upload/cavity-wall-component-upload';
import { BoilerImageUploadComponent } from '../components/boiler-image-upload/boiler-image-upload';
import { LoftImageUploadComponent } from '../components/loft-image-upload/loft-image-upload';
import { UploadedImagesComponent } from '../components/uploaded-images/uploaded-images';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RestProvider } from '../providers/rest/rest';
import { UploadFileServiceProvider } from '../providers/upload-file-service/upload-file-service';
import { DatasourceProvider } from '../providers/datasource/datasource';
import { FIREBASE_CONFIG } from './firebase.config.ts';
import { FcmProvider } from '../providers/fcm/fcm';
import { SharedobjectserviceProvider } from '../providers/sharedobjectservice/sharedobjectservice';
import { NotificationPage } from '../pages/notification/notification';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    TimeAgoPipe,
    SignaturePage,
    SignaturesPage,
    NotificationPage,
    SurveyorPage,
    AccordionComponent,
    AccordionLoftComponent,
    AccordionBoilerComponent,
    AccordionEshComponent,
    AccordionEshBoilerComponent,
    AccordionCavitySolidWallComponent,
    ImageUploadComponent,
    ImageUploadSurveyorComponent,
    EshUploadSurveyorComponent,
    CavityWallComponentUploadComponent,
    BoilerImageUploadComponent,
    LoftImageUploadComponent,
    UploadedImagesComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG.firebase),
    IonicModule.forRoot(MyApp),
    SignaturePadModule, // Signature Pad (E-Signature)
    IonicStorageModule.forRoot({
      name: '_appdb', driverOrder: ['indexeddb', 'sqlite', 'websql']
    }) // Ionic Storage Local (Phone)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    SignaturePage,
    SignaturesPage,
    NotificationPage,
    SurveyorPage,
    AccordionComponent,
    UploadedImagesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AppState,
    CardIO,
    Badge,
    Push,
    FileTransfer,
    FileTransferObject,
    File,
    ImagePicker,
    Base64,
    Sim,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    UploadFileServiceProvider,
    RestProvider,
    AuthServiceProvider,
    DatasourceProvider,
    FcmProvider,
    SharedobjectserviceProvider,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
