import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/**
 * Generated class for the LoftImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loft-image-upload',
  templateUrl: 'loft-image-upload.html'
})
export class LoftImageUploadComponent implements OnInit{

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    @ViewChild("loftsurveyorForms") loftsurveyorFormContent: any;
    @Input('title') title: string;

    selectedFilesUBILLoft: FileList;
    selectedFilesCustomerSignature: FileList;
    selectedFilesEPOP: FileList;
    selectedFilesFloorPlan: FileList;
    selectedFilesTenancyAgreement: FileList;
    selectedFilesLandlordPerm: FileList;

    currentFileUploadUBILLoft: FileUpload;
    currentFileUploadCustomerSignature: FileUpload;
    currentFileUploadEPOP: FileUpload;
    currentFileUploadFloorPlan: FileUpload;
    currentFileUploadTenancyAgreement: FileUpload;
    currentFileUploadLandlordPerm: FileUpload;

    progressUBILLoft: {percentage: number} = {percentage: 0};
    progressCustomerSignature: {percentage: number} = {percentage: 0};
    progressEPOP: {percentage: number} = {percentage: 0};
    progressFloorPlan: {percentage: number} = {percentage: 0};
    progressTenancyAgreement: {percentage: number} = {percentage: 0};
    progressLandLordPerm: {percentage: number} = {percentage: 0};

    data = false;
    accordionExpanded = false;
    signature = '';
    isDrawing = false;

    icon: string = "arrow-forward";


    constructor(public renderer: Renderer, private uploadService: UploadFileServiceProvider) {}

    ngOnInit(){
      console.log(this.loftsurveyorFormContent.nativeElement);
      this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
    }

    toggleAccordionLoftSurveyor() {
      if(this.accordionExpanded){
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "padding", "0px 16px");
      } else {
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "max-height", "3200px");
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "padding", "13px 16px");
      }

      this.accordionExpanded = !this.accordionExpanded;
      this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }

    selectFileLoftSurveyor(event, targetFile: string){
    
      if(targetFile == 'UBIL'){
        this.selectedFilesUBILLoft = event.target.files;
      } else if (targetFile == 'CustomerSignature') {
        this.selectedFilesCustomerSignature = event.target.files;
      } else if (targetFile == 'EPOP') {
        this.selectedFilesEPOP = event.target.files;
      } else if (targetFile == 'FloorPlan') {
        this.selectedFilesFloorPlan = event.target.files;
      } else if (targetFile == 'Tenancy Agreement') {
        this.selectedFilesTenancyAgreement = event.target.files;
      } else if (targetFile == 'LandlordPerm') {
        this.selectedFilesLandlordPerm = event.target.files;
      }

    }


    uploadLoftSurveyor(input: string){

      if(input == 'UBIL') {
          const fileUBIL = this.selectedFilesUBILLoft.item(0);
          this.currentFileUploadUBILLoft = new FileUpload(fileUBIL);
          this.uploadService.pushFileToStorage(this.currentFileUploadUBILLoft, this.progressUBILLoft);

      } else if(input == 'CustSignature'){
          const fileCustomerSignature = this.selectedFilesCustomerSignature.item(0);
          this.currentFileUploadCustomerSignature = new FileUpload(fileCustomerSignature);
          this.uploadService.pushFileToStorage(this.currentFileUploadCustomerSignature, this.progressCustomerSignature);

      } else if (input == 'EPOP') {
          const fileEPOP = this.selectedFilesEPOP.item(0);
          this.currentFileUploadEPOP = new FileUpload(fileEPOP);
          this.uploadService.pushFileToStorage(this.currentFileUploadEPOP, this.progressEPOP);

      } else if (input == 'Floor Plan') {
          const fileFloorPlan = this.selectedFilesFloorPlan.item(0);
          this.currentFileUploadFloorPlan = new FileUpload(fileFloorPlan);
          this.uploadService.pushFileToStorage(this.currentFileUploadFloorPlan, this.progressFloorPlan);

      } else if (input == 'Tenancy Agreement') {
          const fileTenancyAgreement = this.selectedFilesTenancyAgreement.item(0);
          this.currentFileUploadTenancyAgreement = new FileUpload(fileTenancyAgreement);
          this.uploadService.pushFileToStorage(this.currentFileUploadTenancyAgreement, this.progressTenancyAgreement);

      } else if (input == 'Landlord Permission') {
          const fileLandlordPerm = this.selectedFilesLandlordPerm.item(0);
          this.currentFileUploadLandlordPerm = new FileUpload(fileLandlordPerm);
          this.uploadService.pushFileToStorage(this.currentFileUploadLandlordPerm, this.progressLandLordPerm);

      }
    }

}
