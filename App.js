import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState('')


  function onChange(goal){
    setEnteredGoal(goal);
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
    console.log(enteredGoal);
  }

  const goalModalOpen = (goal) => {
    setModalOpen(true);
    setCurrentGoal(goal)
  }

  const deleteGoal = (goal) => {
    const newCourseGoals = courseGoals.filter(courseGoal => {
      if (courseGoal !== goal) {
        return courseGoal
      }
    });
    setCourseGoals(newCourseGoals);
    setModalOpen(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Course Goal"
        onChangeText={onChange}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={ addGoalHandler } />
      </View>
      <Text>Good Memes only!</Text>
      <View>
        {
          courseGoals.map( (goal, index) => {
          return (
          <View key={index} style={styles.goal}>
            <Text>{goal}</Text>
            <Button title="Press me" onPress={() => {
              goalModalOpen(goal);
            }} />
          </View>
          )
        })
        }
      </View>
      {modalOpen
        ? <View style={styles.modalContainer}>
            <Text>Do you want to delete this goal?</Text>
            <Button title="DELETE" onPress={() => deleteGoal(currentGoal)}/>
          </View>
        : <View></View>
      }

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
  goal: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    padding: 5,
    backgroundColor: 'rgba(155,155,155,0.5)'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  modalContainer: {
    display: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(100,100,100,0.5)',
    padding: 50
  }
});
