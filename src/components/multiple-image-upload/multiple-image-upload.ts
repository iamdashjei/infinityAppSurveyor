import { Component } from '@angular/core';

/**
 * Generated class for the MultipleImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'multiple-image-upload',
  templateUrl: 'multiple-image-upload.html'
})
export class MultipleImageUploadComponent {

  text: string;

  constructor() {
    console.log('Hello MultipleImageUploadComponent Component');
    this.text = 'Hello World';
  }

}
