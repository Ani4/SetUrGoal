import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function OutputComponent(props) {
  return (
    <FlatList
      keyExtractor={(item, index) => `${item.id}`}
      data={props.list}
      style={styles.list}
      renderItem={item => (
        <TouchableOpacity onPress={props.textDeleted.bind(this, item.item.id)}>
          <View style={styles.listItem}>
            <Text> {item.item.value}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 5,
    marginTop: "10%",
    height: "90%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
    marginTop: 10,
    backgroundColor: "#EF886B",
    // backgroundColor: "rgba(25, 255, 255, 0.05)",
    padding: "3%"
  },
  listNumber: { color: "red" }
});
