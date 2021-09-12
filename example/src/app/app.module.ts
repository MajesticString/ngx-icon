import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIconModule } from 'ngx-icon';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
