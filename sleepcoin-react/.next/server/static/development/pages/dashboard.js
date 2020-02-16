module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/card/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/card/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/input/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/modal/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tag/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/tag/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tag_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tag/style/css */ "./node_modules/antd/lib/tag/style/css.js");
/* harmony import */ var antd_lib_tag_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/tag */ "antd/lib/tag");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_15__);










var _jsxFileName = "/Users/jackieni/dev/hackathon/sleepcoin/sleepcoin-react/pages/dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Dashboard extends react__WEBPACK_IMPORTED_MODULE_10__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: "",
      visible: false,
      title: "",
      description: "",
      quantity: "",
      price: ""
    });

    _defineProperty(this, "renderCampaigns", () => {
      return this.props.auth.campaigns.map(campaign => {
        console.log(campaign);
        return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_9___default.a, {
          title: campaign.meta["0"],
          style: {
            width: "40vw",
            marginTop: 20
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, " Description: ", campaign.meta["1"], " "), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, " Quantity: ", campaign.meta["2"], " "), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, " Price: ", campaign.meta["3"], " "), __jsx("div", {
          style: {
            fontSize: "0.8vw"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, " ", `Owner: ${campaign.meta["4"]}`, " "), __jsx("div", {
          style: {
            fontSize: "0.8vw"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, " Claimers: "), campaign.meta["5"].map(person => {
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, " ", person, " ");
        }));
      });
    });
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getCampaigns();
  }

  render() {
    console.log(this.props.auth.campaigns);
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_15___default.a("https://rinkeby.infura.io/v3/964044c29b2a4c4794a25b2af7175ccf");
    return __jsx("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontWeight: "bold",
        fontSize: "4vw",
        fontFamily: "BlinkMacSystemFont"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Dashboard"), __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default.a, {
      color: "magenta",
      style: {
        marginTop: "1vw",
        fontSize: "1vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Address: ", this.props.auth.user.address), __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default.a, {
      color: "red",
      style: {
        marginTop: "1vw",
        fontSize: "1vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Balance:", " ", this.props.auth.user.dappBalance ? this.props.auth.user.dappBalance : "0"), __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default.a, {
      color: "volcano",
      style: {
        marginTop: "1vw",
        fontSize: "1vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Ether Address: ", this.props.auth.user.ethAddress), __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default.a, {
      color: "orange",
      style: {
        marginTop: "1vw",
        fontSize: "1vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Ether Balance:", " ", this.props.auth.user.ethBalance ? this.props.auth.user.ethBalance : "0"), __jsx("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      placeholder: "Value",
      onChange: event => {
        this.setState({
          value: event.target.value
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "link",
      style: {
        fontSize: "1vw",
        color: "#1890ff"
      },
      onClick: async () => {
        axios__WEBPACK_IMPORTED_MODULE_13___default.a.defaults.headers.common["Authorization"] = localStorage.getItem("jwtToken");
        await axios__WEBPACK_IMPORTED_MODULE_13___default()({
          method: "post",
          url: "http://localhost:5000/api/gateway/addBalance",
          data: {
            value: web3.utils.toWei(this.state.value.toString(), "ether")
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Add Funds")), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "link",
      style: {
        fontSize: "1vw",
        color: "red"
      },
      onClick: () => this.props.logoutUser(() => {
        next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/");
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Logout"), __jsx("div", {
      style: {
        fontSize: "2vw",
        fontFamily: "BlinkMacSystemFont"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Campaigns"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "link",
      style: {
        fontSize: "1vw"
      },
      onClick: () => {
        this.setState({
          visible: true
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, " ", "Create Campaign", " "), this.renderCampaigns(), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
      visible: this.state.visible,
      onCancel: () => {
        this.setState({
          visible: false
        });
      },
      footer: null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      placeholder: "Title",
      style: {
        marginTop: "1vw"
      },
      onChange: event => {
        this.setState({
          title: event.target.value
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      placeholder: "Description",
      style: {
        marginTop: "1vw"
      },
      onChange: event => {
        this.setState({
          description: event.target.value
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      placeholder: "Quantity",
      style: {
        marginTop: "1vw"
      },
      onChange: event => {
        this.setState({
          quantity: event.target.value
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      placeholder: "Price",
      style: {
        marginTop: "1vw"
      },
      onChange: event => {
        this.setState({
          price: event.target.value
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), __jsx("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "primary",
      onClick: async () => {
        axios__WEBPACK_IMPORTED_MODULE_13___default.a.defaults.headers.common["Authorization"] = localStorage.getItem("jwtToken");
        await axios__WEBPACK_IMPORTED_MODULE_13___default()({
          method: "post",
          url: "http://localhost:5000/api/shop/request",
          data: {
            title: this.state.title,
            description: this.state.description,
            quantity: this.state.quantity,
            price: this.state.price
          }
        });
        this.setState({
          visible: false
        });
        this.props.getCampaigns();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Submit"))));
  }

}

const mapStateToProps = state => {
  const {
    auth
  } = state;
  return {
    auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  logoutUser: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["logoutUser"],
  getUser: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["getUser"],
  getCampaigns: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["getCampaigns"]
})(Dashboard));

/***/ }),

/***/ "./redux/actions/auth_actions.js":
/*!***************************************!*\
  !*** ./redux/actions/auth_actions.js ***!
  \***************************************/
/*! exports provided: registerUser, loginUser, getUser, getCampaigns, setCurrentUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaigns", function() { return getCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const registerUser = (user, callback) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "post",
      url: "https://48162b9d.ngrok.io/api/auth/registerAdvertiser",
      data: _objectSpread({}, user)
    });
    const {
      token
    } = res.data;
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
    dispatch(setCurrentUser(decoded));
    callback();
  } catch (err) {
    console.log(err);
  }
};
const loginUser = (user, callback) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "post",
      url: "https://48162b9d.ngrok.io/api/auth/loginAdvertiser",
      data: _objectSpread({}, user)
    });
    const {
      token
    } = res.data;
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
    dispatch(setCurrentUser(decoded));
    callback();
  } catch (err) {
    console.log(err);
  }
};
const getUser = () => async dispatch => {
  try {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["Authorization"] = localStorage.getItem("jwtToken");
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "get",
      url: "https://48162b9d.ngrok.io/api/auth/getAdvertiser"
    });
    dispatch(setCurrentUser(data));
  } catch (e) {
    console.log(e);
  }
};
const getCampaigns = () => async dispatch => {
  try {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["Authorization"] = localStorage.getItem("jwtToken");
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "get",
      url: "https://48162b9d.ngrok.io/api/shop/getCampaigns"
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_CAMPAIGNS"],
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};
const setCurrentUser = decoded => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"],
    payload: decoded
  };
};
const logoutUser = callback => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser({}));
  callback ? callback() : null;
};

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: registerUser, loginUser, getUser, getCampaigns, setCurrentUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth_actions */ "./redux/actions/auth_actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["registerUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCampaigns", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["getCampaigns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["setCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["logoutUser"]; });



/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: SET_CURRENT_USER, GET_CAMPAIGNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CAMPAIGNS", function() { return GET_CAMPAIGNS; });
const SET_CURRENT_USER = "set-current-user";
const GET_CAMPAIGNS = "get-campaigns";

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jackieni/dev/hackathon/sleepcoin/sleepcoin-react/pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/tag":
/*!*******************************!*\
  !*** external "antd/lib/tag" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map