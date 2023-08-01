// import { google } from 'googleapis';
// import { AsyncStorage } from 'react-native';


// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

// export const authenticate = async () => {
//   const credentials = await AsyncStorage.getItem('googleTaskCredentials');
//   if (credentials) {
//     const { access_token, refresh_token, expiry_date } = JSON.parse(credentials);
//     const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
//     oAuth2Client.setCredentials({
//       access_token,
//       refresh_token,
//       expiry_date,
//     });
//     return oAuth2Client;
//   } else {
//     const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
//     const authUrl = oAuth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: ['https://www.googleapis.com/auth/tasks'],
//     });
//     return authUrl;
//   }
// };

// export const handleCallback = async (code) => {
//   const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
//   const { tokens } = await oAuth2Client.getToken(code);
//   oAuth2Client.setCredentials(tokens);
//   await AsyncStorage.setItem('googleTaskCredentials', JSON.stringify(tokens));
//   return oAuth2Client;
// };
