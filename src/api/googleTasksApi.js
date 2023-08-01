// import axios from 'axios';
// import { google } from 'googleapis';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const TASKS_API_URL = 'https://tasks.googleapis.com/tasks/v1';
// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

// const getOAuth2Client = async () => {
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
//     throw new Error('Authentication required.');
//   }
// };

// export const authenticate = async () => {
//   const oAuth2Client = await getOAuth2Client();

//   try {
//     const response = await axios.get(`${TASKS_API_URL}/users/@me/lists`, {
//       headers: {
//         Authorization: `Bearer ${oAuth2Client.credentials.access_token}`,
//       },
//     });

//     const taskLists = response.data.items;
//     return taskLists;
//   } catch (error) {
//     console.error('Error fetching task lists:', error.message);
//     throw error;
//   }
// };
