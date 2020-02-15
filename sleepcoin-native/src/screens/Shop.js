import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Input, Button, Icon } from "react-native-elements";

class Shop extends Component {
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
        <Text style={{ color: "white", fontSize: 20 }}>Shop</Text>
      </View>
    );
  }
}

export default Shop;
