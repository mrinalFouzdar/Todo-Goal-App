import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({text,id,onDeleteItem}) => {
    // console.log("id",id)
  return (
    <View style={styles.goalItem}>
      <Pressable 
         android_ripple={{color:"white"}}
         onPress={onDeleteItem.bind(this,id)}
         style={({pressed})=>pressed && styles.pressedItem}
      >
      <Text style={styles.goalText}>{text}</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white",
      },
      pressedItem:{
        opacity:0.5
      },
      goalText: {
        color: "white",
        padding: 8,

      },
})

export default GoalItem;
