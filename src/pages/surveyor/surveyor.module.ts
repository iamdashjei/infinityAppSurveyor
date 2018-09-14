import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyorPage } from './surveyor';
import { AccordionComponent } from '../../components/accordion/accordion';
@NgModule({
  declarations: [
    SurveyorPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyorPage),

  ],
})
export class SurveyorPageModule {}
