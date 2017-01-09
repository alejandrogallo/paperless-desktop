(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

// CORRESPONDENTS ACTIONS

var CorrespondentsActions = (function () {
    function CorrespondentsActions() {
        _classCallCheck(this, CorrespondentsActions);

        this.generateActions("getCorrespondentsSuccess", "getCorrespondentsFail");
    }

    // GET TAGS

    _createClass(CorrespondentsActions, [{
        key: "getTags",
        value: function getTags() {

            var url = localStorage.getItem("settings.host") + "/api/correspondents/";

            (0, _axios2["default"])({
                "method": "get",
                "url": url,
                "auth": {
                    "username": localStorage.getItem("settings.auth.username"),
                    "password": localStorage.getItem("settings.auth.password")
                }
            }).then(this.actions.getCorrespondentsSuccess)["catch"](this.actions.getCorrespondentsFail);
        }
    }]);

    return CorrespondentsActions;
})();

exports["default"] = _alt2["default"].createActions(CorrespondentsActions);
module.exports = exports["default"];

},{"../alt":5,"axios":"axios"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

// DOCUMENTS ACTIONS

var DocumentsActions = (function () {
	function DocumentsActions() {
		_classCallCheck(this, DocumentsActions);

		this.generateActions("getDocumentsSuccess", "getDocumentsFail");
	}

	// GET DOCS

	_createClass(DocumentsActions, [{
		key: "getDocuments",
		value: function getDocuments(correspondent, tag) {

			var toQueryString = function toQueryString(obj) {
				var parts = [];
				for (var i in obj) {
					if (obj.hasOwnProperty(i) && obj[i]) {
						parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
					}
				}
				return parts.join("&");
			};

			var url = localStorage.getItem("settings.host") + "/api/documents/";

			// add parameters to url
			var parameters = toQueryString({
				"correspondent__slug_0": correspondent,
				"correspondent__slug_1": "contains",
				"tags__slug_0": tag,
				"tags__slug_1": "contains"
			});

			// attach parameters if availble
			if (parameters.length > 0) {
				url += "?" + parameters;
			}

			// fetch documents
			(0, _axios2["default"])({
				"method": "get",
				"url": url,
				"auth": {
					"username": localStorage.getItem("settings.auth.username"),
					"password": localStorage.getItem("settings.auth.password")
				}
			}).then(this.actions.getDocumentsSuccess)["catch"](this.actions.getDocumentsFail);
		}
	}]);

	return DocumentsActions;
})();

exports["default"] = _alt2["default"].createActions(DocumentsActions);
module.exports = exports["default"];

},{"../alt":5,"axios":"axios"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

// LOGS ACTIONS

var LogsActions = (function () {
    function LogsActions() {
        _classCallCheck(this, LogsActions);

        this.generateActions("getLogsSuccess", "getLogsFail");
    }

    // GET LOGS

    _createClass(LogsActions, [{
        key: "getLogs",
        value: function getLogs() {

            var url = localStorage.getItem("settings.host") + "/api/logs/";

            (0, _axios2["default"])({
                "method": "get",
                "url": url,
                "auth": {
                    "username": localStorage.getItem("settings.auth.username"),
                    "password": localStorage.getItem("settings.auth.password")
                }
            }).then(this.actions.getLogsSuccess)["catch"](this.actions.getLogsFail);
        }
    }]);

    return LogsActions;
})();

exports["default"] = _alt2["default"].createActions(LogsActions);
module.exports = exports["default"];

},{"../alt":5,"axios":"axios"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

// TAGS ACTIONS

var TagsActions = (function () {
    function TagsActions() {
        _classCallCheck(this, TagsActions);

        this.generateActions("getTagsSuccess", "getTagsFail");
    }

    // GET TAGS

    _createClass(TagsActions, [{
        key: "getTags",
        value: function getTags() {

            var url = localStorage.getItem("settings.host") + "/api/tags/";

            (0, _axios2["default"])({
                "method": "get",
                "url": url,
                "auth": {
                    "username": localStorage.getItem("settings.auth.username"),
                    "password": localStorage.getItem("settings.auth.password")
                }
            }).then(this.actions.getTagsSuccess)["catch"](this.actions.getTagsFail);
        }
    }]);

    return TagsActions;
})();

exports["default"] = _alt2["default"].createActions(TagsActions);
module.exports = exports["default"];

},{"../alt":5,"axios":"axios"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _alt = require("alt");

var _alt2 = _interopRequireDefault(_alt);

exports["default"] = new _alt2["default"]();
module.exports = exports["default"];

},{"alt":"alt"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), "constructor", this).call(this, props);
	}

	// COMPONENT DID MOUNT

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "window" },
				_react2["default"].createElement(_Header2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "window-content" },
					this.props.children
				)
			);
		}
	}]);

	return App;
})(_react2["default"].Component);

