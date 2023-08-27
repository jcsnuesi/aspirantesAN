import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { HomeComponent } from './components/home/home.component';

import { routing, appRoutingProviders } from './router';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFileUploaderModule,
    routing
  
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
