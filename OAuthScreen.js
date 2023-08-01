// import React, { useState } from 'react';
// import { View, Button, Text } from 'react-native';
// import { prefetchConfiguration } from 'react-native-app-auth';
// import axios from 'axios';

// const config = {
//   warmAndPrefetchChrome: true,
//   issuer: 'https://accounts.google.com',
//   clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//   redirectUrl: 'http://localhost:19006',
//   scopes: ['https://www.googleapis.com/auth/tasks'],
// };

// function GoogleTaskApp() {
//   const [accessToken, setAccessToken] = useState(null);

//   const handleLogin = async () => {
//     try {
//       const result = await prefetchConfiguration(config);
//       console.log(result);
//       setAccessToken(result.accessToken);
//     } catch (error) {
//       console.log('OAuth Error: ', error);
//     }
//   };

//   const handleCreateTaskList = async () => {
//     try {
//       if (!accessToken) {
//         console.log('Access Token is not available. Please log in first.');
//         return;
//       }

//       const result = await axios.post(
//         'https://tasks.googleapis.com/tasks/v1/users/@me/lists',
//         { title: 'Toooodooooooo' },
//         {
//           headers: {
//             Authorization: 'Bearer ' + accessToken,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log(result.data);
//     } catch (error) {
//       console.log('API Error: ', error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>{accessToken ? 'Logged In' : 'Not Logged In'}</Text>
//       <Button title="Login with Google" onPress={handleLogin} />
//       {accessToken && (
//         <Button title="Create Task List" onPress={handleCreateTaskList} />
//       )}
//     </View>
//   );
// }

// export default GoogleTaskApp;

// For WEBVIEW
// import React, { useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import { WebView } from 'react-native-webview';

// const OAuthScreen = () => {
//   const navigation = useNavigation();

//   const oauthConfig = {
//     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
//     redirectUri: 'http://localhost:19006',
//     clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//     scopes: 'https://www.googleapis.com/auth/tasks',
//   };

//   const handleTokenExchange = async (code) => {
//     try {
//       const response = await axios.post('https://oauth2.googleapis.com/token', {
//         grant_type: 'authorization_code',
//         code: code,
//         redirect_uri: oauthConfig.redirectUri,
//         client_id: oauthConfig.clientId,
//         scopes: oauthConfig.scopes,
//         client_secret: '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',
//       });

//       const accessToken = response.data.access_token;
//       console.log('Access Token:', accessToken);

//       navigation.navigate('MainAppScreen', { accessToken });
//     } catch (error) {
//       console.log('Token Exchange Error:', error);
//     }
//   };

//   const handleNavigationStateChange = async (newNavState) => {
//     // Check if the WebView URL contains the redirectUri
//     if (newNavState.url.startsWith(oauthConfig.redirectUri)) {
//       // Parse the URL to get the authorization code
//       const urlParams = newNavState.url.split('?')[1];
//       const code = new URLSearchParams(urlParams).get('code');

//       if (code) {
//         // If code is present, handle token exchange
//         handleTokenExchange(code);
//       } else {
//         // Handle the case when the URL doesn't contain the authorization code
//         console.log('Authorization Code Not Found');
//       }
//     }
//   };

//   useEffect(() => {
//     // Open the Google OAuth authorization page in the WebView
//     const authUrl = `${oauthConfig.authorizationEndpoint}?response_type=code&client_id=${oauthConfig.clientId}&redirect_uri=${oauthConfig.redirectUri}&scope=${oauthConfig.scopes}`;
//     Linking.openURL(authUrl);
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <WebView
//         source={{ uri: oauthConfig.authorizationEndpoint }}
//         onNavigationStateChange={handleNavigationStateChange}
//         startInLoadingState={true}
//         renderLoading={() => <ActivityIndicator size="large" />}
//       />
//     </View>
//   );
// };

// export default OAuthScreen;






// import React, { useState } from 'react';
// import { View, ActivityIndicator, Button } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// const OAuthScreen = () => {
//   const navigation = useNavigation();

//   const oauthConfig = {
//     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
//     redirectUri: 'https://7959-103-152-116-115.ngrok-free.app',
//     clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//     scopes: 'https://www.googleapis.com/auth/tasks',
//   };

//   const [isAuthenticating, setIsAuthenticating] = useState(false);

//   const handleTokenExchange = async (code) => {
//     try {
//       const response = await axios.post('https://oauth2.googleapis.com/token', {
//         grant_type: 'authorization_code',
//         code: code,
//         redirect_uri: oauthConfig.redirectUri,
//         client_id: oauthConfig.clientId,
//         scopes: oauthConfig.scopes,
//         client_secret: "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",
//       });

//       const accessToken = response.data.access_token;
//       console.log('Access Token:', accessToken);

