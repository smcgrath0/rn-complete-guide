import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function onChange(goal){
    setEnteredGoal(goal);
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
    console.log(enteredGoal);
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
        style={{width: 200, borderColor: 'black', borderWidth: 1, padding: 10}}
        placeholder="Course Goal"
        onChangeText={onChange}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={ addGoalHandler } />
      </View>
      <Text>Good Memes only!</Text>
      <View>
        {courseGoals.map( goal => {
          return (
          <View style={{borderWidth: 1, borderColor: 'black', width: 200,padding: 5, backgroundColor: 'rgba(155,155,155,0.5)'}}>
            <Text>{goal}</Text>
          </View>
          )
        })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
