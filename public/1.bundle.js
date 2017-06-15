webpackJsonp([1],{

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./actions/DataActions": 646,
		"./actions/DataActions.js": 646,
		"./alt/alt": 629,
		"./alt/alt.js": 629,
		"./components/About": 742,
		"./components/About.js": 742,
		"./components/App": 275,
		"./components/App.js": 275,
		"./components/Contact": 743,
		"./components/Contact.js": 743,
		"./components/Home": 727,
		"./components/Home.js": 727,
		"./components/Login/Login": 733,
		"./components/Login/Login.js": 733,
		"./components/Login/LoginForm": 734,
		"./components/Login/LoginForm.css": 735,
		"./components/Login/LoginForm.js": 734,
		"./components/LoginForm": 744,
		"./components/LoginForm.js": 744,
		"./components/Nav": 276,
		"./components/Nav.js": 276,
		"./components/Page": 728,
		"./components/Page.js": 728,
		"./components/Post": 731,
		"./components/Post.js": 731,
		"./components/RecentPosts": 730,
		"./components/RecentPosts.js": 730,
		"./components/Slider": 732,
		"./components/Slider.js": 732,
		"./components/bloglist": 729,
		"./components/bloglist.js": 729,
		"./components/views": 740,
		"./components/views.js": 740,
		"./index": 77,
		"./index.js": 77,
		"./reducers/LoginReducer": 672,
		"./reducers/LoginReducer.js": 672,
		"./reducers/index": 726,
		"./reducers/index.js": 726,
		"./stores/DataStore": 628,
		"./stores/DataStore.js": 628,
		"./stores/LoginStore": 723,
		"./stores/LoginStore.js": 723,
		"./styles/theme.css": 745
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 741;


/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(184); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(184);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DataStore = __webpack_require__(628);
	
	var _DataStore2 = _interopRequireDefault(_DataStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);
	
	    function Home() {
	        _classCallCheck(this, Home);
	
	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }
	
	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            var page = _DataStore2.default.getPageBySlug('about');
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    page.title.rendered
	                )
	            );
	        }
	    }]);
	
	    return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(643); if (makeExportsHot(module, __webpack_require__(184))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "About.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(184); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(184);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DataStore = __webpack_require__(628);
	
	var _DataStore2 = _interopRequireDefault(_DataStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Contact = function (_React$Component) {
	    _inherits(Contact, _React$Component);
	
	    function Contact() {
	        _classCallCheck(this, Contact);
	
	        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	    }
	
	    _createClass(Contact, [{
	        key: 'render',
	        value: function render() {
	            var page = _DataStore2.default.getPageBySlug('contact');
	            console.log(page, 'page');
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    page.title.rendered
	                ),
	                _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: page.content.rendered } })
	            );
	        }
	    }]);
	
	    return Contact;
	}(_react2.default.Component);
	
	exports.default = Contact;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(643); if (makeExportsHot(module, __webpack_require__(184))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Contact.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(184); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(184);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(593);
	
	var _LoginReducer = __webpack_require__(672);
	
	var authActions = _interopRequireWildcard(_LoginReducer);
	
	var _redux = __webpack_require__(602);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import './LoginForm.css';
	
	
	var LoginForm = function (_Component) {
	  _inherits(LoginForm, _Component);
	
	  function LoginForm(props) {
	    _classCallCheck(this, LoginForm);
	
	    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));
	
	    _this.state = {};
	    _this.onSubmit = _this.onSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(LoginForm, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _state = this.state,
	          email = _state.email,
	          password = _state.password;
	      var _props = this.props,
	          isLoginPending = _props.isLoginPending,
	          isLoginSuccess = _props.isLoginSuccess,
	          loginError = _props.loginError;
	
	      return _react2.default.createElement(
	        'form',
	        { name: 'loginForm', onSubmit: this.onSubmit },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group-collection' },
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Email:'
	            ),
	            _react2.default.createElement('input', { type: 'email', name: 'email', onChange: function onChange(e) {
	                return _this2.setState({ email: e.target.value });
	              }, value: email })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Password:'
	            ),
	            _react2.default.createElement('input', { type: 'password', name: 'password', onChange: function onChange(e) {
	                return _this2.setState({ password: e.target.value });
	              }, value: password })
	          )
	        ),
	        _react2.default.createElement('input', { type: 'submit', value: 'Login' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'message' },
	          isLoginPending && _react2.default.createElement(
	            'div',
	            null,
	            'Please wait...'
	          ),
	          isLoginSuccess && _react2.default.createElement(
	            'div',
	            null,
	            'Success.'
	          ),
	          loginError && _react2.default.createElement(
	            'div',
	            null,
	            loginError.message
	          )
	        )
	      );
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(e) {
	      e.preventDefault();
	      var _state2 = this.state,
	          email = _state2.email,
	          password = _state2.password;
	
	      this.props.authActions.login(email, password);
	      this.setState({
	        email: '',
	        password: ''
	      });
	    }
	  }]);
	
	  return LoginForm;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    isLoginPending: state.isLoginPending,
	    isLoginSuccess: state.isLoginSuccess,
	    loginError: state.loginError
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    //login: (email, password) => dispatch(login(email, password))
	    authActions: (0, _redux.bindActionCreators)(authActions, dispatch)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginForm);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(643); if (makeExportsHot(module, __webpack_require__(184))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "LoginForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(746);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;
	
	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(738)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(746, function() {
				var newContent = __webpack_require__(746);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(737)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLmNzcz9iYTkwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWUuY3NzIl0sIm5hbWVzIjpbIkhvbWUiLCJwYWdlIiwiZ2V0UGFnZUJ5U2x1ZyIsInRpdGxlIiwicmVuZGVyZWQiLCJDb21wb25lbnQiLCJDb250YWN0IiwiY29uc29sZSIsImxvZyIsIl9faHRtbCIsImNvbnRlbnQiLCJhdXRoQWN0aW9ucyIsIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJvblN1Ym1pdCIsImJpbmQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNMb2dpblBlbmRpbmciLCJpc0xvZ2luU3VjY2VzcyIsImxvZ2luRXJyb3IiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ2luIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7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LEtBQUtiLEtBRnJCO0FBQUEsV0FFSkcsS0FGSSxXQUVKQSxLQUZJO0FBQUEsV0FFR0MsUUFGSCxXQUVHQSxRQUZIOztBQUdWLFlBQUtMLEtBQUwsQ0FBV0YsV0FBWCxDQUF1QmlCLEtBQXZCLENBQTZCWCxLQUE3QixFQUFvQ0MsUUFBcEM7QUFDQSxZQUFLSSxRQUFMLENBQWM7QUFDWkwsZ0JBQU8sRUFESztBQUVaQyxtQkFBVTtBQUZFLFFBQWQ7QUFJRDs7Ozs7O0FBR0gsS0FBTVcsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDZixLQUFELEVBQVc7QUFDakMsVUFBTztBQUNMSyxxQkFBZ0JMLE1BQU1LLGNBRGpCO0FBRUxDLHFCQUFnQk4sTUFBTU0sY0FGakI7QUFHTEMsaUJBQVlQLE1BQU1PO0FBSGIsSUFBUDtBQUtELEVBTkQ7O0FBUUEsS0FBTVMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFVBQU87QUFDTDtBQUNBcEIsa0JBQWEsK0JBQW1CQSxXQUFuQixFQUFnQ29CLFFBQWhDO0FBRlIsSUFBUDtBQUlELEVBTEQ7O21CQU9lLHlCQUFRRixlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkNsQixTQUE3QyxDOzs7Ozs7Ozs7O0FDckVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FjdGlvbnMvRGF0YUFjdGlvbnNcIjogNjQ2LFxuXHRcIi4vYWN0aW9ucy9EYXRhQWN0aW9ucy5qc1wiOiA2NDYsXG5cdFwiLi9hbHQvYWx0XCI6IDYyOSxcblx0XCIuL2FsdC9hbHQuanNcIjogNjI5LFxuXHRcIi4vY29tcG9uZW50cy9BYm91dFwiOiA3NDIsXG5cdFwiLi9jb21wb25lbnRzL0Fib3V0LmpzXCI6IDc0Mixcblx0XCIuL2NvbXBvbmVudHMvQXBwXCI6IDI3NSxcblx0XCIuL2NvbXBvbmVudHMvQXBwLmpzXCI6IDI3NSxcblx0XCIuL2NvbXBvbmVudHMvQ29udGFjdFwiOiA3NDMsXG5cdFwiLi9jb21wb25lbnRzL0NvbnRhY3QuanNcIjogNzQzLFxuXHRcIi4vY29tcG9uZW50cy9Ib21lXCI6IDcyNyxcblx0XCIuL2NvbXBvbmVudHMvSG9tZS5qc1wiOiA3MjcsXG5cdFwiLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luXCI6IDczMyxcblx0XCIuL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanNcIjogNzMzLFxuXHRcIi4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm1cIjogNzM0LFxuXHRcIi4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm0uY3NzXCI6IDczNSxcblx0XCIuL2NvbXBvbmVudHMvTG9naW4vTG9naW5Gb3JtLmpzXCI6IDczNCxcblx0XCIuL2NvbXBvbmVudHMvTG9naW5Gb3JtXCI6IDc0NCxcblx0XCIuL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzXCI6IDc0NCxcblx0XCIuL2NvbXBvbmVudHMvTmF2XCI6IDI3Nixcblx0XCIuL2NvbXBvbmVudHMvTmF2LmpzXCI6IDI3Nixcblx0XCIuL2NvbXBvbmVudHMvUGFnZVwiOiA3MjgsXG5cdFwiLi9jb21wb25lbnRzL1BhZ2UuanNcIjogNzI4LFxuXHRcIi4vY29tcG9uZW50cy9Qb3N0XCI6IDczMSxcblx0XCIuL2NvbXBvbmVudHMvUG9zdC5qc1wiOiA3MzEsXG5cdFwiLi9jb21wb25lbnRzL1JlY2VudFBvc3RzXCI6IDczMCxcblx0XCIuL2NvbXBvbmVudHMvUmVjZW50UG9zdHMuanNcIjogNzMwLFxuXHRcIi4vY29tcG9uZW50cy9TbGlkZXJcIjogNzMyLFxuXHRcIi4vY29tcG9uZW50cy9TbGlkZXIuanNcIjogNzMyLFxuXHRcIi4vY29tcG9uZW50cy9ibG9nbGlzdFwiOiA3MjksXG5cdFwiLi9jb21wb25lbnRzL2Jsb2dsaXN0LmpzXCI6IDcyOSxcblx0XCIuL2NvbXBvbmVudHMvdmlld3NcIjogNzQwLFxuXHRcIi4vY29tcG9uZW50cy92aWV3cy5qc1wiOiA3NDAsXG5cdFwiLi9pbmRleFwiOiA3Nyxcblx0XCIuL2luZGV4LmpzXCI6IDc3LFxuXHRcIi4vcmVkdWNlcnMvTG9naW5SZWR1Y2VyXCI6IDY3Mixcblx0XCIuL3JlZHVjZXJzL0xvZ2luUmVkdWNlci5qc1wiOiA2NzIsXG5cdFwiLi9yZWR1Y2Vycy9pbmRleFwiOiA3MjYsXG5cdFwiLi9yZWR1Y2Vycy9pbmRleC5qc1wiOiA3MjYsXG5cdFwiLi9zdG9yZXMvRGF0YVN0b3JlXCI6IDYyOCxcblx0XCIuL3N0b3Jlcy9EYXRhU3RvcmUuanNcIjogNjI4LFxuXHRcIi4vc3RvcmVzL0xvZ2luU3RvcmVcIjogNzIzLFxuXHRcIi4vc3RvcmVzL0xvZ2luU3RvcmUuanNcIjogNzIzLFxuXHRcIi4vc3R5bGVzL3RoZW1lLmNzc1wiOiA3NDVcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNzQxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gNzQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCAgICAgICAgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGF0YVN0b3JlICAgIGZyb20gJy4vLi4vc3RvcmVzL0RhdGFTdG9yZS5qcyc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHBhZ2UgPSBEYXRhU3RvcmUuZ2V0UGFnZUJ5U2x1ZygnYWJvdXQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57cGFnZS50aXRsZS5yZW5kZXJlZH08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcyIsImltcG9ydCBSZWFjdCAgICAgICAgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGF0YVN0b3JlICAgIGZyb20gJy4vLi4vc3RvcmVzL0RhdGFTdG9yZS5qcyc7XHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHBhZ2UgPSBEYXRhU3RvcmUuZ2V0UGFnZUJ5U2x1ZygnY29udGFjdCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UsJ3BhZ2UnKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPntwYWdlLnRpdGxlLnJlbmRlcmVkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwYWdlLmNvbnRlbnQucmVuZGVyZWR9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zICBmcm9tICcuLi9yZWR1Y2Vycy9Mb2dpblJlZHVjZXInO1xyXG4vL2ltcG9ydCAnLi9Mb2dpbkZvcm0uY3NzJztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuXHJcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtlbWFpbCwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCB7aXNMb2dpblBlbmRpbmcsIGlzTG9naW5TdWNjZXNzLCBsb2dpbkVycm9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBuYW1lPVwibG9naW5Gb3JtXCIgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cC1jb2xsZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KX0gdmFsdWU9e2VtYWlsfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZS50YXJnZXQudmFsdWV9KX0gdmFsdWU9e3Bhc3N3b3JkfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICB7IGlzTG9naW5QZW5kaW5nICYmIDxkaXY+UGxlYXNlIHdhaXQuLi48L2Rpdj4gfVxyXG4gICAgICAgICAgeyBpc0xvZ2luU3VjY2VzcyAmJiA8ZGl2PlN1Y2Nlc3MuPC9kaXY+IH1cclxuICAgICAgICAgIHsgbG9naW5FcnJvciAmJiA8ZGl2Pntsb2dpbkVycm9yLm1lc3NhZ2V9PC9kaXY+IH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5wcm9wcy5hdXRoQWN0aW9ucy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvZ2luUGVuZGluZzogc3RhdGUuaXNMb2dpblBlbmRpbmcsXHJcbiAgICBpc0xvZ2luU3VjY2Vzczogc3RhdGUuaXNMb2dpblN1Y2Nlc3MsXHJcbiAgICBsb2dpbkVycm9yOiBzdGF0ZS5sb2dpbkVycm9yXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vbG9naW46IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoKGxvZ2luKGVtYWlsLCBwYXNzd29yZCkpXHJcbiAgICBhdXRoQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGF1dGhBY3Rpb25zLCBkaXNwYXRjaClcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkZvcm0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RoZW1lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90aGVtZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdGhlbWUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdGhlbWUuY3NzXG4vLyBtb2R1bGUgaWQgPSA3NDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3RoZW1lLmNzc1xuLy8gbW9kdWxlIGlkID0gNzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=