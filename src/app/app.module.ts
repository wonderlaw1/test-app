import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { AppComponent } from './containers/app/app.component';
import {environment} from '../environments/environment';

import {Store} from 'store';
import {AuthModule} from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-pro-46357'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AuthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
