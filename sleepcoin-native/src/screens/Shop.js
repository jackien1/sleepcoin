import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from "react-native";
import { Input, Button, Icon, Card } from "react-native-elements";
import { connect } from "react-redux";
import { getOffers } from "../redux/actions";
import RBSheet from "react-native-raw-bottom-sheet";
import axios from "axios";

class Shop extends Component {
  state = {
    selectedOffer: {}
  };

  renderOffers = () => {
    return this.props.auth.offers.map(offer => {
      return (
        <TouchableOpacity
          style={{ marginBottom: 10, backgroundColor: "#111" }}
          onPress={() => {
            this.setState({ selectedOffer: offer });
            this.RBSheet.open();
          }}
          transparent
        >
          <View style={{ flexDirection: "column", padding: 20 }}>
            <Text
              style={{
                color: "purple",
                fontWeight: "bold",
                fontSize: 15
              }}
            >
              {" "}
              {offer.meta["3"]}{" "}
            </Text>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
              {" "}
              {offer.meta["0"]}{" "}
            </Text>
            <Text
              style={{
                color: "#999",
                fontWeight: "bold",
                fontSize: 12
              }}
            >
              {" "}
              {offer.meta["4"]}{" "}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  renderButton() {
    let inside = false;

    if (this.state.selectedOffer.meta) {
      for (let i = 0; i < this.state.selectedOffer.meta["5"].length; i++) {
        if (
          this.state.selectedOffer.meta["5"][i].toLowerCase() ==
          this.props.auth.user.address.toLowerCase()
        )
          inside = true;
      }
    }

    if (this.state.selectedOffer.meta && inside) {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            {" "}
            Already Claimed{" "}
          </Text>
        </View>
      );
    } else {
      return (
        <Button
          title="Claim"
          titleStyle={{ fontSize: 20, fontWeight: "bold" }}
          buttonStyle={{
            backgroundColor: "purple",
            marginTop: 50
          }}
          onPress={async () => {
            await axios({
              method: "post",
              url: "https://48162b9d.ngrok.io/api/shop/claim",
              data: {
                value: this.state.selectedOffer.meta["3"],
                address: this.state.selectedOffer.offer,
                owner: this.state.selectedOffer.meta["4"]
              }
            });
            this.RBSheet.close();
            this.props.getOffers();
          }}
        />
      );
    }
  }

  componentDidMount() {
    this.props.getOffers();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "black"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 100
          }}
        >
          Shop
        </Text>

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          duration={250}
          animationType={"slide"}
          closeOnDragDown={true}
          height={500}
          duration={250}
          customStyles={{
            container: {
              backgroundColor: "black"
            }
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                fontWeight: "bold",
                marginLeft: 15,
                marginTop: 15
              }}
            >
              {this.state.selectedOffer.meta
                ? this.state.selectedOffer.meta["0"]
                : null}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                marginTop: 15,
                marginLeft: 15
              }}
            >
              About
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#8b8b8b",
                marginLeft: 15
              }}
            >
              {this.state.selectedOffer.meta
                ? this.state.selectedOffer.meta["1"]
                : null}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                marginTop: 15,
                marginLeft: 15
              }}
            >
              SleepCoins
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#8b8b8b",
                marginLeft: 15
              }}
            >
              {this.state.selectedOffer.meta
                ? this.state.selectedOffer.meta["3"]
                : null}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                marginTop: 15,
                marginLeft: 15
              }}
            >
              Remaining
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#8b8b8b",
                marginLeft: 15
              }}
            >
              {this.state.selectedOffer.meta
                ? this.state.selectedOffer.meta["2"] -
                  this.state.selectedOffer.meta["5"].length
                : null}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                marginTop: 15,
                marginLeft: 15
              }}
            >
              Offerer
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#8b8b8b",
                marginLeft: 15
              }}
            >
              {this.state.selectedOffer.meta
                ? this.state.selectedOffer.meta["4"]
                : null}
            </Text>

            {this.renderButton()}
          </View>
        </RBSheet>

        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                this.props.getOffers();
              }}
              refreshing={this.props.auth.offerRefreshing}
              tintColor="white"
            />
          }
        >
          {this.renderOffers()}
        </ScrollView>
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
  { getOffers }
)(Shop);
