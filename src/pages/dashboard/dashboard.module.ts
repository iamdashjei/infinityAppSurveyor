import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FileUpload } from '../../providers/upload-file-service/fileupload';

@NgModule({
  declarations: [
    DashboardPage,
    ProgressBarComponent,
    TimeAgoPipe,
    FileUpload
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
  exports: [
  DashboardPage
  ]
})
export class DashboardPageModule {}
