import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  function handleAddTask() {
    const newTasks = taskItems.concat(task);
    setTaskItems(newTasks);
    setTask('');
  }
  function completeTask(index) {
    const itemsCopy = taskItems.concat();
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>What to do.</Text>
        <FlatList
          data={taskItems}
          keyExtractor={(index) => index.toString()}
          renderItem={({ index, item }) => (
            <TouchableOpacity onPress={() => completeTask(index)}>
              <View style={styles.table}>
                <View style={styles.taskRow}>
                  <TouchableOpacity style={styles.square}></TouchableOpacity>
                  <Text style={styles.taskText}>
                    {index} - {item}
                  </Text>
                  <View style={styles.circular}></View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            value={task}
            placeholder={'Write a task'}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={handleAddTask}>
            <View style={styles.addTask}>
              <Text style={styles.plusSign}>+</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    borderRadius: 5,
    backgroundColor: "#b3dfff"
    
  },
  title: {
    margin: 12,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  writeTaskWrapper: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 5,
    backgroundColor: '#fff',
    height: 45,
    fontSize: 15,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    flex: 0.99,
    borderRadius: 15,
  },
  addTask: {
    borderRadius: 30,
    backgroundColor: '#5929d2',
    flex: 0.01,
    width: 60,
  },
  plusSign: {
    fontSize: 50,
    paddingBottom: 6,
    textAlign: 'center',
    color: "#ffffff"
  },
  table: {
    borderRadius: 10,
  },
  taskText: {
    textAlign: 'center',
    fontSize: 18,
    flex: 1,
  },
  square: {
    backgroundColor: '#55BCF68F',
    borderColor: '#0005',
    flex: 0.05,
    height: 17,
    borderWidth: 1,
  },
  taskRow: {
    marginLeft: 3,
    marginRight: 3,
    flexDirection: 'row',
    backgroundColor: '#fff1',
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  circular: {
    marginRight: 2,
    borderColor: '#0005',
    borderRadius: 15,
    borderWidth: 1,
    height: 17,
    flex: 0.05,
  },
});
export default App;