//       navigation.navigate('MainAppScreen', { accessToken });
//     } catch (error) {
//       console.log('Token Exchange Error:', error);
//     }
//   };

//   const openBrowserAsync = async () => {
//     if (!isAuthenticating) {
//       setIsAuthenticating(true);
//       try {
//         const authUrl = `${oauthConfig.authorizationEndpoint}?response_type=code&client_id=${oauthConfig.clientId}&redirect_uri=${oauthConfig.redirectUri}&scope=${oauthConfig.scopes}`;
//         const result = await WebBrowser.openAuthSessionAsync(authUrl);

//         if (result.type === 'success' && result.url) {
//           const urlParams = result.url.split('?')[1];
//           const code = new URLSearchParams(urlParams).get('code');
//           if (code) {
//             handleTokenExchange(code);
//           } else {
//             console.log('Authorization Code Not Found');
//           }
//         } else if (result.type === 'cancel') {
//           console.log('User Cancelled the Login Process');
//         } else if (result.type === 'dismiss') {
//           console.log('User Dismissed the Web Authentication Flow');
//         } else {
//           console.log('Error during web authentication:', result);
//         }
//       } catch (error) {
//         console.log('WebBrowser Error:', error);
//       } finally {
//         setIsAuthenticating(false);
//       }
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Button title="Login with Google" onPress={openBrowserAsync} />
//       {isAuthenticating ? <ActivityIndicator size="large" /> : null}
//     </View>
//   );
// };

// export default OAuthScreen;




// ////Correct Code Zain
// import React, { useEffect, useState } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { Linking } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import { InAppBrowser } from 'react-native-inappbrowser-reborn';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';



// const OAuthScreen = () => {
//   const navigation = useNavigation();

//   const oauthConfig = {
//     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
//     redirectUri: 'http://localhost:19006',
//     clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//     scopes: 'https://www.googleapis.com/auth/tasks',
//   };

//   const [isAuthenticating, setIsAuthenticating] = useState(false);

//   const handleTokenExchange = async (code) => {
//     try {
//       const response = await axios.post('https://oauth2.googleapis.com/token', {
//         grant_type: 'authorization_code',
//         code: code,
//         redirect_uri: oauthConfig.redirectUri,
//         client_id: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//         scopes: 'https://www.googleapis.com/auth/tasks',
//         // auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
//         client_secret:"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",
        
//       });

//       const accessToken = response.data.access_token;
//       console.log('Access Token:', accessToken);

      
//       navigation.navigate('MainAppScreen', { accessToken });
//     } catch (error) {
//       console.log('Token Exchange Error:', error);
//     }
//   };

//   const openBrowserAsync = async () => {
//     if (!isAuthenticating) {
//       setIsAuthenticating(true);
//       try {
        
      
//         const authUrl = `${oauthConfig.authorizationEndpoint}?response_type=code&client_id=${oauthConfig.clientId}&redirect_uri=${oauthConfig.redirectUri}&scope=${oauthConfig.scopes}`;
//         const result = await WebBrowser.openAuthSessionAsync(authUrl);
//         // window.location.href = authUrl;
//         console.log("Zainnnnnnn", result);
//         return false;
//         if (result.type === 'success' && result.url) {
//           const urlParams = result.url.split('?')[1];
//           const code = new URLSearchParams(urlParams).get('code');
//           if (code) {
//             handleTokenExchange(code);
//           } else {
//             console.log('Authorization Code Not Found');
//           }
//         } else if (result.type === 'cancel') {
        
//           console.log('User Cancelled the Login Process');
//         } else if (result.type === 'dismiss') {
         
//           console.log('User Dismissed the Web Authentication Flow');
//         } else {
        
//           console.log('Error during web authentication:', result);
//         }
//       } catch (error) {
//         console.log('WebBrowser Error:', error);
//       } finally {
//         setIsAuthenticating(false);
//       }
//       }
//   };

//   useEffect(() => {
//     openBrowserAsync();
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       {isAuthenticating ? <ActivityIndicator size="large" /> : null}
//     </View>
//   );
// };

// export default OAuthScreen;






