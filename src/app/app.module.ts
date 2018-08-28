import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { SurveyorFormPage } from '../pages/surveyor-form/surveyor-form';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

import { Camera  } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UploadFileServiceProvider } from '../providers/upload-file-service/upload-file-service';

import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePage } from '../pages/signature/signature';
import { IonicStorageModule } from '@ionic/storage';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AccordionComponent } from '../components/accordion/accordion';
import { ImageUploadSurveyorComponent } from '../components/image-upload-surveyor/image-upload-surveyor';
import { AccordionLoftComponent } from '../components/accordion-loft/accordion-loft';
import { LoftImageUploadComponent } from '../components/loft-image-upload/loft-image-upload';

import { AppState } from './app.global';
import { CardIO } from '@ionic-native/card-io';
import { Badge } from '@ionic-native/badge';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase';
import { FcmProvider } from '../providers/fcm/fcm';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignaturePage,
    DashboardPage,
    SurveyorFormPage,
    LoginPage,
    TimeAgoPipe,
    AccordionComponent,
    ImageUploadSurveyorComponent,
    AccordionLoftComponent,
    LoftImageUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
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
    SurveyorFormPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AppState,
    CardIO,
    Badge,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FcmProvider,
    UploadFileServiceProvider,
    RestProvider,
    AuthServiceProvider,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