exports["default"] = App;
module.exports = exports["default"];

},{"./Header":10,"react":"react"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var DocumentDetail = (function (_React$Component) {
	_inherits(DocumentDetail, _React$Component);

	function DocumentDetail(props) {
		_classCallCheck(this, DocumentDetail);

		_get(Object.getPrototypeOf(DocumentDetail.prototype), "constructor", this).call(this, props);
	}

	// COMPONENT DID MOUNT

	_createClass(DocumentDetail, [{
		key: "componentDidMount",
		value: function componentDidMount() {}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement("div", null);
		}
	}]);

	return DocumentDetail;
})(_react2["default"].Component);

exports["default"] = DocumentDetail;
module.exports = exports["default"];

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _PaperlessComponent2 = require("./PaperlessComponent");

var _PaperlessComponent3 = _interopRequireDefault(_PaperlessComponent2);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var DocumentItem = (function (_PaperlessComponent) {
	_inherits(DocumentItem, _PaperlessComponent);

	function DocumentItem(props) {
		_classCallCheck(this, DocumentItem);

		_get(Object.getPrototypeOf(DocumentItem.prototype), "constructor", this).call(this, props);
		this.state = {};
	}

	// COMPONENT DID MOUNT

	_createClass(DocumentItem, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var that = this;

			// load the image base64 data
			_get(Object.getPrototypeOf(DocumentItem.prototype), "getDataUri", this).call(this, _get(Object.getPrototypeOf(DocumentItem.prototype), "getHost", this).call(this) + this.props.document.thumbnail_url.replace("\\", ""), function (result) {
				that.setState({
					"data": result
				});
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			var divStyle = {};

			if ("data" in this.state) {
				divStyle["backgroundImage"] = "url(" + this.state.data + ")";
			}

			return _react2["default"].createElement(
				_reactRouter.Link,
				{ className: "document-item", to: "/document/" + this.props.document.id },
				_react2["default"].createElement("div", { className: "document-item-thumbnail", style: divStyle }),
				_react2["default"].createElement(
					"div",
					{ className: "document-item-title" },
					this.props.document.title
				)
			);
		}
	}]);

	return DocumentItem;
})(_PaperlessComponent3["default"]);

