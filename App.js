import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList } from "react-native";
import { Button, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  // This fn responsible for adding data into the list array.
  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText)
    setCourseGoals((currentCountGoals) => [
      ...currentCountGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  // This fn responsible for removing data from the array.
  function deleteGoalHandler(id) {
    // console.log(id)
    setCourseGoals((currentCountGoals) => {
      return currentCountGoals.filter((goal) => goal.key !== id);
    });
  }

  // This fn responsible for enable or disablel the modal

  function modalIsVisibleHandle(value) {
    setModalIsVisible(value);
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={()=>modalIsVisibleHandle(true)}
      />
      {modalIsVisible && 
      <GoalInput
       addGoalHandler={addGoalHandler}
       visible={modalIsVisible}
       modalIsVisibleHandle={modalIsVisibleHandle}
       />}

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          // keyExtractor={(item, index)=>{
          //   return item.id;
          // }}

          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:"#1e085a"
  },
  goalsContainer: {
    flex: 3,
  },
});
