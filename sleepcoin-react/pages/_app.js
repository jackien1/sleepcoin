import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { setCurrentUser, logoutUser } from "../redux/actions";
import jwt_decode from "jwt-decode";
import { initStore } from "../redux/store";
import Router from "next/router";

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx, store }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    componentDidMount() {
      if (localStorage.jwtToken) {
        const decoded = jwt_decode(localStorage.jwtToken);
        this.props.store.dispatch(setCurrentUser(decoded));
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          this.props.store.dispatch(logoutUser());
          window.location.href = "/";
        } else {
          Router.push("/dashboard");
        }
      }

      this.setState({ loading: false });
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <React.Fragment>
              <Component {...pageProps} />
            </React.Fragment>
          </Provider>
        </Container>
      );
    }
  }
);