exports["default"] = DocumentItem;
module.exports = exports["default"];

},{"./PaperlessComponent":13,"axios":"axios","react":"react","react-router":"react-router"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsDocumentsActions = require("../actions/DocumentsActions");

var _actionsDocumentsActions2 = _interopRequireDefault(_actionsDocumentsActions);

var _storesDocumentsStore = require("../stores/DocumentsStore");

var _storesDocumentsStore2 = _interopRequireDefault(_storesDocumentsStore);

var _Sidebar = require("./Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _DocumentItem = require("./DocumentItem");

var _DocumentItem2 = _interopRequireDefault(_DocumentItem);

var _reactPureRenderFunction = require("react-pure-render/function");

var _reactPureRenderFunction2 = _interopRequireDefault(_reactPureRenderFunction);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var Documents = (function (_React$Component) {
	_inherits(Documents, _React$Component);

	function Documents(props) {
		_classCallCheck(this, Documents);

		_get(Object.getPrototypeOf(Documents.prototype), "constructor", this).call(this, props);
		this.shouldComponentUpdate = _reactPureRenderFunction2["default"];
		this.state = _storesDocumentsStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// SHOULD COMPONENT UPDATE

	_createClass(Documents, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			(0, _jquery2["default"])(window).trigger("headerActiveItem", { "item": "documents" });
			_storesDocumentsStore2["default"].listen(this.onChange);
			_actionsDocumentsActions2["default"].getDocuments();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesDocumentsStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// SET TAG FILTER
	}, {
		key: "setTagFilter",
		value: function setTagFilter(tag) {
			this.setState({
				"tag": tag
			});

			_actionsDocumentsActions2["default"].getDocuments(this.state.correspondent, tag);
		}

		// SET CORRESPONDENT FILTER
	}, {
		key: "setCorrespondentFilter",
		value: function setCorrespondentFilter(correspondent) {
			this.setState({
				"correspondent": correspondent
			});

			_actionsDocumentsActions2["default"].getDocuments(correspondent, this.state.tag);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			if (!this.state.documents || !("results" in this.state.documents)) return null;

			return _react2["default"].createElement(
				"div",
				{ className: "pane-group" },
				_react2["default"].createElement(_Sidebar2["default"], { setTagFilter: this.setTagFilter.bind(this), setCorrespondentFilter: this.setCorrespondentFilter.bind(this) }),
				_react2["default"].createElement(
					"div",
					{ className: "pane" },
					this.state.documents.results.map(function (d) {
						return _react2["default"].createElement(_DocumentItem2["default"], { document: d, key: d.id });
					})
				)
			);
		}
	}]);

	return Documents;
})(_react2["default"].Component);

exports["default"] = Documents;
module.exports = exports["default"];

},{"../actions/DocumentsActions":2,"../stores/DocumentsStore":22,"./DocumentItem":8,"./Sidebar":14,"jquery":"jquery","react":"react","react-pure-render/function":25}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var Header = (function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		_get(Object.getPrototypeOf(Header.prototype), "constructor", this).call(this, props);
		this.state = { "active": "documents" };
	}

	// COMPONENT DID MOUNT

	_createClass(Header, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			(0, _jquery2["default"])(window).on("headerActiveItem", this.handleActiveHeaderChanged.bind(this));
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			(0, _jquery2["default"])(window).off("headerActiveItem");
		}

		// HANDLE ACTIVE HEADER CHANGED
	}, {
		key: "handleActiveHeaderChanged",
		value: function handleActiveHeaderChanged(e, data) {

			this.setState({
				"active": data.item
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			var documentsClass = "btn btn-default";
			if (this.state.active === "documents") documentsClass += " active";

			var logsClass = "btn btn-default";
			if (this.state.active === "logs") logsClass += " active";

			return _react2["default"].createElement(
				"header",
				{ className: "toolbar toolbar-header" },
				_react2["default"].createElement(
					"h1",
					{ className: "title" },
					"Paperless"
				),
				_react2["default"].createElement(
					"div",
					{ className: "toolbar-actions" },
					_react2["default"].createElement(
						"div",
						{ className: "btn-group" },
						_react2["default"].createElement(
							"button",
							{ className: "btn btn-default", title: "Correspondents" },
							_react2["default"].createElement("span", { className: "icon icon-users" })
						),
						_react2["default"].createElement(
							_reactRouter.Link,
							{ className: documentsClass, title: "Documents", to: "/documents" },
							_react2["default"].createElement("span", { className: "icon icon-newspaper" })
						),
						_react2["default"].createElement(
							"button",
							{ className: "btn btn-default", title: "Tags" },
							_react2["default"].createElement("span", { className: "icon icon-tag" })
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "btn-group" },
						_react2["default"].createElement(
							"button",
							{ className: "btn btn-default" },
							_react2["default"].createElement("span", { className: "icon icon-cog" })
						),
						_react2["default"].createElement(
							_reactRouter.Link,
							{ className: logsClass, title: "Logs", to: "/logs" },
							_react2["default"].createElement("span", { className: "icon icon-menu" })
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "search-bar pull-right" },
						_react2["default"].createElement("input", { type: "search", className: "form-control", placeholder: "Search" })
					)
				)
			);
		}
	}]);

	return Header;
})(_react2["default"].Component);

