import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import InputComponent from "./components/InputComponents";
import OutputComponent from "./components/OutputComponent";

export default function App() {
  const [goals, setgoals] = useState("");
  const [list, setlist] = useState([]);
  const [Open, setOpen] = useState(false);

  const textChange = text => {
    setgoals(text);
  };
  const addText = () => {
    if (goals === "" || goals === " ") {
      return;
    }
    setlist([
      ...list,
      {
        id: Math.random().toString(),
        value: goals
      }
    ]);
  };
  const resetText = () => {
    setlist([]);
  };

  const textDeleted = id => {
    setlist(list.filter(i => i.id !== id));
  };
  const clearText = () => {
    setgoals("");
  };
  const ModalChange = () => {
    if (Open) setOpen(false);
    else setOpen(true);
    clearText();
  };

  return (
    <View style={{ backgroundColor: "#CCDFE5" }}>
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>GOALS</Text>
      </View>
      <View style={{ padding: 30, paddingTop: 20 }}>
        <Button title="Add New Item in your List" onPress={ModalChange} />
        <InputComponent
          addText={addText}
          resetText={resetText}
          ChangeText={textChange}
          goal={goals}
          isOpen={Open}
          cancelText={ModalChange}
          clearText={clearText}
        />
        <OutputComponent list={list} textDeleted={textDeleted} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    height: "10%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
    backgroundColor: "#E66543"
  },
  headingTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    textShadowColor: "white",
    textShadowRadius: 54,
    textDecorationStyle: "dashed",
    width: 300,
    textAlign: "center",
    letterSpacing: 9
  }
});