import React, { useEffect } from 'react';
import { View, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import MainAppScreen from './MainAppScreen';

const OAuthScreen = () => {
  const navigation = useNavigation();

  const oauthConfig = {
    clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
    scopes: ['https://www.googleapis.com/auth/tasks'],
  };

  const discovery = {
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: oauthConfig.clientId,
      scopes: oauthConfig.scopes,
      redirectUri: makeRedirectUri({ native: 'https://file-management-system-a72f4.web.app' }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      handleTokenExchange(code);
      console.log('ZAAINN', code);
    }
  }, [response]);

  const handleTokenExchange = async (code) => {
    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${makeRedirectUri({
          native: 'https://file-management-system-a72f4.web.app',
        })}&client_id=${oauthConfig.clientId}`,
      });

      const data = await response.json();
      console.log('ZAIN', data);
      const accessToken = data.access_token;
      WebBrowser.dismissBrowser();

      navigation.navigate('MainAppScreen', { accessToken });
    } catch (error) {
      console.log('Token Exchange Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={!response} />
      {!response && (
        <View style={styles.buttonContainer}>
          <Button
            disabled={!request}
            title="Login with Google"
            onPress={() => {
              promptAsync();
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
});

export default OAuthScreen;









// // CODE OKKKAY
// import React, { useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import { useNavigation } from '@react-navigation/native';


// const OAuthScreen = () => {
//   const navigation = useNavigation();

//   const oauthConfig = {
//     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
//     redirectUri: 'http://localhost:19006',
//     clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//     scopes: 'https://www.googleapis.com/auth/tasks',
//   };

//   const handleTokenExchange = async (code) => {
//     try {
//       const response = await fetch('https://oauth2.googleapis.com/token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `grant_type=authorization_code&code=${code}&redirect_uri=${oauthConfig.redirectUri}&client_id=${oauthConfig.clientId}`,
//       });

//       const data = await response.json();
//       const accessToken = data.access_token;
//       console.log('Access Token:', accessToken);

//       navigation.navigate('MainAppScreen', { accessToken });
//     } catch (error) {
//       console.log('Token Exchange Error:', error);
//     }
//   };

//   const openBrowserAsync = async () => {
//     try {
//       const authUrl = `${oauthConfig.authorizationEndpoint}?response_type=code&client_id=${oauthConfig.clientId}&redirect_uri=${oauthConfig.redirectUri}&scope=${oauthConfig.scopes}`;
//       const result = await WebBrowser.openAuthSessionAsync(authUrl);
//       console.log("Zainnnnnnnn", result);
//       alert('Zainnnn');
//       // return false;
      
//       if (result.type === 'success' && result.url) {
        
//         const urlParams = result.url.split('?')[1];
//         const code = new URLSearchParams(urlParams).get('code');
//         if (code) {
//           handleTokenExchange(code);
//         } else {
//           console.log('Authorization Code Not Found');
//         }
//       } else if (result.type === 'cancel') {
       
//         console.log('User Cancelled the Login Process');
//       } else if (result.type === 'dismiss') {
      
//         console.log('User Dismissed the Web Authentication Flow');
//       } else {
    
//         console.log('Error during web authentication:', result);
//       }
//     } catch (error) {
//       console.log('WebBrowser Error:', error);
//     }
//   };

//   useEffect(() => {
//     openBrowserAsync();
//   }, []);
  

//   return (
//     <View style={{ flex: 1 }}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// };

// export default OAuthScreen;







// import React, { useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import WebView from 'react-native-webview';
// import axios from 'axios';

// const OAuthScreen = ({ navigation }) => {
//   const oauthConfig = {
//     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
//     tokenEndpoint: 'https://oauth2.googleapis.com/token',
//     clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//     redirectUri: 'https://661f-175-107-237-167.ngrok-free.app',
//     scopes: 'https://www.googleapis.com/auth/tasks',
//     response_type: 'code',
//   };

//   const handleTokenExchange = async (code) => {
//     try {
//       const response = await axios.post(oauthConfig.tokenEndpoint, {
//         grant_type: 'authorization_code',
//         code: code,
//         redirect_uri: oauthConfig.redirectUri,
//         client_id: oauthConfig.clientId,
//       });

//       const accessToken = response.data.access_token;
      
//       console.log('Access Token:', accessToken);

     
//       navigation.navigate('MainAppScreen');
//     } catch (error) {
//       console.log('Token Exchange Error:', error);
     
//     }
//   };

//   const handleNavigationStateChange = (newNavState) => {
    
//     if (newNavState.url.startsWith(oauthConfig.redirectUri)) {
     
//       const urlParams = newNavState.url.split('?')[1];
//       const code = new URLSearchParams(urlParams).get('code');

//       if (code) {
       
//         handleTokenExchange(code);
//       } else {
 
//         console.log('Authorization Code Not Found');
//       }
//     }
//   };

//   const authUrl = `${oauthConfig.authorizationEndpoint}?client_id=${oauthConfig.clientId}&redirect_uri=${encodeURIComponent(
//     oauthConfig.redirectUri
//   )}&response_type=${oauthConfig.response_type}&scope=${encodeURIComponent(oauthConfig.scopes)}`;

//   return (
//     <View style={{ flex: 1 }}>
//       <WebView
//         source={{ uri: authUrl }}
//         onNavigationStateChange={handleNavigationStateChange}
//         startInLoadingState={true}
//         renderLoading={() => <ActivityIndicator size="large" />}
//       />
//     </View>
//   );
// };

// export default OAuthScreen;


