(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/RestaurantList.js":
/*!***************************************************!*\
  !*** ./resources/js/components/RestaurantList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RestaurantList =
/*#__PURE__*/
function (_Component) {
  _inherits(RestaurantList, _Component);

  function RestaurantList() {
    var _this;

    _classCallCheck(this, RestaurantList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RestaurantList).call(this));
    _this.state = {
      restaurants: [],
      winner: {}
    };
    _this.handleVoteInRestaurant = _this.handleVoteInRestaurant.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RestaurantList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/restaurants').then(function (response) {
        console.log(response);

        _this2.setState({
          restaurants: response.data.restaurants,
          winner: response.data.winner
        });
      })["catch"](function (error) {
        console.log(error.response);
      });
    }
  }, {
    key: "handleVoteInRestaurant",
    value: function handleVoteInRestaurant(event) {
      event.preventDefault();
      var param = event.target.dataset.param;
      console.log(param);
      var poll = {
        restaurantId: param
      };
      console.log(poll);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/poll', {
        restaurantId: param
      }).then(function (response) {
        console.log(response);
        alert(response.data);
      })["catch"](function (error) {
        console.log(error.response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          restaurants = _this$state.restaurants,
          winner = _this$state.winner;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container py-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-12"
      }, winner.nameRestaurant != null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-header"
      }, " Vota\xE7\xE3o de hoje encerrada! "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, "O restaurante escolhido de hoje \xE9 ", winner.nameRestaurant, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Endere\xE7o: ", winner.address, " "), winner.fl_veganFrendly == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "list-group-item-action"
      }, " Vegan Frendly ") : null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-group list-group-flush"
      }, restaurants.map(function (restaurant) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
          key: restaurant.id
        }, restaurant.nameRestaurant, restaurant.fl_veganFrendly == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "list-group-item-action"
        }, " Vegan Frendly ") : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-primary btn-sm",
          "data-param": restaurant.id,
          onClick: _this3.handleVoteInRestaurant
        }, "I want this!"));
      })))))));
    }
  }]);

  return RestaurantList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

if (document.getElementById('restaurantList')) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestaurantList, null), document.getElementById('restaurantList'));
}

/***/ })

}]);