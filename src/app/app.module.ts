import { LoginComponent } from './pages/login/login.component';
import { ListingComponent } from './pages/listing/listing.component';
import { ImaggingComponent } from './pages/imagging/imagging.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





// =============================================My imports below
// Angular n other imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Error404Component } from './MISC/error404/error404.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImaggingComponent,
    ListingComponent,
    LoginComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
