import React, { Component } from "react";
import { Tag, Button, Input, Modal, Card } from "antd";
import { connect } from "react-redux";
import { logoutUser, getUser, getCampaigns } from "../redux/actions";
import axios from "axios";
import Router from "next/router";
import Web3 from "web3";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getCampaigns();
  }

  state = {
    value: "",
    visible: false,
    title: "",
    description: "",
    quantity: "",
    price: ""
  };

  renderCampaigns = () => {
    return this.props.auth.campaigns.map(campaign => {
      console.log(campaign);
      return (
        <Card
          title={campaign.meta["0"]}
          style={{ width: "40vw", marginTop: 20 }}
        >
          <div> Description: {campaign.meta["1"]} </div>
          <div> Quantity: {campaign.meta["2"]} </div>
          <div> Price: {campaign.meta["3"]} </div>
          <div style={{ fontSize: "0.8vw" }}>
            {" "}
            {`Owner: ${campaign.meta["4"]}`}{" "}
          </div>
          <div style={{ fontSize: "0.8vw" }}> Claimers: </div>
          {campaign.meta["5"].map(person => {
            return <div> {person} </div>;
          })}
        </Card>
      );
    });
  };

  render() {
    console.log(this.props.auth.campaigns);
    const web3 = new Web3(
      "https://rinkeby.infura.io/v3/964044c29b2a4c4794a25b2af7175ccf"
    );

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw"
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "4vw",
            fontFamily: "BlinkMacSystemFont"
          }}
        >
          Dashboard
        </div>
        <Tag color="magenta" style={{ marginTop: "1vw", fontSize: "1vw" }}>
          Address: {this.props.auth.user.address}
        </Tag>
        <Tag color="red" style={{ marginTop: "1vw", fontSize: "1vw" }}>
          Balance:{" "}
          {this.props.auth.user.dappBalance
            ? this.props.auth.user.dappBalance
            : "0"}
        </Tag>
        <Tag color="volcano" style={{ marginTop: "1vw", fontSize: "1vw" }}>
          Ether Address: {this.props.auth.user.ethAddress}
        </Tag>
        <Tag color="orange" style={{ marginTop: "1vw", fontSize: "1vw" }}>
          Ether Balance:{" "}
          {this.props.auth.user.ethBalance
            ? this.props.auth.user.ethBalance
            : "0"}
        </Tag>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1vw"
          }}
        >
          <Input
            placeholder="Value"
            onChange={event => {
              this.setState({ value: event.target.value });
            }}
          />
          <Button
            type="link"
            style={{ fontSize: "1vw", color: "#1890ff" }}
            onClick={async () => {
              axios.defaults.headers.common[
                "Authorization"
              ] = localStorage.getItem("jwtToken");

              await axios({
                method: "post",
                url: "http://localhost:5000/api/gateway/addBalance",
                data: {
                  value: web3.utils.toWei(this.state.value.toString(), "ether")
                }
              });
            }}
          >
            Add Funds
          </Button>
        </div>
        <Button
          type="link"
          style={{ fontSize: "1vw", color: "red" }}
          onClick={() =>
            this.props.logoutUser(() => {
              Router.push("/");
            })
          }
        >
          Logout
        </Button>
        <div
          style={{
            fontSize: "2vw",
            fontFamily: "BlinkMacSystemFont"
          }}
        >
          Campaigns
        </div>
        <Button
          type="link"
          style={{ fontSize: "1vw" }}
          onClick={() => {
            this.setState({ visible: true });
          }}
        >
          {" "}
          Create Campaign{" "}
        </Button>

        {this.renderCampaigns()}

        <Modal
          visible={this.state.visible}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          footer={null}
        >
          <Input
            placeholder="Title"
            style={{ marginTop: "1vw" }}
            onChange={event => {
              this.setState({ title: event.target.value });
            }}
          />
          <Input
            placeholder="Description"
            style={{ marginTop: "1vw" }}
            onChange={event => {
              this.setState({ description: event.target.value });
            }}
          />
          <Input
            placeholder="Quantity"
            style={{ marginTop: "1vw" }}
            onChange={event => {
              this.setState({ quantity: event.target.value });
            }}
          />
          <Input
            placeholder="Price"
            style={{ marginTop: "1vw" }}
            onChange={event => {
              this.setState({ price: event.target.value });
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 10
            }}
          >
            <Button
              type="primary"
              onClick={async () => {
                axios.defaults.headers.common[
                  "Authorization"
                ] = localStorage.getItem("jwtToken");

                await axios({
                  method: "post",
                  url: "http://localhost:5000/api/shop/request",
                  data: {
                    title: this.state.title,
                    description: this.state.description,
                    quantity: this.state.quantity,
                    price: this.state.price
                  }
                });

                this.setState({ visible: false });
                this.props.getCampaigns();
              }}
            >
              Submit
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

export default connect(
  mapStateToProps,
  { logoutUser, getUser, getCampaigns }
)(Dashboard);
