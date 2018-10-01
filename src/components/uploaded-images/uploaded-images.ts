import { Component } from '@angular/core';

/**
 * Generated class for the UploadedImagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'uploaded-images',
  templateUrl: 'uploaded-images.html'
})
export class UploadedImagesComponent {

  text: string;

  constructor() {
    console.log('Hello UploadedImagesComponent Component');
    this.text = 'Hello World';
  }

}
