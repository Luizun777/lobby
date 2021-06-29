// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // urlApi: 'http://localhost:5000/api/lobby/',
  // urlApi: 'https://still-eyrie-33337.herokuapp.com/api/lobby/'
  urlApi: 'https://app-lobby-luizun.herokuapp.com/api/lobby/',
  firebaseConfig: {
    apiKey: "AIzaSyB1sY_ly06LDEwMEb2pg31Bjd9UroNbKnY",
    authDomain: "lovy-ef15f.firebaseapp.com",
    projectId: "lovy-ef15f",
    storageBucket: "lovy-ef15f.appspot.com",
    messagingSenderId: "590150416104",
    appId: "1:590150416104:web:51d661e06b8d237de3fb5d",
    measurementId: "G-QJ2Y1V55VK"
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
