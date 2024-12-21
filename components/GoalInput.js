import React , {useState} from 'react';
import { StyleSheet, View, Text,TextInput,Button,Modal ,Image} from 'react-native';

function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState('');

    // yeni görevle girmemizi sağlayan function
    function goalInputHandler(enteredText) { // textInput içerisindeki onchangeText özelliği içerisinde kullanıyoruz.
    setEnteredGoalText(enteredText);  
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');// her değer girdisi sonrasında butona basıldığında enteredGoalText değeri sıfırlanır.
    }

    return(
    <Modal visible={props.visible} animationType='slide'  >      
        <View style= {styles.inputContainer} >
            <Image style={styles.image} source={require('../assets/image/goal.png')} />
            <TextInput 
              style = {styles.textInput}
              placeholder='Your course goal!'
              onChangeText={goalInputHandler}
              value={enteredGoalText} // her girdi sonrası enteredGoalText değerini alır (aslında her girdi sonrası boş bir textInput için böyle yaptık )
            />
            <View style={styles.buttonContainer} >
               <View style={styles.Button} >
                    <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0'/>
                
                </View> 
               <View  style={styles.Button} >
                    <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                </View> 
            </View>
        </View>
    </Modal>     
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#311b6b',
        padding:16,
      },
      image:{
        width:100,
        height:100,
        padding:20,        
      },
      textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438' ,
        borderRadius:6,
        width:'100%',
        padding:15,
        
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:'row',
      },
      Button:{
        marginHorizontal:8,
        width:100
      },
})