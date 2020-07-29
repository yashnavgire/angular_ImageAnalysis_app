// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = 
{
  production: false,
  // Add this to access firebase in our project
  firebase :
  {
    apiKey: "AIzaSyDMxDDJGyIDyhfH8i-Jme3OPoE1M8p0o90",
    authDomain: "angulardemo-72844.firebaseapp.com",
    databaseURL: "https://angulardemo-72844.firebaseio.com",
    projectId: "angulardemo-72844",
    storageBucket: "angulardemo-72844.appspot.com",
    messagingSenderId: "926882163006",
    appId: "1:926882163006:web:8cb3b3e45b77a61f96e46f",
    measurementId: "G-YXMSY1M01F"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
