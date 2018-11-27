import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { MatButtonModule, MatIconModule, MatTableModule } from '@angular/material';
import {FilesystemService} from './filesystem.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [FilesystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
