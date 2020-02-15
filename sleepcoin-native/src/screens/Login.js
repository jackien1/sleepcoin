import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Input, Button } from "react-native-elements";
import {
  changeLoginEmail,
  changeLoginPassword,
  handleLogin
} from "../redux/actions";
import { connect } from "react-redux";

class Login extends Component {
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
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 50
          }}
        >
          Login
        </Text>
        <Input
          inputStyle={{ color: "white" }}
          placeholderTextColor="white"
          placeholder="Email"
          value={this.props.auth.loginEmail}
          onChangeText={text => this.props.changeLoginEmail(text)}
          titleStyle={{ fontSize: 18 }}
        />
        <Input
          inputStyle={{ color: "white" }}
          placeholderTextColor="white"
          placeholder="Password"
          value={this.props.auth.loginPassword}
          onChangeText={text => this.props.changeLoginPassword(text)}
          secureTextEntry={true}
          titleStyle={{ fontSize: 18 }}
        />
        <Button
          title="Start Sleeping"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={{ backgroundColor: "purple" }}
          titleStyle={{ fontSize: 20 }}
          onPress={() => {
            this.props.handleLogin(
              this.props.auth.loginEmail,
              this.props.auth.loginPassword,
              () => this.props.navigation.navigate("Main")
            );
          }}
        />
        <Button
          title="Back"
          type="clear"
          containerStyle={{ marginTop: 10 }}
          titleStyle={{ fontSize: 20, color: "white" }}
          onPress={() => this.props.navigation.goBack()}
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
  { changeLoginEmail, changeLoginPassword, handleLogin }
)(Login);
