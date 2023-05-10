import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, visible,modalIsVisibleHandle }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    // console.log(enteredText)
    setEnteredGoalText(enteredText);
  }

  function addGoalHandlerWithInputValueChange() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
    modalIsVisibleHandle(false)
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/png-transparent-arrow-and-target-goal-bullseye-computer-icons-business-mission-statement-goal-icon-text-logo-bullseye-thumbnail.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="My course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandlerWithInputValueChange}
              color='#5e0acc'
            />
          </View>
          <View style={styles.button}>
            <Button 
             title="Cancel"
             onPress={()=>modalIsVisibleHandle(false)}
             color='#f31282'
             />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:'#311b6b'
  },
  image:{
    width:100,
    height:100,
    margin:20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:'#120438',
    borderRadius:6,
    width: "100%",
    marginEnd: 8,
    padding: 16,
  },
  buttonContainer: {
    marginTop:8,
    flexDirection: "row",
  },
  button:{
    width: '30%',
    marginHorizontal: 8
  }
});
export default GoalInput;
