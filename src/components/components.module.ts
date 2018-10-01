import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MultipleImageUploadComponent } from './multiple-image-upload/multiple-image-upload';
import { SignaturePadComponent } from './signature-pad/signature-pad';
import { UploadedImagesComponent } from './uploaded-images/uploaded-images';
@NgModule({
	declarations: [MultipleImageUploadComponent,
    SignaturePadComponent,
    UploadedImagesComponent],
	imports: [],
	exports: [MultipleImageUploadComponent,
    SignaturePadComponent,
    UploadedImagesComponent]
})
export class ComponentsModule {}
