import React from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

export default function InputComponent(props) {
  return (
    <Modal visible={props.isOpen} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter here your goals"
          style={styles.inputText}
          onChangeText={props.ChangeText}
          value={props.goals}
        />
        <View style={styles.buttons}>
          <View style={styles.buttonsWidth}>
            <Button title="CLEAR" onPress={props.clearText} color="purple" />
          </View>
          <View style={styles.buttonsWidth}>
            <Button title="ADD" onPress={props.addText} color="green" />
          </View>
          <View style={styles.buttonsWidth}>
            <Button
              title="CANCEL"
              onPress={props.cancelText.bind(this)}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputText: {
    borderBottomColor: "skyblue",
    borderBottomWidth: 1,
    marginTop: 5,
    paddingTop: 5,
    marginVertical: "3%",
    overflow: "hidden",
    width: "80%",
    textAlign: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%"
  },
  marginRightS: {
    marginRight: 50
  },
  buttonsWidth: {
    width: "30%"
  }
});
