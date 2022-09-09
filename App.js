import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput, Alert } from "react-native";

export default function App() {
  let firstColor = "red";
  let firstBackground = "blue";
  const [secondColour, setSecondColour] = useState("pink");
  const [secondBackground, setSecondBackground] = useState("green");
  const [weekDay, setWeekDay] = useState();
  const [firstWord, setFirstWord] = useState();
  const [secondWord, setSecondWord] = useState();
  let [theSame, setTheSame] = useState();

  function changeColors() {
    firstColor = "orange";
    firstBackground = "black";
    setSecondColour("yellow");
    setSecondBackground("grey");
  }

  function pickDay(number) {
    if (number == "1") {
      setWeekDay("Monday");
    } else if (number == "2") {
      setWeekDay("Tuesday");
    } else if (number == "3") {
      setWeekDay("Wednesday");
    } else if (number === "4") {
      setWeekDay("Thursday");
    } else if (number === "5") {
      setWeekDay("Friday");
    } else if (number === "6") {
      setWeekDay("Saturday");
    } else if (number === "7") {
      setWeekDay("Sunday");
    } else {
      Alert.alert("Please select a number between 1 - 7");
    }
  }

  function compareWords() {
    if (firstWord === secondWord) {
      setTheSame("The words are the same");
    } else {
      setTheSame("The words are not the same");
    }
  }
  function length() {
    if (firstWord.length > secondWord.length) {
      Alert.alert("first word is longer than the second word");
    } else if (secondWord.length > firstWord.length) {
      Alert.alert("second word is longer than the first word");
    } else if (firstWord.length == secondWord.length) {
      Alert.alert("First and second word are the same length");
    }
    return null;
  }

  function includes() {
    if (secondWord.includes(firstWord)) {
      setTheSame("The word includes values from the first word");
    } else {
      setTheSame("The word does not include values from the first word");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: firstColor, backgroundColor: firstBackground }}>
        First varible should display red and blue
      </Text>
      <Text style={{ color: secondColour, backgroundColor: secondBackground }}>
        Second varible should display pink and green
      </Text>
      <View style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Button
          title={"Change colors"}
          onPress={changeColors}
          style={{ margin: "100px" }}
        />
      </View>
      <Text style={{ color: "#000" }}>Give me a number</Text>
      <Text style={{ color: "#000" }}>Day of the week: {weekDay}</Text>
      <TextInput
        style={styles.input}
        onChangeText={pickDay}
        placeholder="Choose a number"
        keyboardType="numeric"
        maxLength={2}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a word"
        onChangeText={(firstWord) => setFirstWord(firstWord)}
        onSubmitEditing={compareWords}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a word"
        onChangeText={(secondWord) => setSecondWord(secondWord)}
        onSubmitEditing={compareWords}
      />
      <Text>{theSame}</Text>
      <View style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Button onPress={length} title={"Click for help"} />

        <View style={{ marginTop: "20px" }}></View>
        <Button
          style={{ marginTop: "20px" }}
          onPress={includes}
          title={"Press here"}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: "20px",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "red",
  },
});