exports["default"] = Header;
module.exports = exports["default"];

},{"jquery":"jquery","react":"react","react-router":"react-router"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var Login = (function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		_get(Object.getPrototypeOf(Login.prototype), "constructor", this).call(this, props);
		this.state = {};
	}

	// COMPONENT DID MOUNT

	_createClass(Login, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			if (localStorage.getItem("settings.auth.username") && localStorage.getItem("settings.auth.username").length > 0 && localStorage.getItem("settings.auth.password") && localStorage.getItem("settings.auth.password").length > 0 && localStorage.getItem("settings.host") && localStorage.getItem("settings.host").length > 0) {

				this.goHome();
			}
		}

		// HANDLE CHANGE
	}, {
		key: "handleChange",
		value: function handleChange(event) {

			var s = {};
			s[event.target.name] = event.target.value;
			this.setState(s);
		}

		// HANDLE LOGIN
	}, {
		key: "handleLogin",
		value: function handleLogin() {

			// a bit of validation
			if (!("host" in this.state) || this.state.host.length <= 0) {
				return;
			}

			if (!("username" in this.state) || this.state.username.length <= 0) {
				return;
			}

			if (!("password" in this.state) || this.state.password.length <= 0) {
				return;
			}

			// check if host has http as prefix
			var host = this.state.host;
			if (host.indexOf("http://") < 0 && host.indexOf("https://") < 0) {
				host = "http://" + host;
			}

			// all is fine
			localStorage.setItem("settings.auth.username", this.state.username);
			localStorage.setItem("settings.auth.password", this.state.password);
			localStorage.setItem("settings.host", host);

			alert("Logged in!");
			this.goHome();
		}

		// GO HOME
	}, {
		key: "goHome",
		value: function goHome() {
			this.props.history.push("/documents");
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "center-form" },
				_react2["default"].createElement(
					"form",
					null,
					_react2["default"].createElement(
						"div",
						{ className: "form-group" },
						_react2["default"].createElement(
							"label",
							null,
							"Hostname / IP"
						),
						_react2["default"].createElement("input", { type: "text", name: "host", onChange: this.handleChange.bind(this), className: "form-control", placeholder: "Host / IP to reach paperless, eg. http://localhost:1234" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "form-group" },
						_react2["default"].createElement(
							"label",
							null,
							"Username"
						),
						_react2["default"].createElement("input", { type: "username", onChange: this.handleChange.bind(this), name: "username", className: "form-control", placeholder: "Username" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "form-group" },
						_react2["default"].createElement(
							"label",
							null,
							"Password"
						),
						_react2["default"].createElement("input", { type: "password", onChange: this.handleChange.bind(this), name: "password", className: "form-control", placeholder: "Password" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "form-actions" },
						_react2["default"].createElement(
							"button",
							{ type: "button", onClick: this.handleLogin.bind(this), className: "btn btn-form btn-primary" },
							"Log in"
						)
					)
				)
			);
		}
	}]);

	return Login;
})(_react2["default"].Component);

exports["default"] = Login;
module.exports = exports["default"];

},{"./Header":10,"react":"react"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsLogsActions = require("../actions/LogsActions");

var _actionsLogsActions2 = _interopRequireDefault(_actionsLogsActions);

var _storesLogsStore = require("../stores/LogsStore");

var _storesLogsStore2 = _interopRequireDefault(_storesLogsStore);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var Logs = (function (_React$Component) {
	_inherits(Logs, _React$Component);

	function Logs(props) {
		_classCallCheck(this, Logs);

		_get(Object.getPrototypeOf(Logs.prototype), "constructor", this).call(this, props);
		this.state = _storesLogsStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(Logs, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			(0, _jquery2["default"])(window).trigger("headerActiveItem", { "item": "logs" });
			_storesLogsStore2["default"].listen(this.onChange);
			_actionsLogsActions2["default"].getLogs();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesLogsStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			if (!this.state.logs || !("results" in this.state.logs)) return null;

			return _react2["default"].createElement(
				"div",
				{ className: "pane" },
				_react2["default"].createElement(
					"table",
					{ className: "table-striped" },
					_react2["default"].createElement(
						"thead",
						null,
						_react2["default"].createElement(
							"tr",
							null,
							_react2["default"].createElement(
								"th",
								null,
								"Date"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Log"
							)
						)
					),
					_react2["default"].createElement(
						"tbody",
						null,
						this.state.logs.results.map(function (l) {
							return _react2["default"].createElement(
								"tr",
								{ key: l.time },
								_react2["default"].createElement(
									"td",
									null,
									(0, _moment2["default"])(l.time).format("LLLL")
								),
								_react2["default"].createElement(
									"td",
									null,
									l.messages
								)
							);
						})
					)
				)
			);
		}
	}]);

	return Logs;
})(_react2["default"].Component);

