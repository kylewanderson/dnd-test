import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    FormsModule,
    MaterialModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
