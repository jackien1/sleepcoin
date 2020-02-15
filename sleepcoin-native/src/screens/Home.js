import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import TrackingSlides from "../components/TrackingSlides";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Home extends Component {
  state = {
    data: [
      { month: 0, day: 0 },
      { month: 0, day: 1 },
      { month: 0, day: 2 },
      { month: 0, day: 3 }
    ]
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black"
        }}
      >
        <TrackingSlides data={this.state.data} />
      </View>
    );
  }
}

export default connect(null)(Home);