exports["default"] = Logs;
module.exports = exports["default"];

},{"../actions/LogsActions":3,"../stores/LogsStore":23,"jquery":"jquery","moment":"moment","react":"react"}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PaperlessComponent = (function (_React$Component) {
	_inherits(PaperlessComponent, _React$Component);

	function PaperlessComponent(props) {
		_classCallCheck(this, PaperlessComponent);

		_get(Object.getPrototypeOf(PaperlessComponent.prototype), "constructor", this).call(this, props);
	}

	// GET HOST

	_createClass(PaperlessComponent, [{
		key: "getHost",
		value: function getHost() {

			var host = localStorage.getItem("settings.host");
			host = host.replace("http://", "http://" + localStorage.getItem("settings.auth.username") + ":" + localStorage.getItem("settings.auth.password") + "@");

			host = host.replace("https://", "https://" + localStorage.getItem("settings.auth.username") + ":" + localStorage.getItem("settings.auth.password") + "@");

			return host;
		}

		// GET DATA URI
	}, {
		key: "getDataUri",
		value: function getDataUri(url, callback) {
			var image = new Image();

			image.onload = function () {
				var canvas = document.createElement('canvas');
				canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
				canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

				canvas.getContext('2d').drawImage(this, 0, 0);

				// ... or get as Data URI
				callback(canvas.toDataURL('image/png'));
			};

			image.src = url;
		}
	}]);

	return PaperlessComponent;
})(_react2["default"].Component);

exports["default"] = PaperlessComponent;
module.exports = exports["default"];

},{"react":"react"}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SidebarTags = require("./SidebarTags");

var _SidebarTags2 = _interopRequireDefault(_SidebarTags);

var _SidebarCorrespondents = require("./SidebarCorrespondents");

var _SidebarCorrespondents2 = _interopRequireDefault(_SidebarCorrespondents);

var Sidebar = (function (_React$Component) {
	_inherits(Sidebar, _React$Component);

	function Sidebar(props) {
		_classCallCheck(this, Sidebar);

		_get(Object.getPrototypeOf(Sidebar.prototype), "constructor", this).call(this, props);
	}

	// COMPONENT DID MOUNT

	_createClass(Sidebar, [{
		key: "componentDidMount",
		value: function componentDidMount() {}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "pane pane-sm sidebar" },
				_react2["default"].createElement(_SidebarCorrespondents2["default"], { setCorrespondentFilter: this.props.setCorrespondentFilter }),
				_react2["default"].createElement(_SidebarTags2["default"], { setTagFilter: this.props.setTagFilter })
			);
		}
	}]);

	return Sidebar;
})(_react2["default"].Component);

