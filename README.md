# ngx-icon

An Angular service that can dynamically change the tab icon.

## Usage

Import this module:

```ts
import { NgModule } from '@angular/core';

import { NgxIconModule } from 'ngx-icon';

@NgModule({
  imports: [
    //other imports
    NgxIconModule,
  ],
  ...
})
export class AppModule {}
```

```ts
import { Component } from '@angular/core';
import { NgxIconService } from 'ngx-icon';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [],
})
export class AppComponent {
  constructor(private iconService: NgxIconService) {
    this.iconService.setIcon('whatever. Relative to the index.html.');
  }
}
```
