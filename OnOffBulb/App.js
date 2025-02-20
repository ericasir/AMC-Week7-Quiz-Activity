import React, {useState} from 'react';
import {ScrollView, Switch, Text, View, Alert, TouchableOpacity} from 'react-native';

const MyChoices =() => {

  const[selectedChoices, setSelectedChoices] = React.useState({});

  const toggleSwitch = (choice1, choice2) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [choice1]: !prev[choice1],
      [choice2]: prev[choice1],
    }));

  };

  const handleSubmit = () => {
    const selected = Object.keys(selectedChoices). filter((key) => selectedChoices[key]);
    const message = seleted.length > 0
    ? seleted.map((choice, index) => `${index + 1}. ${choice}`).join(`\n`)
    : 'No choices selected'; 
    Alert.alert('Selected Choices', message);
  };

  const coffeePairs = [
    ['latte', 'cappuccino'],
    ['americano', 'espresso'],
    ['macchiato', 'mocha'],

  ];
  
  return (
    <ScrollView>
    <Text>My Choices</Text>
    {coffeePairs.map (([choice1, choice2]) => (
    <View key={choice1}>
    <Text>{choice1}</Text>
    <Switch
        value={selectedChoices[choice1] || false}
        onValueChange={() => toggleSwitch(choice1, choice2)}
        trackColor={{true: 'blue', false: 'grey'}}
        thumbColor={selectedChoices[choice1] ? 'blue' : 'grey'}
      />
      <Text>{choice2}</Text>
    </View>

     ))}
    <TouchableOpacity onPress={handleSubmit} > 

    <Text> Submit </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MyChoices;