exports["default"] = Sidebar;
module.exports = exports["default"];

},{"./SidebarCorrespondents":16,"./SidebarTags":18,"react":"react"}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var SidebarCorrespondentItem = (function (_React$Component) {
	_inherits(SidebarCorrespondentItem, _React$Component);

	function SidebarCorrespondentItem(props) {
		_classCallCheck(this, SidebarCorrespondentItem);

		_get(Object.getPrototypeOf(SidebarCorrespondentItem.prototype), "constructor", this).call(this, props);
		this.state = {
			"active": false
		};
	}

	// COMPONENT DID MOUNT

	_createClass(SidebarCorrespondentItem, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			(0, _jquery2["default"])(window).on("changeExternCorrespendent", this.changeExternCorrespendent.bind(this));
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			(0, _jquery2["default"])(window).off("changeExternCorrespendent");
		}

		// SET CORRESPONDENT FILTER
	}, {
		key: "setCorrespondentFilter",
		value: function setCorrespondentFilter() {

			(0, _jquery2["default"])(window).trigger("changeExternCorrespendent", { "correspondent": this.props.correspondent.slug });

			// set or unset the tag
			if (this.state.active === true) {
				this.props.setCorrespondentFilter(null);
			} else {
				this.props.setCorrespondentFilter(this.props.correspondent.slug);
			}

			// toggle active state
			this.setState({
				"active": !this.state.active
			});
		}

		// CHANGE EXTERN CORRESPONDENT
	}, {
		key: "changeExternCorrespendent",
		value: function changeExternCorrespendent(e, data) {

			if (this.props.correspondent.slug !== data.correspondent) {
				this.setState({
					"active": false
				});
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			var itemClass = "nav-group-item";
			if (this.state.active === true) {
				itemClass += " active";
			}

			return _react2["default"].createElement(
				"span",
				{ className: itemClass, key: this.props.correspondent.id, onClick: this.setCorrespondentFilter.bind(this) },
				_react2["default"].createElement("span", { className: "icon icon-user" }),
				this.props.correspondent.name
			);
		}
	}]);

	return SidebarCorrespondentItem;
})(_react2["default"].Component);

exports["default"] = SidebarCorrespondentItem;
module.exports = exports["default"];

},{"jquery":"jquery","react":"react"}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsCorrespondentsActions = require("../actions/CorrespondentsActions");

var _actionsCorrespondentsActions2 = _interopRequireDefault(_actionsCorrespondentsActions);

var _storesCorrespondentsStore = require("../stores/CorrespondentsStore");

var _storesCorrespondentsStore2 = _interopRequireDefault(_storesCorrespondentsStore);

var _SidebarCorrespondentItem = require("./SidebarCorrespondentItem");

var _SidebarCorrespondentItem2 = _interopRequireDefault(_SidebarCorrespondentItem);

var SidebarCorrespondents = (function (_React$Component) {
	_inherits(SidebarCorrespondents, _React$Component);

	function SidebarCorrespondents(props) {
		_classCallCheck(this, SidebarCorrespondents);

		_get(Object.getPrototypeOf(SidebarCorrespondents.prototype), "constructor", this).call(this, props);
		this.state = _storesCorrespondentsStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(SidebarCorrespondents, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesCorrespondentsStore2["default"].listen(this.onChange);
			_actionsCorrespondentsActions2["default"].getTags();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesCorrespondentsStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			if (!this.state.correspondents || !("results" in this.state.correspondents)) return null;

			return _react2["default"].createElement(
				"nav",
				{ className: "nav-group" },
				_react2["default"].createElement(
					"h5",
					{ className: "nav-group-title" },
					"Correspondents"
				),
				this.state.correspondents.results.map(function (c) {
					return _react2["default"].createElement(_SidebarCorrespondentItem2["default"], { correspondent: c, key: c.id, setCorrespondentFilter: _this.props.setCorrespondentFilter });
				})
			);
		}
	}]);

	return SidebarCorrespondents;
})(_react2["default"].Component);

