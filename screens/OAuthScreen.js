import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';


const OAuthScreen = () => {
  const navigation = useNavigation();

  const oauthConfig = {
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    redirectUri: 'http://localhost:19006',
    clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
    scopes: 'https://www.googleapis.com/auth/tasks',
  };

  const handleTokenExchange = async (code) => {
    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${oauthConfig.redirectUri}&client_id=${oauthConfig.clientId}`,
      });

      const data = await response.json();
      const accessToken = data.access_token;
      console.log('Access Token:', accessToken);

      navigation.navigate('MainAppScreen', { accessToken });
    } catch (error) {
      console.log('Token Exchange Error:', error);
    }
  };

  const openBrowserAsync = async () => {
    try {
      const authUrl = `${oauthConfig.authorizationEndpoint}?response_type=code&client_id=${oauthConfig.clientId}&redirect_uri=${oauthConfig.redirectUri}&scope=${oauthConfig.scopes}`;
      const result = await WebBrowser.openAuthSessionAsync(authUrl);
      console.log("Zainnnnnnnn", result);
      alert('Zainnnn');
      // return false;
      
      if (result.type === 'success' && result.url) {
        
        const urlParams = result.url.split('?')[1];
        const code = new URLSearchParams(urlParams).get('code');
        if (code) {
          handleTokenExchange(code);
        } else {
          console.log('Authorization Code Not Found');
        }
      } else if (result.type === 'cancel') {
       
        console.log('User Cancelled the Login Process');
      } else if (result.type === 'dismiss') {
      
        console.log('User Dismissed the Web Authentication Flow');
      } else {
    
        console.log('Error during web authentication:', result);
      }
    } catch (error) {
      console.log('WebBrowser Error:', error);
    }
  };

  useEffect(() => {
    openBrowserAsync();
  }, []);
  

  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default OAuthScreen;