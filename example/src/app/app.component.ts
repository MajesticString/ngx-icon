import { Component } from '@angular/core';
import { NgxIconService } from 'ngx-icon';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [],
})
export class AppComponent {
  constructor(private iconService: NgxIconService) {
    this.iconService.setIcon(
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
    );
  }
}
