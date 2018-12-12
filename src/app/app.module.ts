import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TukeCustomElementComponent} from './tuke-custom-element/tuke-custom-element.component';

@NgModule({
  declarations: [TukeCustomElementComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [TukeCustomElementComponent],
  providers: []
})
export class AppModule {}
