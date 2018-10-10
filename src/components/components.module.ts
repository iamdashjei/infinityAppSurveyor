import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MultipleImageUploadComponent } from './multiple-image-upload/multiple-image-upload';
import { SignaturePadComponent } from './signature-pad/signature-pad';
import { UploadedImagesComponent } from './uploaded-images/uploaded-images';
import { SolidWallComponent } from './solid-wall/solid-wall';
@NgModule({
	declarations: [MultipleImageUploadComponent,
    SignaturePadComponent,
    UploadedImagesComponent,
    SolidWallComponent],
	imports: [],
	exports: [MultipleImageUploadComponent,
    SignaturePadComponent,
    UploadedImagesComponent,
    SolidWallComponent]
})
export class ComponentsModule {}
