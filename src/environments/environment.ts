// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// require('dotenv').config();

// import * as dotenv from 'dotenv';
// dotenv.config();

export const environment = {
  production: false,
  baseUrl: 'https://tt14fcsdjd.execute-api.us-east-1.amazonaws.com/dev/api/v1',
  
  // google_auth0_clientId: `${process.env.Google_Auth0_ClientId}`,
  // facekbook_auth0_clientId : `${process.env.Facekbook_Auth0_ClientId}`,
  // linkedin_auth0_clientId : ``
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
