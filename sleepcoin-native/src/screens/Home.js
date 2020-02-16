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
import { trackSleep, getSleep, getUser } from "../redux/actions";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

const SCREEN_WIDTH = Dimensions.get("window").width;
let tracked = [];

class Home extends Component {
  state = {
    tracking: false
  };

  setData = data => {
    tracked.push(data);
  };

  componentDidMount() {
    this.props.getSleep();
  }

  renderEverything = () => {
    if (this.props.sleep.refreshing)
      return <ActivityIndicator size="large" color="purple" />;

    if (this.state.tracking)
      return (
        <View>
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

              var d = new Date(
                this.props.sleep.nights[this.props.sleep.nights.length - 1].date
              );

              this.props.trackSleep(
                trackedJSON,
                d,
                this.props.getSleep,
                this.props.getUser
              );
              tracked = [];
            }}
          />
        </View>
      );

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black"
        }}
      >
        <TrackingSlides
          data={this.props.sleep.nights}
          handlePress={() => {
            console.log(tracked);
            Accelerometer.addListener(accelerometerData => {
              this.setData(accelerometerData.y);
            });
            Accelerometer.setUpdateInterval(1000);
            this.setState({ tracking: true });
            activateKeepAwake();
          }}
        />
      </View>
    );
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
        {this.renderEverything()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { sleep } = state;
  return { sleep };
};

export default connect(
  mapStateToProps,
  { trackSleep, getSleep, getUser }
)(Home);
