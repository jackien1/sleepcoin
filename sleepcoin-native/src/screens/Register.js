import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Input, Button } from "react-native-elements";
import {
  changeUserName,
  changeAge,
  changeEmail,
  changePassword,
  changePasswordConfirm,
  handleRegister
} from "../redux/actions";
import { connect } from "react-redux";

class Register extends Component {
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
          SleepCoin
        </Text>
        <Input
          inputStyle={{ color: "white" }}
          placeholderTextColor="white"
          placeholder="User Name"
          titleStyle={{ fontSize: 18 }}
          value={this.props.auth.userName}
          onChangeText={text => this.props.changeUserName(text)}
        />
        <Input
          inputStyle={{ color: "white" }}
          placeholderTextColor="white"
          placeholder="Age"
          titleStyle={{ fontSize: 18 }}
          value={this.props.auth.age}
          onChangeText={text => this.props.changeAge(text)}
        />
        <Input
          inputStyle={{ color: "white" }}
          placeholderTextColor="white"
          placeholder="Email"
          titleStyle={{ fontSize: 18 }}
          value={this.props.auth.email}
          onChangeText={text => this.props.changeEmail(text)}
        />
        <Input
          inputStyle={{ color: "white" }}
          placeholderTextColor="white"
          placeholder="Password"
          titleStyle={{ fontSize: 18 }}
          value={this.props.auth.password}
          secureTextEntry={true}
          onChangeText={text => this.props.changePassword(text)}
        />
        <Input
          inputStyle={{ color: "white" }}
          placeholderTextColor="white"
          placeholder="Confirm Password"
          titleStyle={{ fontSize: 18 }}
          value={this.props.auth.password_confirm}
          secureTextEntry={true}
          onChangeText={text => this.props.changePasswordConfirm(text)}
        />
        <Button
          title="Sign Up"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={{ backgroundColor: "purple" }}
          titleStyle={{ fontSize: 20 }}
          onPress={() => {
            this.props.handleRegister(
              this.props.auth.userName,
              Number(this.props.auth.age),
              this.props.auth.email,
              this.props.auth.password,
              this.props.auth.password_confirm,
              () => this.props.navigation.navigate("Main")
            );
          }}
        />
        <Button
          title="Login"
          type="clear"
          containerStyle={{ marginTop: 10 }}
          titleStyle={{ fontSize: 20, color: "white" }}
          onPress={() => this.props.navigation.navigate("Login")}
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
  {
    changeUserName,
    changeAge,
    changeEmail,
    changePassword,
    changePasswordConfirm,
    handleRegister
  }
)(Register);
