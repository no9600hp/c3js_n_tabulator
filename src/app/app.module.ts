import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ModalComponent, ParentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
