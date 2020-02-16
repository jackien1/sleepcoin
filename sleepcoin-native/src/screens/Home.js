import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import TrackingSlides from "../components/TrackingSlides";
import { Accelerometer } from "expo-sensors";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

const SCREEN_WIDTH = Dimensions.get("window").width;
let tracked = [];

class Home extends Component {
  state = {
    data: [],
    tracking: false
  };

  setData = data => {
    tracked.push(data);
  };

  componentDidMount() {
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDay();
    Accelerometer.setUpdateInterval(1000);
    this.setState({ data: [{ month, day }] });
  }

  render() {
    return this.state.tracking ? (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black"
        }}
      >
        <ActivityIndicator size="large" color="purple" />
        <Button
          title="Wake Up"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={{ backgroundColor: "purple" }}
          titleStyle={{ fontSize: 20 }}
          onPress={() => {
            Accelerometer.removeAllListeners();
            this.setState({ tracking: false });
            deactivateKeepAwake();
            var trackedJSON = JSON.stringify(tracked);
          }}
        />
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black"
        }}
      >
        <TrackingSlides
          data={this.state.data}
          handlePress={() => {
            Accelerometer.addListener(accelerometerData => {
              this.setData(accelerometerData);
            });
            this.setState({ tracking: true });
            activateKeepAwake();
          }}
        />
      </View>
    );
  }
}

export default connect(null)(Home);
