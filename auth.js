// import { GoogleSignin } from '@react-native-google-signin/google-signin';


// async function exchangeAuthorizationCodeForToken(authorizationCode) {
//   try {
//     const clientID = '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com';
//     const clientSecret = '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';
//     const redirectURI = 'http://localhost:19006';
//     const tokenEndpoint = 'https://oauth2.googleapis.com/token';
//     const data = {
//       code: authorizationCode,
//       client_id: clientID,
//       client_secret: clientSecret,
//       redirect_uri: redirectURI,
//       grant_type: 'authorization_code',
//     };

//     const response = await fetch(tokenEndpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: Object.keys(data)
//         .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//         .join('&'),
//     });

//     const tokenResponse = await response.json();
//     if (tokenResponse.access_token) {
    
//       console.log('Access Token:', tokenResponse.access_token);
//     } else {
//       console.error('Error exchanging authorization code for token:', tokenResponse);
//     }
//   } catch (error) {
//     console.error('Error during token exchange:', error);
//   }
// }

// const authorizationCode = 'YOUR_AUTHORIZATION_CODE'; // Replace with the actual authorization code
// exchangeAuthorizationCodeForToken(authorizationCode);
