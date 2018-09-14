import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MultipleImageUploadComponent } from './multiple-image-upload/multiple-image-upload';
import { SignaturePadComponent } from './signature-pad/signature-pad';
@NgModule({
	declarations: [MultipleImageUploadComponent,
    SignaturePadComponent],
	imports: [],
	exports: [MultipleImageUploadComponent,
    SignaturePadComponent]
})
export class ComponentsModule {}
