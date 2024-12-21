import React from 'react';
import { StyleSheet,View,Text ,Pressable} from 'react-native';

function GoalItem(props){
    return(
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedItem } //koşullu bir style oluşturduk; pressed , presseble itemı propertysinden geliyo ve butona tıklanıldığı an anlamında. şartımız ise butona tıklanıldığında style öğesi devreye girmesi için yapılmıştır. bunu ios için böyle yaptık android tarafında çok daha kolay android_ripple özelliği sayesinde dalgalanma efekti oluşturabilirsin basılabilen yerlerde.
                    > 
             <View style={styles.goalItem} >
                 <Text style={styles.goalText} > {props.text} </Text>
             </View> 
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius:6,
        backgroundColor:'#311b6b',
      },
      pressedItem :{
        opacity: 0.5,
      },
      goalText:{
        color:'white',
      },
})