exports["default"] = SidebarCorrespondents;
module.exports = exports["default"];

},{"../actions/CorrespondentsActions":1,"../stores/CorrespondentsStore":21,"./SidebarCorrespondentItem":15,"react":"react"}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var SidebarTagItem = (function (_React$Component) {
	_inherits(SidebarTagItem, _React$Component);

	function SidebarTagItem(props) {
		_classCallCheck(this, SidebarTagItem);

		_get(Object.getPrototypeOf(SidebarTagItem.prototype), "constructor", this).call(this, props);
		this.state = {
			"active": false
		};
	}

	// COMPONENT DID MOUNT

	_createClass(SidebarTagItem, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			(0, _jquery2["default"])(window).on("changeExternTag", this.changeExternTag.bind(this));
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			(0, _jquery2["default"])(window).off("changeExternTag");
		}

		// GET TAG COLOR
	}, {
		key: "getTagColor",
		value: function getTagColor(idx) {
			var colors = ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#b15928", "#000000", "#cccccc"];
			return colors[idx - 1];
		}

		// SET TAG FILTER
	}, {
		key: "setTagFilter",
		value: function setTagFilter() {

			(0, _jquery2["default"])(window).trigger("changeExternTag", { "tag": this.props.tag.slug });

			// set or unset the tag
			if (this.state.active === true) {
				this.props.setTagFilter(null);
			} else {
				this.props.setTagFilter(this.props.tag.slug);
			}

			// toggle active state
			this.setState({
				"active": !this.state.active
			});
		}

		// CHANGE EXTERN TAG
	}, {
		key: "changeExternTag",
		value: function changeExternTag(e, data) {

			if (this.props.tag.slug !== data.tag) {
				this.setState({
					"active": false
				});
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			var itemClass = "nav-group-item";
			if (this.state.active === true) {
				itemClass += " active";
			}

			return _react2["default"].createElement(
				"span",
				{ className: itemClass, key: this.props.tag.id, onClick: this.setTagFilter.bind(this) },
				_react2["default"].createElement("span", { className: "icon icon-record", style: {
						color: this.getTagColor(this.props.tag.colour)
					} }),
				this.props.tag.name
			);
		}
	}]);

	return SidebarTagItem;
})(_react2["default"].Component);

exports["default"] = SidebarTagItem;
module.exports = exports["default"];

},{"jquery":"jquery","react":"react"}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsTagsActions = require("../actions/TagsActions");

var _actionsTagsActions2 = _interopRequireDefault(_actionsTagsActions);

var _storesTagsStore = require("../stores/TagsStore");

var _storesTagsStore2 = _interopRequireDefault(_storesTagsStore);

var _SidebarTagItem = require("./SidebarTagItem");

var _SidebarTagItem2 = _interopRequireDefault(_SidebarTagItem);

var SidebarTags = (function (_React$Component) {
	_inherits(SidebarTags, _React$Component);

	function SidebarTags(props) {
		_classCallCheck(this, SidebarTags);

		_get(Object.getPrototypeOf(SidebarTags.prototype), "constructor", this).call(this, props);
		this.state = _storesTagsStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(SidebarTags, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesTagsStore2["default"].listen(this.onChange);
			_actionsTagsActions2["default"].getTags();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesTagsStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			if (!this.state.tags || !("results" in this.state.tags)) return null;

			return _react2["default"].createElement(
				"nav",
				{ className: "nav-group" },
				_react2["default"].createElement(
					"h5",
					{ className: "nav-group-title" },
					"Tags"
				),
				this.state.tags.results.map(function (t) {
					return _react2["default"].createElement(_SidebarTagItem2["default"], { tag: t, key: t.id, setTagFilter: _this.props.setTagFilter });
				})
			);
		}
	}]);

	return SidebarTags;
})(_react2["default"].Component);

exports["default"] = SidebarTags;
module.exports = exports["default"];

},{"../actions/TagsActions":4,"../stores/TagsStore":24,"./SidebarTagItem":17,"react":"react"}],19:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

_reactDom2["default"].render(_react2["default"].createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _routes2["default"]
), document.getElementById("app"));

},{"./routes":20,"react":"react","react-dom":"react-dom","react-router":"react-router"}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _componentsApp = require("./components/App");

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsDocuments = require("./components/Documents");

var _componentsDocuments2 = _interopRequireDefault(_componentsDocuments);

var _componentsLogin = require("./components/Login");

var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

var _componentsDocumentDetail = require("./components/DocumentDetail");

var _componentsDocumentDetail2 = _interopRequireDefault(_componentsDocumentDetail);

var _componentsLogs = require("./components/Logs");

var _componentsLogs2 = _interopRequireDefault(_componentsLogs);

