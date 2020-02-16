import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Input } from "antd";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../redux/actions";
import Router from "next/router";

class Index extends Component {
  state = {
    visible: false,
    register: false,
    email: "",
    password: "",
    rEmail: "",
    rPassword: "",
    rPasswordConfirm: ""
  };

  handleRegister = () => {
    this.props.registerUser(
      {
        email: this.state.rEmail,
        password: this.state.rPassword,
        password_confirm: this.state.rPasswordConfirm
      },
      () => Router.push("/dashboard")
    );
  };

  handleLogin = () => {
    this.props.loginUser(
      {
        email: this.state.email,
        password: this.state.password
      },
      () => Router.push("/dashboard")
    );
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "4vw",
                fontFamily: "BlinkMacSystemFont"
              }}
            >
              {" "}
              SleepCoin{" "}
            </div>
            <hr />
            <div
              style={{
                fontSize: "2vw",
                fontFamily: "BlinkMacSystemFont",
                textAlign: "center"
              }}
            >
              {" "}
              Rest and invest!
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{ fontSize: "1vw" }}
                type="link"
                onClick={() => {
                  this.setState({ visible: true });
                }}
              >
                Partnerships
              </Button>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://sleepcoin.s3-us-west-1.amazonaws.com/Screen+Shot+2020-02-15+at+11.16.03+PM.png"
              style={{ width: "25vw" }}
            />
          </div>
        </div>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          footer={null}
          title={this.state.register ? "Register" : "Login"}
        >
          {this.state.register ? (
            <div>
              <Input
                placeholder="Email"
                style={{ marginTop: "1vw" }}
                onChange={event => {
                  this.setState({ rEmail: event.target.value });
                }}
              />
              <Input
                placeholder="Password"
                style={{ marginTop: "1vw" }}
                onChange={event => {
                  this.setState({ rPassword: event.target.value });
                }}
              />
              <Input
                placeholder="Password Confirm"
                style={{ marginTop: "1vw" }}
                onChange={event => {
                  this.setState({ rPasswordConfirm: event.target.value });
                }}
              />
            </div>
          ) : (
            <div>
              <Input
                placeholder="Email"
                style={{ marginTop: "1vw" }}
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
              />
              <Input
                placeholder="Password"
                style={{ marginTop: "1vw" }}
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
              />
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "1vw",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                display: "flex"
              }}
            >
              <Button
                type="link"
                style={{ color: "black" }}
                onClick={() => {
                  this.setState({ register: !this.state.register });
                }}
              >
                {this.state.register ? "Login" : "Register"}
              </Button>
            </div>

            <div
              style={{
                display: "flex"
              }}
            >
              <Button
                type="primary"
                onClick={() => {
                  if (this.state.register) this.handleRegister();
                  else {
                    this.handleLogin();
                  }
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser, loginUser }
)(Index);
