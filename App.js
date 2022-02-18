import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const[courseGoals, setCourseGoals] = useState([]);

const goalInputHandler =(enteredText) => {
  setEnteredGoal(enteredText);
};

const addGoalHandler =() =>{

  setCourseGoals(currentGoals => [
    ...courseGoals,
     {id: Math.random().toString(), value: enteredGoal }
    
    ]);
}

  return (
    <View style={styles.container}>
      
      <GoalInput onAddGoal = {addGoalHandler}/>

      <FlatList 
        keyExtractor={(item, index) => item.id} 
        data = {courseGoals}
        renderItem = {itemData => <GoalItem title= {itemData.item.value}/>
          
        }
      />
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },

  inputContainer:{
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems: 'center'
  },

  input:{
    width: '80%',
    borderBottomColor: 'black', 
    borderBottomWidth:1,
    padding:10
  }
});