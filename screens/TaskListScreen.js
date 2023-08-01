import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { myFetchGetTasksList } from '../MyFetchApiRequests';

function TaskListScreen() {
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const taskListsData = await myFetchGetTasksList();
      setTaskLists(taskListsData);
    } catch (error) {
      console.error("Error fetching task lists:", error);
    }
  };


  const renderItem = ({ item }) => (
    <View style={styles.taskListContainer}>
      <Text style={styles.taskListTitle}>{item.taskLists}</Text>
     
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={taskLists}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  taskListContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  taskListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskListScreen;
