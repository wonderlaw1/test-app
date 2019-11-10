// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {FirebaseAppConfig} from '@angular/fire';

interface AppEnv {
  production: boolean;
  firebaseConfig: FirebaseAppConfig;
}

export const environment: AppEnv = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBsU9xSSNiW_WKZejh1sC60nHGCiIEHwTE',
    authDomain: 'angular-pro-46357.firebaseapp.com',
    databaseURL: 'https://angular-pro-46357.firebaseio.com',
    projectId: 'angular-pro-46357',
    storageBucket: 'angular-pro-46357.appspot.com',
    messagingSenderId: '321075356107',
    appId: '1:321075356107:web:a8bcd4fec12e12d9dd564e',
    measurementId: 'G-9VD6FTVZCL'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
