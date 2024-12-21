import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal,FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  

  // modalın visible durumunu true yapan method
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  // modalın visible durumunu false yapan method
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }


  // yeni girilen görevleri statede tutar ve eski girilenleri de listeler.
  function addGoalHandler(enteredGoalText){  
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal) => goal.id !== id ); 
      // hedefin id si ile tıkladığımız componentin id'si eşit ise false 
      // dönderip filter methodu sayesinde silecek. true değer döndüğünde 
      // (id'ler biribirinden farklı olduğu durum) filter methodu silmez.
      // filter methodu elemanları tek tek dolaşmayı sağlar. 
    });
  };

  return (
    <>
    <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#530acc' onPress={startAddGoalHandler} />
          <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
           <View style={styles.goalsContainer} >
             <FlatList 
               data={courseGoals}
               renderItem={(itemData) =>{
                 return <GoalItem text= {itemData.item.text} 
                         id = {itemData.item.id}
                         onDeleteItem={deleteGoalHandler}/> 
               }}
               alwaysBounceVertical = {false}
             />
           </View>
       </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:'#b180f0',
  },
  goalsContainer:{
    flex:5,
  },
 
});
