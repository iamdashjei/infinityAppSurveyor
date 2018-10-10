import { Component } from '@angular/core';

/**
 * Generated class for the SolidWallComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'solid-wall',
  templateUrl: 'solid-wall.html'
})
export class SolidWallComponent {

  text: string;

  constructor() {
    console.log('Hello SolidWallComponent Component');
    this.text = 'Hello World';
  }

}
