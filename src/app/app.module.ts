import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

import { MyApp } from './app.component';
import { AppState } from './app.global';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { SurveyorFormPage } from '../pages/surveyor-form/surveyor-form';
import { SignaturePage } from '../pages/signature/signature';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { TimeAgoPipe } from 'time-ago-pipe';

import { AccordionComponent } from '../components/accordion/accordion';
import { ImageUploadSurveyorComponent } from '../components/image-upload-surveyor/image-upload-surveyor';
import { AccordionLoftComponent } from '../components/accordion-loft/accordion-loft';
import { LoftImageUploadComponent } from '../components/loft-image-upload/loft-image-upload';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RestProvider } from '../providers/rest/rest';
import { UploadFileServiceProvider } from '../providers/upload-file-service/upload-file-service';
import { DatasourceProvider } from '../providers/datasource/datasource';
import { FIREBASE_CONFIG } from './firebase.config.ts';
import { FcmProvider } from '../providers/fcm/fcm';
import { SharedobjectserviceProvider } from '../providers/sharedobjectservice/sharedobjectservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignaturePage,
    DashboardPage,
    TimeAgoPipe
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
    IonicStorageModule.forRoot() // Ionic Storage Local (Phone)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignaturePage,
    DashboardPage,

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
