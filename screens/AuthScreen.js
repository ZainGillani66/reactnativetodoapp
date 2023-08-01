// import React, { useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { handleCallback } from '../api/googleTasksApi';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// // import * as WebBrowser from 'expo-web-browser';

// const AuthScreen = () => {
// //   const navigation = useNavigation();

//   useEffect(() => {
//     handleAuthCallback();
//   }, []);

//   const handleAuthCallback = async () => {
//     const url = ''; // Replace with the authentication callback URL you receive from Google
//     const code = ''; // Extract the code from the callback URL

//     try {
//       const oAuth2Client = await handleCallback(code);
//       const tokens = oAuth2Client.credentials;
//       await AsyncStorage.setItem('googleTaskCredentials', JSON.stringify(tokens));
//       navigation.navigate('TaskLists');
//     } catch (error) {
//       console.error('Authentication error:', error.message);
//     }
//   };

//   const handleAuth = async () => {
//     const redirectUrl = 'http://localhost:19006';

//     try {
//       const result = await WebBrowser.openAuthSessionAsync(
//         `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
//           redirectUrl
//         )}&scope=https://www.googleapis.com/auth/tasks`
//       );

      
//       if (result.type === 'success') {
//         const url = result.url;
//         const code = ''; 

     
//         await handleAuthCallback(code);
//       } else {
      
//         console.log('Authentication failed or canceled.');
//       }
//     } catch (error) {
//       console.error('Authentication error:', error.message);
     
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Google OAuth2 Authentication</Text>
//       <TouchableOpacity style={styles.button} onPress={handleAuth}>
//         <Text style={styles.buttonText}>Authenticate with Google</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#4285F4',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default AuthScreen;
