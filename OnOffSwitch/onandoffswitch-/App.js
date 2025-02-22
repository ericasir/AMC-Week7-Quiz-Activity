import React, { useState } from 'react';
import { ScrollView, Switch, Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const MyChoices = () => {
  const [selectedChoices, setSelectedChoices] = useState({});

  const toggleSwitch = (choice1, choice2) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [choice1]: !prev[choice1],
      [choice2]: prev[choice1],
    }));
  };

  const handleSubmit = () => {
    const selected = Object.keys(selectedChoices).filter((key) => selectedChoices[key]);
    const message = selected.length > 0
      ? selected.map((choice, index) => `${index + 1}. ${choice}`).join('\n')
      : 'No choices selected';
    Alert.alert('Selected Choices', message);
  };

  const coffeePairs = [
    ['Green', 'Yellow'],
    ['Polo', 'T-shirts'],
    ['Ballpen', 'Usb'],
    ['Laptop', 'PC'],
    ['x', '+'],
    ['Coffee', 'Tea'],
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Choices</Text>
      {coffeePairs.map(([choice1, choice2]) => (
        <View key={choice1} style={styles.choiceContainer}>
          <Text style={styles.choiceText}>{choice1}</Text>
          <Switch
            value={selectedChoices[choice1] || false}
            onValueChange={() => toggleSwitch(choice1, choice2)}
            trackColor={{ true: 'blue', false: 'grey' }}
            thumbColor={selectedChoices[choice1] ? 'blue' : 'grey'}
          />
          <Text style={styles.choiceText}>{choice2}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  choiceText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyChoices;