import React, { Component } from "react";
import { Tag, Button } from "antd";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";
import Router from "next/router";

class Dashboard extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
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
          Address
        </Tag>
        <Tag color="red" style={{ marginTop: "1vw", fontSize: "1vw" }}>
          Balance
        </Tag>
        <Tag color="volcano" style={{ marginTop: "1vw", fontSize: "1vw" }}>
          Ether Address
        </Tag>
        <Tag color="orange" style={{ marginTop: "1vw", fontSize: "1vw" }}>
          Ether Balance
        </Tag>
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
        <Button type="link" style={{ fontSize: "1vw" }}>
          {" "}
          Create Campaign{" "}
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(Dashboard);