exports["default"] = _react2["default"].createElement(
	_reactRouter.Route,
	{ path: "/", component: _componentsApp2["default"] },
	_react2["default"].createElement(_reactRouter.IndexRoute, { component: _componentsLogin2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/documents", component: _componentsDocuments2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/document/:id", component: _componentsDocumentDetail2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/logs", component: _componentsLogs2["default"] })
);
module.exports = exports["default"];

},{"./components/App":6,"./components/DocumentDetail":7,"./components/Documents":9,"./components/Login":11,"./components/Logs":12,"react":"react","react-router":"react-router"}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsCorrespondentsActions = require("../actions/CorrespondentsActions");

var _actionsCorrespondentsActions2 = _interopRequireDefault(_actionsCorrespondentsActions);

// CORRESPONDENTS STORE

var CorrespondentsStore = (function () {
	function CorrespondentsStore() {
		_classCallCheck(this, CorrespondentsStore);

		this.bindActions(_actionsCorrespondentsActions2["default"]);
		this.correspondents = [];
	}

	// GET CORRESPONDENTS SUCCESS

	_createClass(CorrespondentsStore, [{
		key: "getCorrespondentsSuccess",
		value: function getCorrespondentsSuccess(result) {
			this.correspondents = result.data;
		}

		// GET CORRESPONDENTS FAIL
	}, {
		key: "getCorrespondentsFail",
		value: function getCorrespondentsFail(err) {
			console.error(err);
		}
	}]);

	return CorrespondentsStore;
})();

exports["default"] = _alt2["default"].createStore(CorrespondentsStore);
module.exports = exports["default"];

},{"../actions/CorrespondentsActions":1,"../alt":5}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsDocumentsActions = require("../actions/DocumentsActions");

var _actionsDocumentsActions2 = _interopRequireDefault(_actionsDocumentsActions);

// DOCUMENTS STORE

var DocumentsStore = (function () {
	function DocumentsStore() {
		_classCallCheck(this, DocumentsStore);

		this.bindActions(_actionsDocumentsActions2["default"]);
		this.documents = [];
	}

	// GET DOCUMENTS SUCCESS

	_createClass(DocumentsStore, [{
		key: "getDocumentsSuccess",
		value: function getDocumentsSuccess(result) {
			this.documents = result.data;
		}

		// GET DOCUMENTS FAIL
	}, {
		key: "getDocumentsFail",
		value: function getDocumentsFail(err) {
			console.error(err);
		}
	}]);

	return DocumentsStore;
})();

exports["default"] = _alt2["default"].createStore(DocumentsStore);
module.exports = exports["default"];

},{"../actions/DocumentsActions":2,"../alt":5}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsLogsActions = require("../actions/LogsActions");

var _actionsLogsActions2 = _interopRequireDefault(_actionsLogsActions);

// LOGS STORE

var LogsStore = (function () {
	function LogsStore() {
		_classCallCheck(this, LogsStore);

		this.bindActions(_actionsLogsActions2["default"]);
		this.logs = [];
	}

	// GET LOGS SUCCESS

	_createClass(LogsStore, [{
		key: "getLogsSuccess",
		value: function getLogsSuccess(result) {
			this.logs = result.data;
		}

		// GET LOGS FAIL
	}, {
		key: "getLogsFail",
		value: function getLogsFail(err) {
			console.error(err);
		}
	}]);

	return LogsStore;
})();

exports["default"] = _alt2["default"].createStore(LogsStore);
module.exports = exports["default"];

},{"../actions/LogsActions":3,"../alt":5}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsTagsActions = require("../actions/TagsActions");

var _actionsTagsActions2 = _interopRequireDefault(_actionsTagsActions);

// TAGS STORE

var TagsStore = (function () {
	function TagsStore() {
		_classCallCheck(this, TagsStore);

		this.bindActions(_actionsTagsActions2["default"]);
		this.tags = [];
	}

	// GET TAGS SUCCESS

	_createClass(TagsStore, [{
		key: "getTagsSuccess",
		value: function getTagsSuccess(result) {
			this.tags = result.data;
		}

		// GET TAGS FAIL
	}, {
		key: "getTagsFail",
		value: function getTagsFail(err) {
			console.error(err);
		}
	}]);

	return TagsStore;
})();

exports["default"] = _alt2["default"].createStore(TagsStore);
module.exports = exports["default"];

},{"../actions/TagsActions":4,"../alt":5}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = shouldPureComponentUpdate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _shallowEqual = require('./shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function shouldPureComponentUpdate(nextProps, nextState) {
  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
}

module.exports = exports['default'];
},{"./shallowEqual":26}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = shallowEqual;

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];
},{}]},{},[19]);
