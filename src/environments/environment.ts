// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseAppConfig } from '@angular/fire';

interface AppEnv {
  production: boolean;
  firebaseConfig: FirebaseAppConfig;
}

export const environment: AppEnv = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA2HTghLf4CWs-CoDZN1B9EAs9COyVQROE',
    authDomain: 'angular-pro-93fe1.firebaseapp.com',
    databaseURL: 'https://angular-pro-93fe1.firebaseio.com',
    projectId: 'angular-pro-93fe1',
    storageBucket: 'angular-pro-93fe1.appspot.com',
    messagingSenderId: '416970614087',
    appId: '1:416970614087:web:dd901deb688c7ad6601862',
    measurementId: 'G-15RCV59T9H'
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
