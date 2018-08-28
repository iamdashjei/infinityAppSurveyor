import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    DashboardPage,
    ProgressBarComponent,
    TimeAgoPipe
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
  exports: [
  DashboardPage
  ]
})
export class DashboardPageModule {}
