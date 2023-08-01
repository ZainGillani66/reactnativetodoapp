import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const MainAppScreen = ({ route }) => {
  const { accessToken } = route.params;
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://tasks.googleapis.com/tasks/v1/users/@me/lists', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTasks(response.data.items);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching tasks:', error);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Task List</Text>
      {loading ? (
        <Text>Loading tasks...</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}
      <Button title="Logout" onPress={() => handleLogout()} />
    </View>
  );
};

export default MainAppScreen;








// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// import axios from 'axios';

// const MainAppScreen = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const accessToken = 'YOUR_ACCESS_TOKEN'; // Retrieve the access token from AsyncStorage or Redux state.

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://tasks.googleapis.com/tasks/v1/users/@me/lists', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       setTasks(response.data.items);
//       setLoading(false);
//     } catch (error) {
//       console.log('Error fetching tasks:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Task List</Text>
//       {loading ? (
//         <Text>Loading tasks...</Text>
//       ) : (
//         <FlatList
//           data={tasks}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => <Text>{item.title}</Text>}
//         />
//       )}
//       <Button title="Logout" onPress={() => handleLogout()} />
//     </View>
//   );
// };

// export default MainAppScreen;