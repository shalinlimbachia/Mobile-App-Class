import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function add() {
    if (num1 === '' || num2 === '') 
    {
      alert('Do not leave blank spaces!');
    } 
    else 
    {
      const result = parseFloat(num1) + parseFloat(num2);
      alert('The result is: ' + result);
    }
  }

  function subtract() {
    if (num1 === '' || num2 === '') {
      alert('Do not leave blank spaces!');
    } else {
      const result = parseFloat(num1) - parseFloat(num2);
      alert('The result is: ' + result);
    }
  }

  function multiply() {
    if (num1 === '' || num2 === '') {
      alert('Do not leave blank spaces!');
    } else {
      const result = parseFloat(num1) * parseFloat(num2);
      alert('The result is: ' + result);
    }
  }

  function divide() {
    if (num1 === '' || num2 === '') {
      alert('Do not leave blank spaces!');
    } else {
      const result = parseFloat(num1) / parseFloat(num2);
      alert('The result is: ' + result);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Calculator </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter a number"
        onChangeText={(num1) => setNum1(num1)}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter a number"
        onChangeText={(num2) => setNum2(num2)}
      />

      <TouchableOpacity style={styles.button} onPress={add}>
        <Text style={styles.buttonTitle}> Add </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={subtract}>
        <Text style={styles.buttonTitle}> Subtract </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={multiply}>
        <Text style={styles.buttonTitle}> Multiply </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={divide}>
        <Text style={styles.buttonTitle}> Divide </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#234234',
    padding: 20,
  },
  title: {
    margin: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: '#FDFACA',
    borderRadius: 15,
    margin: 15,
    padding: 1,
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFAA33',
    margin: 10,
    borderRadius: 10,
    padding: 0,
    alignItems: 'left',
  },
  buttonTitle: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});