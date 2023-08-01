// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import React from 'react';
// // import { configure } from 'react-native-dotenv';
// import TokenPage from './screens/TokenPage'; 
// import TaskListScreen from './screens/TaskListScreen'; 
// // import GoogleTaskAPI from './screens/GoogleTaskAPI'; 


// // configure();

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="TokenPage">
//         <Stack.Screen name="TODO App" component={TokenPage} />
//         <Stack.Screen name="TaskListScreen" component={TaskListScreen} />
//         {/* <Stack.Screen name="GoogleTaskAPI" component={OAuthScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



// // App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OAuthScreen from './OAuthScreen';
import MainAppScreen from './MainAppScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OAuthScreen" component={OAuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainAppScreen" component={MainAppScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;









// import React from 'react';
// import { View } from 'react-native';
// import GoogleTaskApp from './GoogleTaskApp';

// function App() {
//   return (
//     <View style={{ flex: 1 }}>
//       <GoogleTaskApp />
//     </View>
//   );
// }

// export default App;


// import React from 'react';
// import { View, Button } from 'react-native';
// import { authorize } from 'react-native-app-auth';
// import axios from 'axios';

// const config = {
//   issuer: 'https://accounts.google.com',
//   clientId: '20683120727-c2077cnt279jihraf7gm0p76rhceealh.apps.googleusercontent.com',
//   clientSecret: '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',
//   redirectUrl: 'http://localhost:19006',
//   scopes: ['https://www.googleapis.com/auth/tasks'],
// };

// async function getURLTasks() {
//   try {
//     const result = await authorize(config);
//     console.log(result);
//     return result.accessToken;
//   } catch (error) {
//     console.log('OAuth Error: ', error);
//     throw error;
//   }
// }

// async function createTaskList(accessToken) {
//   try {
//     const result = await axios({
//       method: 'POST',
//       headers: {
//         Authorization: 'Bearer ' + accessToken,
//         'Content-Type': 'application/json',
//       },
//       url: 'https://tasks.googleapis.com/tasks/v1/users/@me/lists',
//       data: {
//         title: 'TODO Task List',
//       },
//     });

//     console.log(result.data);
//     return result.data;
//   } catch (error) {
//     console.log('API Error: ', error);
//     throw error;
//   }
// }

// function App() {
//   const handleLogin = async () => {
//     try {
//       const accessToken = await getURLTasks();
//       console.log('Access Token: ', accessToken);
//       // Store accessToken in your app's state or context for later use.
//     } catch (error) {
//       console.log('Login Error: ', error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Login with Google" onPress={handleLogin} />
//     </View>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [accessToken, setAccessToken] = useState('');
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskCreationMessage, setTaskCreationMessage] = useState('');

//   const handleCreateTaskList = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:3000/createTaskList',
//         {
//           accessToken: accessToken,
//           title: taskTitle,
//         }
//       );

//       setTaskCreationMessage(response.data);
//     } catch (error) {
//       console.log('Error creating the task list:', error);
//       setTaskCreationMessage('Error creating the task list. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Access Token"
//         onChangeText={(text) => setAccessToken(text)}
//         value={accessToken}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Task Title"
//         onChangeText={(text) => setTaskTitle(text)}
//         value={taskTitle}
//       />
//       <Button title="Create Task List" onPress={handleCreateTaskList} />
//       <Text>{taskCreationMessage}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default App;



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, Linking } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { myFetchGetUrlRequest } from './MyFetchApiRequests';

// export default function App() {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const res = await myFetchGetUrlRequest();
//       console.log("Zain", res);
//       setResponseData(res);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleButtonPress = async () => {
//     await getData();
//     if (responseData) {
//       const url = responseData.url;
//       Linking.openURL(url);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Text>Data from API: {responseData ? JSON.stringify(responseData) : 'No data available.'}</Text> */}
//       <Button title="Open Response URL" onPress={handleButtonPress} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, Linking } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { myFetchGetUrlRequest } from './MyFetchApiRequests';

// export default function App() {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const res = await myFetchGetUrlRequest();
//       console.log("Zain", res);
//       setResponseData(res);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleButtonPress = async () => {
//     await getData();
//     if (responseData && responseData.url) {
//       const url = responseData.url;
//       const isLocalhost = url.includes('localhost') && !/http:\/\/(localhost|127\.0\.0\.1)/.test(url);
//       if (isLocalhost) {
//         // Open URL in the browser of the emulator/simulator
//         Linking.openURL(url);
//       } else {
//         console.log("Redirecting to:", url);
//         Linking.openURL('http://' + url);
//       }
//     }
//   };

//   return (

//     <View style={styles.container}>
//       {/* <Text>Data from API: {responseData ? JSON.stringify(responseData) : 'No data available.'}</Text> */}
//       <Button title="Open Response URL" onPress={handleButtonPress} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
