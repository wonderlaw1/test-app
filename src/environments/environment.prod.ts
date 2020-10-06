import { FirebaseAppConfig } from '@angular/fire';

interface AppEnv {
  production: boolean;
  firebaseConfig: FirebaseAppConfig;
}

export const environment: AppEnv = {
  production: true,
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
