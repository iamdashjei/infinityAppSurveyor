import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturesPage } from './signatures';

@NgModule({
  declarations: [
    SignaturesPage,
  ],
  imports: [
    IonicPageModule.forChild(SignaturesPage),
  ],
})
export class SignaturesPageModule {}
