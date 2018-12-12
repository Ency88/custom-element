import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { TukeCustomElementComponent } from './tuke-custom-element/tuke-custom-element.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [TukeCustomElementComponent],
  imports: [
    BrowserModule
  ],
  entryComponents: [TukeCustomElementComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(TukeCustomElementComponent, {injector: this.injector});
    customElements.define('tp-custom-element', element);
  }
}
