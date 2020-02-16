import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { logoutUser, getUser } from "../redux/actions";
import { connect } from "react-redux";
import { LineChart } from "react-native-chart-kit";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Profile extends Component {
  componentWillMount() {
    this.props.getUser();
  }

  state = {
    coinHistory: true
  };

  renderChart = () => {
    if (
      this.props.auth.user.sleepData &&
      this.props.auth.user.coinData.length > 0
    ) {
      return (
        <LineChart
          data={{
            datasets: [
              {
                data: this.state.coinHistory
                  ? this.props.auth.user.coinData
                  : this.props.auth.user.sleepData
              }
            ]
          }}
          width={0.8 * SCREEN_WIDTH}
          height={300}
          chartConfig={{
            backgroundGradientFrom: "purple",
            backgroundGradientTo: "purple",
            decimalPlaces: 3,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{ marginTop: 10 }}
        />
      );
    }

    return null;
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            marginTop: 100,
            fontWeight: "bold"
          }}
        >
          Hi {this.props.auth.user.userName}!
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            width: 300
          }}
        >
          {this.props.auth.user.address}
        </Text>

        {this.props.auth.refreshing ? (
          <ActivityIndicator size="large" color="purple" />
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              {this.props.auth.user.balance}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: 10
              }}
            >
              Sleepcoins
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold"
            }}
          >
            {this.props.auth.user.age}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginLeft: 10
            }}
          >
            Age
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ coinHistory: true });
            }}
          >
            <Text
              style={{
                color: this.state.coinHistory ? "purple" : "white",
                fontSize: 20,
                marginRight: 20,
                fontWeight: "bold"
              }}
            >
              Coin History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ coinHistory: false });
            }}
          >
            <Text
              style={{
                color: this.state.coinHistory ? "white" : "purple",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              Sleep History
            </Text>
          </TouchableOpacity>
        </View>

        {this.renderChart()}

        <Button
          title="Logout"
          type="ouline"
          containerStyle={{ marginTop: 20, backgroundColor: "purple" }}
          titleStyle={{ fontSize: 20, color: "white" }}
          onPress={() => {
            this.props.logoutUser();
            this.props.navigation.navigate("Welcome");
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

export default connect(
  mapStateToProps,
  { logoutUser, getUser }
)(Profile);
