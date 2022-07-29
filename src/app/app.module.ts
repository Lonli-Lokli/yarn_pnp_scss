import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TippyModule, tooltipVariation, popperVariation } from '@ngneat/helipopper';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TippyModule.forRoot({
    defaultVariation: 'tooltip',
    variations: {
      tooltip: tooltipVariation,
      popper: popperVariation,
    }
  })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
