import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';

/**
 * Generated class for the ImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * Image Upload for <Main Form>
 */

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.html'
})
export class ImageUploadComponent implements OnInit{
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: {percentage: number} = {percentage: 0};

  accordionExpanded = false;

  @ViewChild("imageuploadForms") imageuploadFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,  private uploadService: UploadFileServiceProvider) {}

  ngOnInit(){
    console.log(this.imageuploadFormContent.nativeElement);
    this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  toggleAccordionImageUpload() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }


  selectFile(event){
        this.selectedFiles = event.target.files;
  }

  // Upload Files of Main Forms (Surveyor)
  upload(){
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

}
