import React, { useEffect, useState } from 'react';
import { View, Button, Linking, StyleSheet } from 'react-native';
import { myFetchGetUrlRequest } from '../MyFetchApiRequests';
import { useNavigation } from '@react-navigation/native';
import TaskListScreen from './TaskListScreen';
import OAuthScreen from './OAuthScreen'; 

function TokenPage() {
  const [responseData, setResponseData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await myFetchGetUrlRequest();
      console.log("Zain", res);
      setResponseData(res);
      return res;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleButtonPress = async () => {
    const newData = await getData();
    // if (responseData) {
    //   const url = responseData.url;
console.log("ZainnnnnnnnData", newData);
// if(responseData === "success"){

// }
      // Linking.openURL(url);
      // navigation.navigate('TaskListScreen');
    //   navigation.navigate('OAuthScreen');
    // }
  };

  return (
    <View style={styles.container}>
      <Button title="Google Authentication" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TokenPage;




// import React, { useEffect, useState } from 'react';
// import { View, Button, Linking, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { myFetchGetUrlRequest } from '../MyFetchApiRequests';
// import TaskListScreen from './TaskListScreen';


// function TokenPage() {
//   const [responseData, setResponseData] = useState(null);
//   const navigation = useNavigation();

//   useEffect(() => {
//     Linking.addEventListener('url', handleOpenURL);
//     return () => Linking.removeEventListener('url', handleOpenURL);
//   }, []);

//   const handleOpenURL = async (event) => {
//     const { queryParams } = Linking.parse(event.url);
//     const accessToken = queryParams.accessToken;
//     console.log("Access Token:", accessToken);

//     navigation.navigate('TaskListScreen', { accessToken });
//   };

//   const handleButtonPress = async () => {

//     await getData();
//     if (responseData) {
//       const url = responseData.url;
//       Linking.openURL(url);
//     }
//   };

//   const getData = async () => {
 
//     try {
//       const res = await myFetchGetUrlRequest();
//       console.log("Zain", res);
//       setResponseData(res);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Google Authentication" onPress={handleButtonPress} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default TokenPage;





