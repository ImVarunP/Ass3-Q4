import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousCompComponent } from './marvellous-comp/marvellous-comp.component';
import { MarvellouscompComponent } from './marvellouscomp/marvellouscomp.component';
import { MarvellouscomComponent } from './marvellouscom/marvellouscom.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousCompComponent,
    MarvellouscompComponent,
    MarvellouscomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
