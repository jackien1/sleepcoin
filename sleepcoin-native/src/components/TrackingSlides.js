import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-elements";

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View style={styles.slideStyle}>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            {months[slide.month]}
          </Text>
          <Text style={{ color: "white", fontSize: 25 }}>
            {days[slide.day]}
          </Text>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
        ref={scroll => {
          this.scroll = scroll;
        }}
        onContentSizeChange={() => {
          this.scroll.scrollToEnd({ animated: true });
        }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: "white"
  },
  buttonStyle: {
    backgroundColor: "purple",
    marginTop: 15
  }
};

export default Slides;
