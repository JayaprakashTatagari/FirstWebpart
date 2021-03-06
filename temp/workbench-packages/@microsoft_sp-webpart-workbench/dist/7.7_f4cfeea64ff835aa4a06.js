webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_7_1([7],{

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.base.js
module.exports = __webpack_require__(325);

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/positioning.js
module.exports = __webpack_require__(369);

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/index.js
module.exports = __webpack_require__(322);

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layer__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Layer__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Layer__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Layer__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Layer_base__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Layer_base__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Layer_base__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LayerHost__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LayerHost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__LayerHost__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__LayerHost__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__LayerHost__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.js
module.exports = __webpack_require__(324);

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Layer_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layer_styles__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layer_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layer_styles__);



var Layer = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__Layer_base__["LayerBase"], __WEBPACK_IMPORTED_MODULE_2__Layer_styles__["getStyles"]);


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fabric__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Utilities__);

/* tslint:disable:no-unused-variable */


/* tslint:enable:no-unused-variable */


var _layersByHostId = {};
var _defaultHostSelector;
var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["classNamesFunction"])();
var LayerBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["createRef"])();
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    LayerBase.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    /**
     * Sets the default target selector to use when determining the host in which
     * Layered content will be injected into. If not provided, an element will be
     * created at the end of the document body.
     *
     * Passing in a falsey value will clear the default target and reset back to
     * using a created element at the end of document body.
     */
    LayerBase.setDefaultTarget = function (selector) {
        _defaultHostSelector = selector;
    };
    LayerBase.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    LayerBase.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    LayerBase.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        var _a = this.props, className = _a.className, getStyles = _a.getStyles, theme = _a.theme;
        var classNames = getClassNames(getStyles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var rootElement = this._rootElement.current;
                var doc = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getDocument"])(rootElement);
                if (!doc || !rootElement) {
                    return;
                }
                this._layerElement = doc.createElement('div');
                this._layerElement.className = classNames.root;
                host.appendChild(this._layerElement);
                Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["setVirtualParent"])(this._layerElement, rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            __WEBPACK_IMPORTED_MODULE_2_react_dom__["unstable_renderSubtreeIntoContainer"](this, (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fabric__["Fabric"], { className: classNames.content }, this.props.children)), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
    };
    LayerBase.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'ms-Layer', ref: this._rootElement }));
    };
    LayerBase.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            __WEBPACK_IMPORTED_MODULE_2_react_dom__["unmountComponentAtNode"](this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getDocument"])(this._rootElement.current);
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return _defaultHostSelector ? doc.querySelector(_defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["customizable"])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(__WEBPACK_IMPORTED_MODULE_4__Utilities__["BaseComponent"]));



/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Fabric.js
var pkg = __webpack_require__(1);
module.exports = {}
for (var key in pkg) {
  if (pkg.hasOwnProperty(key)) {
    module.exports[key] = pkg[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.styles.js
module.exports = __webpack_require__(328);

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);

var GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content',
};
var getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getGlobalClassNames"])(GlobalClassNames, theme);
    return ({
        root: [
            classNames.root,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: __WEBPACK_IMPORTED_MODULE_0__Styling__["ZIndexes"].Layer,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    });
};


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/LayerHost.js
module.exports = __webpack_require__(330);

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer_base__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Layer_base__);




var LayerHost = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        __WEBPACK_IMPORTED_MODULE_3__Layer_base__["LayerBase"].notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        __WEBPACK_IMPORTED_MODULE_3__Layer_base__["LayerBase"].notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, this.props, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-LayerHost', this.props.className) })));
    };
    return LayerHost;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/FocusTrapZone/index.js
var pkg = __webpack_require__(1);
module.exports = {}
for (var key in pkg) {
  if (pkg.hasOwnProperty(key)) {
    module.exports[key] = pkg[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/positioning/positioning.types.js
module.exports = __webpack_require__(374);

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/TeachingBubble/TeachingBubbleContent.js
module.exports = __webpack_require__(393);

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/TeachingBubble/TeachingBubble.scss.js
module.exports = __webpack_require__(394);

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Coachmark.js
module.exports = __webpack_require__(364);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Coachmark_index__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Coachmark_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Coachmark_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__components_Coachmark_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__components_Coachmark_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/index.js
module.exports = __webpack_require__(366);

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Coachmark__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Coachmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Coachmark__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Coachmark__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Coachmark__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/Coachmark.js
module.exports = __webpack_require__(368);

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_ATTRIBUTE_NAME", function() { return COACHMARK_ATTRIBUTE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coachmark", function() { return Coachmark; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Styling__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_positioning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utilities_positioning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PositioningContainer_index__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PositioningContainer_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PositioningContainer_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Beak_Beak___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Beak_Beak__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FocusTrapZone__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FocusTrapZone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__FocusTrapZone__);

// Utilities




// Component Dependencies




var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
var COACHMARK_ATTRIBUTE_NAME = 'data-coachmarkid';
var Coachmark = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Coachmark, _super);
    function Coachmark(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The cached HTMLElement reference to the Entity Inner Host
         * element.
         */
        _this._entityHost = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._entityInnerHostElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._translateAnimationContainer = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._ariaAlertContainer = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._childrenContainer = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._positioningContainer = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._onKeyDown = function (e) {
            // Open coachmark if user presses ALT + C (arbitrary keypress for now)
            if ((e.altKey && e.which === 67 /* c */) ||
                (e.which === 13 /* enter */ &&
                    _this._translateAnimationContainer.current &&
                    _this._translateAnimationContainer.current.contains(e.target))) {
                _this._onFocusHandler();
            }
        };
        _this._onFocusHandler = function () {
            if (_this.state.isCollapsed) {
                _this._openCoachmark();
            }
        };
        _this._onPositioned = function (positionData) {
            _this._async.requestAnimationFrame((function () {
                _this.setState({
                    targetAlignment: positionData.alignmentEdge,
                    targetPosition: positionData.targetEdge
                });
            }));
        };
        _this._setBeakPosition = function () {
            var beakLeft;
            var beakTop;
            var beakRight;
            var beakBottom;
            var transformOriginX;
            var transformOriginY;
            var targetAlignment = _this.state.targetAlignment;
            var distanceAdjustment = '3px'; // Adjustment distance for Beak to shift towards Coachmark bubble.
            switch (_this._beakDirection) {
                // If Beak is pointing Up or Down
                case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].top:
                case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].bottom:
                    // If there is no target alignment, then beak is X-axis centered in callout
                    if (!targetAlignment) {
                        beakLeft = "calc(50% - " + __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["BEAK_WIDTH"] / 2 + "px)";
                        transformOriginX = 'center';
                    }
                    else {
                        // Beak is aligned to the left of target
                        if (targetAlignment === __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].left) {
                            beakLeft = __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["COACHMARK_WIDTH"] / 2 - __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginX = 'left';
                        }
                        else {
                            // Beak is aligned to the right of target
                            beakRight = __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["COACHMARK_WIDTH"] / 2 - __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginX = 'right';
                        }
                    }
                    if (_this._beakDirection === __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].top) {
                        beakTop = distanceAdjustment;
                        transformOriginY = 'top';
                    }
                    else {
                        beakBottom = distanceAdjustment;
                        transformOriginY = 'bottom';
                    }
                    break;
                // If Beak is pointing Left or Right
                case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].left:
                case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].right:
                    // If there is no target alignment, then beak is Y-axis centered in callout
                    if (!targetAlignment) {
                        beakTop = "calc(50% - " + __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["BEAK_WIDTH"] / 2 + "px)";
                        transformOriginY = "center";
                    }
                    else {
                        // Beak is aligned to the top of target
                        if (targetAlignment === __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].top) {
                            beakTop = __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["COACHMARK_WIDTH"] / 2 - __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginY = "top";
                        }
                        else {
                            // Beak is aligned to the bottom of target
                            beakBottom = __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["COACHMARK_WIDTH"] / 2 - __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginY = "bottom";
                        }
                    }
                    if (_this._beakDirection === __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].left) {
                        beakLeft = distanceAdjustment;
                        transformOriginX = 'left';
                    }
                    else {
                        beakRight = distanceAdjustment;
                        transformOriginX = 'right';
                    }
                    break;
            }
            _this.setState({
                beakLeft: beakLeft,
                beakRight: beakRight,
                beakBottom: beakBottom,
                beakTop: beakTop,
                transformOrigin: transformOriginX + " " + transformOriginY
            });
        };
        _this._openCoachmark = function () {
            _this.setState({
                isCollapsed: false
            });
            if (_this.props.onAnimationOpenStart) {
                _this.props.onAnimationOpenStart();
            }
            _this._entityInnerHostElement.current &&
                _this._entityInnerHostElement.current.addEventListener('transitionend', function () {
                    // Need setTimeout to trigger narrator
                    _this._async.setTimeout(function () {
                        if (_this.props.teachingBubbleRef) {
                            _this.props.teachingBubbleRef.focus();
                        }
                    }, 500);
                    if (_this.props.onAnimationOpenEnd) {
                        _this.props.onAnimationOpenEnd();
                    }
                });
        };
        // Set defaults for state
        _this.state = {
            isCollapsed: props.isCollapsed,
            isBeaconAnimating: true,
            isMeasuring: true,
            entityInnerHostRect: {
                width: 0,
                height: 0
            },
            isMouseInProximity: false,
            isMeasured: false
        };
        return _this;
    }
    Object.defineProperty(Coachmark.prototype, "_beakDirection", {
        get: function () {
            var targetPosition = this.state.targetPosition;
            if (targetPosition === undefined) {
                return __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].bottom;
            }
            return Object(__WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["getOppositeEdge"])(targetPosition);
        },
        enumerable: true,
        configurable: true
    });
    Coachmark.prototype.render = function () {
        var _a = this.props, children = _a.children, target = _a.target, color = _a.color, positioningContainerProps = _a.positioningContainerProps, ariaDescribedBy = _a.ariaDescribedBy, ariaDescribedByText = _a.ariaDescribedByText, ariaLabelledBy = _a.ariaLabelledBy, ariaLabelledByText = _a.ariaLabelledByText, ariaAlertText = _a.ariaAlertText;
        var _b = this.state, beakLeft = _b.beakLeft, beakTop = _b.beakTop, beakRight = _b.beakRight, beakBottom = _b.beakBottom, isCollapsed = _b.isCollapsed, isBeaconAnimating = _b.isBeaconAnimating, isMeasuring = _b.isMeasuring, entityInnerHostRect = _b.entityInnerHostRect, transformOrigin = _b.transformOrigin, alertText = _b.alertText, isMeasured = _b.isMeasured;
        var classNames = getClassNames(__WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["getStyles"], {
            isCollapsed: isCollapsed,
            isBeaconAnimating: isBeaconAnimating,
            isMeasuring: isMeasuring,
            entityHostHeight: entityInnerHostRect.height + "px",
            entityHostWidth: entityInnerHostRect.width + "px",
            width: __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["COACHMARK_WIDTH"] + "px",
            height: __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["COACHMARK_HEIGHT"] + "px",
            color: color,
            transformOrigin: transformOrigin,
            isMeasured: isMeasured
        });
        var finalHeight = isCollapsed ? __WEBPACK_IMPORTED_MODULE_7__Coachmark_styles__["COACHMARK_HEIGHT"] : entityInnerHostRect.height;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__PositioningContainer_index__["PositioningContainer"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ target: target, offsetFromTarget: __WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["BEAK_HEIGHT"], componentRef: this._positioningContainer, finalHeight: finalHeight, onPositioned: this._onPositioned, bounds: this._getBounds() }, positioningContainerProps),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.root },
                ariaAlertText && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.ariaContainer, role: 'alert', ref: this._ariaAlertContainer, "aria-hidden": !isCollapsed }, alertText)),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.pulsingBeacon }),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.translateAnimationContainer, ref: this._translateAnimationContainer },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.scaleAnimationLayer },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.rotateAnimationLayer },
                            this._positioningContainer.current &&
                                isCollapsed && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Beak_Beak__["Beak"], { left: beakLeft, top: beakTop, right: beakRight, bottom: beakBottom, direction: this._beakDirection, color: color })),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.entityHost, ref: this._entityHost, tabIndex: -1, "data-is-focusable": true, role: 'dialog', "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy },
                                isCollapsed && [
                                    ariaLabelledBy && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { id: ariaLabelledBy, key: 0, className: classNames.ariaContainer }, ariaLabelledByText)),
                                    ariaDescribedBy && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { id: ariaDescribedBy, key: 1, className: classNames.ariaContainer }, ariaDescribedByText))
                                ],
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__FocusTrapZone__["FocusTrapZone"], { isClickableOutsideFocusTrap: true, forceFocusInsideTrap: false },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.entityInnerHost, ref: this._entityInnerHostElement },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.childrenContainer, ref: this._childrenContainer, "aria-hidden": isCollapsed }, children))))))))));
    };
    Coachmark.prototype.componentWillReceiveProps = function (newProps) {
        if (this.props.isCollapsed && !newProps.isCollapsed) {
            // The coachmark is about to open
            this._openCoachmark();
        }
    };
    Coachmark.prototype.shouldComponentUpdate = function (newProps, newState) {
        return !Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["shallowCompare"])(newProps, this.props) || !Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["shallowCompare"])(newState, this.state);
    };
    Coachmark.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.targetAlignment !== this.state.targetAlignment || prevState.targetPosition !== this.state.targetPosition) {
            this._setBeakPosition();
        }
    };
    Coachmark.prototype.componentDidMount = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            if (_this._entityInnerHostElement.current &&
                _this.state.entityInnerHostRect.width + _this.state.entityInnerHostRect.width === 0) {
                _this.setState({
                    isMeasuring: false,
                    entityInnerHostRect: {
                        width: _this._entityInnerHostElement.current.offsetWidth,
                        height: _this._entityInnerHostElement.current.offsetHeight
                    },
                    isMeasured: true
                });
                _this._setBeakPosition();
                _this.forceUpdate();
            }
            _this._events.on(document, 'keydown', _this._onKeyDown, true);
            // We dont want to the user to immediatley trigger the coachmark when it's opened
            _this._async.setTimeout(function () {
                _this._addProximityHandler(_this.props.mouseProximityOffset);
            }, _this.props.delayBeforeMouseOpen);
            // Need to add setTimeout to have narrator read change in alert container
            if (_this.props.ariaAlertText) {
                _this._async.setTimeout(function () {
                    if (_this.props.ariaAlertText && _this._ariaAlertContainer.current) {
                        _this.setState({
                            alertText: _this.props.ariaAlertText
                        });
                    }
                }, 0);
            }
            _this._async.setTimeout(function () {
                if (_this._entityHost.current) {
                    _this._entityHost.current.focus();
                }
            }, 1000);
        });
    };
    Coachmark.prototype.componentWillUnmount = function () {
        this._events.off(document, 'keydown', this._onKeyDown, true);
    };
    Coachmark.prototype._getBounds = function () {
        var _a = this.props, isPositionForced = _a.isPositionForced, positioningContainerProps = _a.positioningContainerProps;
        if (isPositionForced) {
            // If directionalHint direction is the top or bottom auto edge, then we want to set the left/right bounds
            // to the window x-axis to have auto positioning work correctly.
            if (positioningContainerProps && (positioningContainerProps.directionalHint === 3 /* topAutoEdge */ ||
                positioningContainerProps.directionalHint === 7 /* bottomAutoEdge */)) {
                return {
                    left: 0,
                    top: -Infinity,
                    bottom: Infinity,
                    right: window.innerWidth,
                    width: window.innerWidth,
                    height: Infinity
                };
            }
            else {
                return {
                    left: -Infinity,
                    top: -Infinity,
                    bottom: Infinity,
                    right: Infinity,
                    width: Infinity,
                    height: Infinity
                };
            }
        }
        else {
            return undefined;
        }
    };
    Coachmark.prototype._addProximityHandler = function (mouseProximityOffset) {
        var _this = this;
        if (mouseProximityOffset === void 0) { mouseProximityOffset = 0; }
        /**
         * An array of cached ids returned when setTimeout runs during
         * the window resize event trigger.
         */
        var timeoutIds = [];
        // Take the initial measure out of the initial render to prevent
        // an unnecessary render.
        this._async.setTimeout(function () {
            _this._setTargetElementRect();
            // When the window resizes we want to async
            // get the bounding client rectangle.
            // Every time the event is triggered we want to
            // setTimeout and then clear any previous instances
            // of setTimeout.
            _this._events.on(window, 'resize', function () {
                timeoutIds.forEach(function (value) {
                    clearInterval(value);
                });
                timeoutIds.push(_this._async.setTimeout(function () {
                    _this._setTargetElementRect();
                }, 100));
            });
        }, 10);
        // Every time the document's mouse move is triggered
        // we want to check if inside of an element and
        // set the state with the result.
        this._events.on(document, 'mousemove', function (e) {
            if (_this.state.isCollapsed) {
                var mouseY = e.pageY;
                var mouseX = e.pageX;
                _this._setTargetElementRect();
                var isMouseInProximity = _this._isInsideElement(mouseX, mouseY, mouseProximityOffset);
                if (isMouseInProximity !== _this.state.isMouseInProximity) {
                    _this._openCoachmark();
                }
            }
            if (_this.props.onMouseMove) {
                _this.props.onMouseMove(e);
            }
        });
    };
    Coachmark.prototype._setTargetElementRect = function () {
        if (this._translateAnimationContainer && this._translateAnimationContainer.current) {
            this._targetElementRect = this._translateAnimationContainer.current.getBoundingClientRect();
        }
    };
    Coachmark.prototype._isInsideElement = function (mouseX, mouseY, mouseProximityOffset) {
        if (mouseProximityOffset === void 0) { mouseProximityOffset = 0; }
        return mouseX > (this._targetElementRect.left - mouseProximityOffset) &&
            mouseX < ((this._targetElementRect.left + this._targetElementRect.width) + mouseProximityOffset) &&
            mouseY > (this._targetElementRect.top - mouseProximityOffset) &&
            mouseY < ((this._targetElementRect.top + this._targetElementRect.height) + mouseProximityOffset);
    };
    Coachmark.defaultProps = {
        isCollapsed: true,
        mouseProximityOffset: 10,
        delayBeforeMouseOpen: 3600,
        color: __WEBPACK_IMPORTED_MODULE_3__Styling__["DefaultPalette"].themePrimary,
        isPositionForced: true,
        positioningContainerProps: {
            directionalHint: 7 /* bottomAutoEdge */,
        }
    };
    return Coachmark;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__positioning_index__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__positioning_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__positioning_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__positioning_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__positioning_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/positioning/index.js
module.exports = __webpack_require__(371);

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__positioning__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__positioning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__positioning__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__positioning__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__positioning__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_types__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__positioning_types__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__positioning_types__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_types__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/positioning/positioning.js
module.exports = __webpack_require__(373);

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return __positioningTestPackage; });
/* harmony export (immutable) */ __webpack_exports__["_getRelativePositions"] = _getRelativePositions;
/* harmony export (immutable) */ __webpack_exports__["getRelativePositions"] = getRelativePositions;
/* harmony export (immutable) */ __webpack_exports__["positionElement"] = positionElement;
/* harmony export (immutable) */ __webpack_exports__["positionCallout"] = positionCallout;
/* harmony export (immutable) */ __webpack_exports__["getMaxHeight"] = getMaxHeight;
/* harmony export (immutable) */ __webpack_exports__["getOppositeEdge"] = getOppositeEdge;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_types__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__positioning_types__);



var Rectangle = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(__WEBPACK_IMPORTED_MODULE_1__Utilities__["Rectangle"]));

function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_a = {},
    _a[0 /* topLeftEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left),
    _a[1 /* topCenter */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top),
    _a[2 /* topRightEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right),
    _a[3 /* topAutoEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top, undefined, true),
    _a[4 /* bottomLeftEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left),
    _a[5 /* bottomCenter */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom),
    _a[6 /* bottomRightEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right),
    _a[7 /* bottomAutoEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom, undefined, true),
    _a[8 /* leftTopEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top),
    _a[9 /* leftCenter */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left),
    _a[10 /* leftBottomEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom),
    _a[11 /* rightTopEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top),
    _a[12 /* rightCenter */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right),
    _a[13 /* rightBottomEdge */] = _createPositionData(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom),
    _a);
/**
 * @deprecated will be removed in 6.0.
 */
var SLIDE_ANIMATIONS = (_b = {},
    _b[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top] = 'slideUpIn20',
    _b[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom] = 'slideDownIn20',
    _b[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left] = 'slideLeftIn20',
    _b[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right] = 'slideRightIn20',
    _b);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = new Array();
    if (rect.top < boundingRect.top) {
        outOfBounds.push(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @returns {number}
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 *
 *
 * @param {RectangleEdge} edge
 * @param {number} value
 * @returns {number}
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} newValue
 * @returns {Rectangle}
 */
function _moveEdge(rect, edge, newValue) {
    var difference = _getEdgeValue(rect, edge) - newValue;
    rect = _setEdgeValue(rect, edge, newValue);
    rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} edge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} targetEdge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} bounds
 * @param {RectangleEdge} edge
 * @returns {boolean}
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @returns {IElementPosition}
 */
function _flipToFit(rect, target, bounding, positionData, gap) {
    if (gap === void 0) { gap = 0; }
    var directions = [__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom, __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top];
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.indexOf(currentEdge * -1) > -1) {
                currentEdge = currentEdge * -1;
            }
            else {
                currentAlignment = currentEdge;
                currentEdge = directions.slice(-1)[0];
            }
            currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
        }
        else {
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment
            };
        }
    }
    return {
        elementRectangle: rect,
        targetEdge: positionData.targetEdge,
        alignmentEdge: currentAlignment
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 *
 * @param {Rectangle} element
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [directionalHintFixed]
 * @param {boolean} [coverTarget]
 * @returns {IElementPosition}
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(element, bounding);
    for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
        var direction = outOfBounds_1[_i];
        elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} point
 * @returns {Rectangle}
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 *
 * @param {Rectangle} elementToPosition
 * @param {Rectangle} target
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [coverTarget]
 * @returns {Rectangle}
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition;
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget ? _alignEdges(elementToPosition, target, targetEdge, gap) :
        _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 *
 * @param {RectangleEdge} edge
 * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
 */
function _getFlankingEdges(edge) {
    if (edge === __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top || edge === __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom) {
        return {
            positiveEdge: __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].left,
            negativeEdge: __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right
        };
    }
    else {
        return {
            positiveEdge: __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top,
            negativeEdge: __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom
        };
    }
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 *
 * @param {Rectangle} elementRectangle
 * @param {HTMLElement} hostElement
 * @param {RectangleEdge} targetEdge
 * @param {RectangleEdge} [alignmentEdge]
 * @param {boolean} coverTarget
 * @returns {IPartialIRectangle}
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, alignmentEdge, coverTarget) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var elementEdgeString = __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][elementEdge];
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
 * For instance bottomLeftEdge would become bottomRightEdge.
 * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
 *
 * @param {IPositionProps} props
 * @returns {IPositionDirectionalHintData}
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = 7 /* bottomAutoEdge */; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge
        };
    }
    var positionInformation = __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, DirectionalDictionary[directionalHint]);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["getRTL"])()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ?
            DirectionalDictionary[directionalHintForRTL] :
            positionInformation;
    }
    return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 *
 * @param {IPositionDirectionalHintData} positionData
 * @param {Rectangle} target
 * @param {Rectangle} boundingRect
 * @param {boolean} [coverTarget]
 * @returns {IPositionDirectionalHintData}
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge
        };
    }
    else {
        return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnEdge = elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    var returnValue = {};
    returnValue[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /** Note about beak positioning: The actual beak width only matters for getting the gap between the callout and target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8, then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.*/
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPositon = new Rectangle(0, beakWidth, 0, beakWidth);
    beakPositon = _moveEdge(beakPositon, (elementPosition.targetEdge * -1), -beakWidth / 2);
    beakPositon = _centerEdgeToPoint(beakPositon, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPositon, elementBounds, positiveEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPositon, elementBounds, negativeEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, negativeEdge);
    }
    return beakPositon;
}
function _getRectangleFromElement(element) {
    var clientRect = element.getBoundingClientRect();
    return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        if (target.preventDefault) {
            var ev = target;
            targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
        }
        else if (target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var point = target;
            targetRectangle = new Rectangle(point.x, point.x, point.y, point.y);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                var direction = outOfBounds_2[_i];
                targetRectangle[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][direction]] = bounds[__WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"][direction]];
            }
        }
    }
    else {
        targetRectangle = new Rectangle(0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, hostElement, elementToPosition, previousPositions) {
    var gap = props.gapSpace ? props.gapSpace : 0;
    var boundingRect = props.bounds ?
        _getRectangleFromIRect(props.bounds) :
        new Rectangle(0, window.innerWidth - Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["getScrollbarWidth"])(), 0, window.innerHeight);
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, positionedElement, { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, coverTarget) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, positionedElement.alignmentEdge, coverTarget);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge
    };
}
function _positionElement(props, hostElement, elementToPosition, previousPositions) {
    var positionedElement = _positionElementRelative(props, hostElement, elementToPosition, previousPositions);
    return _finalizePositionData(positionedElement, hostElement, props.coverTarget);
}
function _positionCallout(props, hostElement, callout, previousPositions) {
    var beakWidth = !props.isBeakVisible ? 0 : (props.beakWidth || 0);
    var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var positionedElement = _positionElementRelative(positionProps, hostElement, callout, previousPositions);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned);
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, _finalizePositionData(positionedElement, hostElement, props.coverTarget), { beakPosition: finalizedBeakPosition });
}
// END PRIVATE FUNCTIONS
/* tslint:disable:variable-name */
var __positioningTestPackage = {
    _finalizePositionData: _finalizePositionData,
    _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
    _positionElementWithinBounds: _positionElementWithinBounds,
    _positionBeak: _positionBeak,
    _getPositionData: _getPositionData,
    _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle
};
/* tslint:enable:variable-name */
/**
 * @deprecated Do not use, this will be removed in 6.0
 * use either _positionCallout or _positionElement.
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} elementToPosition
 * @returns
 */
function _getRelativePositions(props, hostElement, elementToPosition) {
    var positions = _positionCallout(props, hostElement, elementToPosition);
    var beakPosition = positions && positions.beakPosition ? positions.beakPosition.elementPosition : undefined;
    return {
        calloutPosition: positions.elementPosition,
        beakPosition: { position: __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, beakPosition), display: 'block' },
        directionalClassName: SLIDE_ANIMATIONS[positions.targetEdge],
        submenuDirection: (positions.targetEdge * -1) === __WEBPACK_IMPORTED_MODULE_2__positioning_types__["RectangleEdge"].right ? 10 /* leftBottomEdge */ : 13 /* rightBottomEdge */
    };
}
/**
 * @deprecated Do not use, this will be removed in 6.0.
 * Use either positionElement, or positionCallout
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} calloutElement
 * @returns
 */
function getRelativePositions(props, hostElement, calloutElement) {
    return _getRelativePositions(props, hostElement, calloutElement);
}
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositioningData
 * can be passed to ensure that the positioning element repositions based on
 * its previous targets rather than starting with directionalhint.
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} elementToPosition
 * @param {IPositionedData} previousPositions
 * @returns
 */
function positionElement(props, hostElement, elementToPosition, previousPositions) {
    return _positionElement(props, hostElement, elementToPosition, previousPositions);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds ?
        _getRectangleFromIRect(bounds) :
        new Rectangle(0, window.innerWidth - Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["getScrollbarWidth"])(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
        targetRect = new Rectangle(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
function getOppositeEdge(edge) {
    return edge * -1;
}
var _a, _b;


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return RectangleEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/PositioningContainer/index.js
module.exports = __webpack_require__(376);

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PositioningContainer__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PositioningContainer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PositioningContainer__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__PositioningContainer__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__PositioningContainer__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/PositioningContainer/PositioningContainer.js
module.exports = __webpack_require__(378);

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningContainer", function() { return PositioningContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PositioningContainer_styles__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PositioningContainer_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PositioningContainer_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Layer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_positioning__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_positioning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utilities_positioning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Styling__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Styling__);







var OFF_SCREEN_STYLE = { opacity: 0 };
// In order for some of the max height logic to work
// properly we need to set the border.
// The value is abitrary.
var BORDER_WIDTH = 1;
var SLIDE_ANIMATIONS = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_5__utilities_positioning__["RectangleEdge"].top] = 'slideUpIn20',
    _a[__WEBPACK_IMPORTED_MODULE_5__utilities_positioning__["RectangleEdge"].bottom] = 'slideDownIn20',
    _a[__WEBPACK_IMPORTED_MODULE_5__utilities_positioning__["RectangleEdge"].left] = 'slideLeftIn20',
    _a[__WEBPACK_IMPORTED_MODULE_5__utilities_positioning__["RectangleEdge"].right] = 'slideRightIn20',
    _a);
var PositioningContainer = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](PositioningContainer, _super);
    function PositioningContainer(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The primary positioned div.
         */
        _this._positionedHost = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["createRef"])();
        // @TODO rename to reflect the name of this class
        _this._contentHost = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["createRef"])();
        /**
         * Deprecated. Use onResize instead.
         * @deprecated
         */
        _this.dismiss = function (ev) {
            _this.onResize(ev);
        };
        _this.onResize = function (ev) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev);
            }
            else {
                _this._updateAsyncPosition();
            }
        };
        _this._setInitialFocus = function () {
            if (_this._contentHost.current && _this.props.setInitialFocus && !_this._didSetInitialFocus && _this.state.positions) {
                _this._didSetInitialFocus = true;
                Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["focusFirstChild"])(_this._contentHost.current);
            }
        };
        _this._onComponentDidMount = function () {
            // This is added so the positioningContainer will dismiss when the window is scrolled
            // but not when something inside the positioningContainer is scrolled. The delay seems
            // to be required to avoid React firing an async focus event in IE from
            // the target changing focus quickly prior to rendering the positioningContainer.
            _this._async.setTimeout(function () {
                _this._events.on(_this._targetWindow, 'scroll', _this._async.throttle(_this._dismissOnScroll, 10), true);
                _this._events.on(_this._targetWindow, 'resize', _this._async.throttle(_this.onResize, 10), true);
                _this._events.on(_this._targetWindow.document.body, 'focus', _this._dismissOnLostFocus, true);
                _this._events.on(_this._targetWindow.document.body, 'click', _this._dismissOnLostFocus, true);
            }, 0);
            if (_this.props.onLayerMounted) {
                _this.props.onLayerMounted();
            }
            _this._updateAsyncPosition();
            _this._setHeightOffsetEveryFrame();
        };
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            heightOffset: 0
        };
        _this._positionAttempts = 0;
        return _this;
    }
    PositioningContainer.prototype.componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    PositioningContainer.prototype.componentDidMount = function () {
        this._onComponentDidMount();
    };
    PositioningContainer.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        this._updateAsyncPosition();
    };
    PositioningContainer.prototype.componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking
        // target with class name, always find element because we do not know if
        // fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if (newTarget !== oldTarget || typeof (newTarget) === 'string' || newTarget instanceof String) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.offsetFromTarget !== this.props.offsetFromTarget) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
    };
    PositioningContainer.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var _a = this.props, className = _a.className, positioningContainerWidth = _a.positioningContainerWidth, positioningContainerMaxHeight = _a.positioningContainerMaxHeight, children = _a.children;
        var positions = this.state.positions;
        var styles = Object(__WEBPACK_IMPORTED_MODULE_2__PositioningContainer_styles__["getClassNames"])();
        var directionalClassName = (positions && positions.targetEdge)
            ? __WEBPACK_IMPORTED_MODULE_6__Styling__["AnimationClassNames"][SLIDE_ANIMATIONS[positions.targetEdge]]
            : '';
        var getContentMaxHeight = this._getMaxHeight() + this.state.heightOffset;
        var contentMaxHeight = positioningContainerMaxHeight
            && (positioningContainerMaxHeight > getContentMaxHeight) ? getContentMaxHeight : positioningContainerMaxHeight;
        var content = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: this._positionedHost, className: Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["css"])('ms-PositioningContainer', styles.container) },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_6__Styling__["mergeStyles"])('ms-PositioningContainer-layerHost', styles.root, className, directionalClassName, !!positioningContainerWidth && { width: positioningContainerWidth }), 
                // tslint:disable-next-line:jsx-ban-props
                style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, tabIndex: -1, 
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                ref: this._contentHost },
                children,
                contentMaxHeight)));
        return this.props.doNotLayer ? content : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Layer__["Layer"], null, content));
    };
    PositioningContainer.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    PositioningContainer.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._positionedHost.current && !Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["elementContains"])(this._positionedHost.current, target);
        if ((!this._target && clickedOutsideCallout) ||
            ev.target !== this._targetWindow &&
                clickedOutsideCallout &&
                (this._target.stopPropagation ||
                    (!this._target || (target !== this._target && !Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["elementContains"])(this._target, target))))) {
            this.onResize(ev);
        }
    };
    PositioningContainer.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); });
    };
    PositioningContainer.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var _a = this.props, offsetFromTarget = _a.offsetFromTarget, onPositioned = _a.onPositioned;
        var hostElement = this._positionedHost.current;
        var positioningContainerElement = this._contentHost.current;
        if (hostElement && positioningContainerElement) {
            var currentProps = void 0;
            currentProps = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["assign"])(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            if (document.body.contains(currentProps.target)) {
                currentProps.gapSpace = offsetFromTarget;
                var newPositions_1 = Object(__WEBPACK_IMPORTED_MODULE_5__utilities_positioning__["positionElement"])(currentProps, hostElement, positioningContainerElement);
                // Set the new position only when the positions are not exists or one of the new positioningContainer positions are different.
                // The position should not change if the position is within 2 decimal places.
                if ((!positions && newPositions_1) ||
                    (positions && newPositions_1 && !this._arePositionsEqual(positions, newPositions_1)
                        && this._positionAttempts < 5)) {
                    // We should not reposition the positioningContainer more than a few times, if it is then the content is likely resizing
                    // and we should stop trying to reposition to prevent a stack overflow.
                    this._positionAttempts++;
                    this.setState({
                        positions: newPositions_1
                    }, function () {
                        if (onPositioned) {
                            onPositioned(newPositions_1);
                        }
                    });
                }
                else {
                    this._positionAttempts = 0;
                    if (onPositioned) {
                        onPositioned(newPositions_1);
                    }
                }
            }
            else if (positions !== undefined) {
                this.setState({
                    positions: undefined
                });
            }
        }
    };
    PositioningContainer.prototype._getBounds = function () {
        if (!this._positioningBounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._positioningBounds = currentBounds;
        }
        return this._positioningBounds;
    };
    /**
     * Return the maximum height the container can grow to
     * without going out of the specified bounds
     */
    PositioningContainer.prototype._getMaxHeight = function () {
        var _a = this.props, directionalHintFixed = _a.directionalHintFixed, offsetFromTarget = _a.offsetFromTarget, directionalHint = _a.directionalHint;
        if (!this._maxHeight) {
            if (directionalHintFixed && this._target) {
                var gapSpace = offsetFromTarget ? offsetFromTarget : 0;
                this._maxHeight = Object(__WEBPACK_IMPORTED_MODULE_5__utilities_positioning__["getMaxHeight"])(this._target, directionalHint, gapSpace, this._getBounds());
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    PositioningContainer.prototype._arePositionsEqual = function (positions, newPosition) {
        return this._comparePositions(positions.elementPosition, newPosition.elementPosition);
    };
    PositioningContainer.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge && newPositionEdge) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    PositioningContainer.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getDocument"])();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getWindow"])();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getWindow"])(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getWindow"])();
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getWindow"])(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getWindow"])();
        }
    };
    /**
     * Animates the height if finalHeight was given.
     */
    PositioningContainer.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._contentHost && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                if (!_this._contentHost.current) {
                    return;
                }
                var positioningContainerMainElem = _this._contentHost.current.lastChild;
                var cardScrollHeight = positioningContainerMainElem.scrollHeight;
                var cardCurrHeight = positioningContainerMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff
                });
                if (positioningContainerMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
                }
            });
        }
    };
    PositioningContainer.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var target = props.target;
        return target;
    };
    PositioningContainer.defaultProps = {
        preventDismissOnScroll: false,
        offsetFromTarget: 0,
        minPagePadding: 8,
        directionalHint: 7 /* bottomAutoEdge */
    };
    return PositioningContainer;
}(__WEBPACK_IMPORTED_MODULE_4__Utilities__["BaseComponent"]));

var _a;


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/PositioningContainer/PositioningContainer.styles.js
module.exports = __webpack_require__(380);

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["highContrastActive"] = highContrastActive;
/* harmony export (immutable) */ __webpack_exports__["focusClear"] = focusClear;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Styling__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Styling__);



// @TODO Remove this tslint disable statement after the styles are converted
// to the updated mergeStyles method.
/* tslint:disable */
function highContrastActive(styles) {
    return {
        '@media screen and (-ms-high-contrast: active)': styles
    };
}
function focusClear() {
    return {
        '&::-moz-focus-inner': {
            border: 0
        },
        '&': {
            outline: 'transparent'
        }
    };
}
/* tslint:enable */
var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["memoizeFunction"])(function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__Styling__["mergeStyleSets"])({
        root: {
            position: 'absolute',
            boxSizing: 'border-box',
            border: '1px solid ${}',
            selectors: __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, highContrastActive({
                border: '1px solid WindowText'
            }), focusClear())
        },
        container: {
            position: 'relative'
        },
        main: {
            backgroundColor: '#ffffff',
            overflowX: 'hidden',
            overflowY: 'hidden',
            position: 'relative'
        },
        overFlowYHidden: {
            overflowY: 'hidden'
        }
    });
});


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/Beak/Beak.js
module.exports = __webpack_require__(382);

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEAK_HEIGHT", function() { return BEAK_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEAK_WIDTH", function() { return BEAK_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beak", function() { return Beak; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Beak_styles__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Beak_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Beak_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_positioning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utilities_positioning__);





var BEAK_HEIGHT = 10;
var BEAK_WIDTH = 18;
var Beak = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Beak, _super);
    function Beak(props) {
        return _super.call(this, props) || this;
    }
    Beak.prototype.render = function () {
        var _a = this.props, left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right, color = _a.color, _b = _a.direction, direction = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].top : _b;
        var svgHeight;
        var svgWidth;
        if (direction === __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].top || direction === __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].bottom) {
            svgHeight = BEAK_HEIGHT;
            svgWidth = BEAK_WIDTH;
        }
        else {
            svgHeight = BEAK_WIDTH;
            svgWidth = BEAK_HEIGHT;
        }
        var pointOne;
        var pointTwo;
        var pointThree;
        var transform;
        switch (direction) {
            case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].top:
            default:
                pointOne = BEAK_WIDTH / 2 + ", 0";
                pointTwo = BEAK_WIDTH + ", " + BEAK_HEIGHT;
                pointThree = "0, " + BEAK_HEIGHT;
                transform = 'translateY(-100%)';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].right:
                pointOne = "0, 0";
                pointTwo = BEAK_HEIGHT + ", " + BEAK_HEIGHT;
                pointThree = "0, " + BEAK_WIDTH;
                transform = 'translateX(100%)';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].bottom:
                pointOne = "0, 0";
                pointTwo = BEAK_WIDTH + ", 0";
                pointThree = BEAK_WIDTH / 2 + ", " + BEAK_HEIGHT;
                transform = 'translateY(100%)';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__utilities_positioning__["RectangleEdge"].left:
                pointOne = BEAK_HEIGHT + ", 0";
                pointTwo = "0, " + BEAK_HEIGHT;
                pointThree = BEAK_HEIGHT + ", " + BEAK_WIDTH;
                transform = 'translateX(-100%)';
                break;
        }
        var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
        var classNames = getClassNames(__WEBPACK_IMPORTED_MODULE_3__Beak_styles__["getStyles"], {
            left: left,
            top: top,
            bottom: bottom,
            right: right,
            height: svgHeight + "px",
            width: svgWidth + "px",
            transform: transform,
            color: color
        });
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Beak', classNames.root) },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("svg", { height: svgHeight, width: svgWidth, className: classNames.beak },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("polygon", { points: pointOne + ' ' + pointTwo + ' ' + pointThree }))));
    };
    return Beak;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/Beak/Beak.styles.js
module.exports = __webpack_require__(384);

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getStyles"] = getStyles;
function getStyles(props) {
    return {
        root: [
            {
                position: 'absolute',
                boxShadow: 'inherit',
                border: 'none',
                boxSizing: 'border-box',
                transform: props.transform,
                width: props.width,
                height: props.height,
                left: props.left,
                top: props.top,
                right: props.right,
                bottom: props.bottom,
            }
        ],
        beak: {
            fill: props.color,
            display: 'block'
        }
    };
}


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Coachmark/Coachmark.styles.js
module.exports = __webpack_require__(386);

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_WIDTH", function() { return COACHMARK_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_HEIGHT", function() { return COACHMARK_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateOne", function() { return translateOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOne", function() { return scaleOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOne", function() { return rotateOne; });
/* harmony export (immutable) */ __webpack_exports__["getStyles"] = getStyles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);

var COACHMARK_WIDTH = 32;
var COACHMARK_HEIGHT = 32;
var translateOne = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["keyframes"])({
    '0%': {
        transform: 'translate(0, 0)',
        animationTimingFunction: 'linear'
    },
    '78.57%': {
        transform: 'translate(0, 0)',
        animationTimingFunction: 'cubic-bezier(0.62, 0, 0.56, 1)'
    },
    '82.14%': {
        transform: 'translate(0, -5px)',
        animationTimingFunction: 'cubic-bezier(0.58, 0, 0, 1)'
    },
    '84.88%': {
        transform: 'translate(0, 9px)',
        animationTimingFunction: 'cubic-bezier(1, 0, 0.56, 1)'
    },
    '88.1%': {
        transform: 'translate(0, -2px)',
        animationTimingFunction: 'cubic-bezier(0.58, 0, 0.67, 1)'
    },
    '90.12%': {
        transform: 'translate(0, 0)',
        animationTimingFunction: 'linear'
    },
    '100%': {
        transform: 'translate(0, 0)'
    }
});
var scaleOne = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["keyframes"])({
    '0%': {
        transform: ' scale(0)',
        animationTimingFunction: 'linear'
    },
    '14.29%': {
        transform: 'scale(0)',
        animationTimingFunction: 'cubic-bezier(0.84, 0, 0.52, 0.99)'
    },
    '16.67%': {
        transform: 'scale(1.15)',
        animationTimingFunction: 'cubic-bezier(0.48, -0.01, 0.52, 1.01)'
    },
    '19.05%': {
        transform: 'scale(0.95)',
        animationTimingFunction: 'cubic-bezier(0.48, 0.02, 0.52, 0.98)'
    },
    '21.43%': {
        transform: 'scale(1)',
        animationTimingFunction: 'linear'
    },
    '42.86%': {
        transform: 'scale(1)',
        animationTimingFunction: 'cubic-bezier(0.48, -0.02, 0.52, 1.02)'
    },
    '45.71%': {
        transform: 'scale(0.8)',
        animationTimingFunction: 'cubic-bezier(0.48, 0.01, 0.52, 0.99)'
    },
    '50%': {
        transform: 'scale(1)',
        animationTimingFunction: 'linear'
    },
    '90.12%': {
        transform: 'scale(1)',
        animationTimingFunction: 'cubic-bezier(0.48, -0.02, 0.52, 1.02)'
    },
    '92.98%': {
        transform: 'scale(0.8)',
        animationTimingFunction: 'cubic-bezier(0.48, 0.01, 0.52, 0.99)'
    },
    '97.26%': {
        transform: 'scale(1)',
        animationTimingFunction: 'linear'
    },
    '100%': {
        transform: 'scale(1)'
    }
});
var rotateOne = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["keyframes"])({
    '0%': {
        transform: 'rotate(0deg)',
        animationTimingFunction: 'linear'
    },
    '83.33%': {
        transform: ' rotate(0deg)',
        animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)'
    },
    '83.93%': {
        transform: 'rotate(15deg)',
        animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)'
    },
    '84.52%': {
        transform: 'rotate(-15deg)',
        animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)'
    },
    '85.12%': {
        transform: 'rotate(15deg)',
        animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)'
    },
    '85.71%': {
        transform: 'rotate(-15deg)',
        animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)'
    },
    '86.31%': {
        transform: 'rotate(0deg)',
        animationTimingFunction: 'linear'
    },
    '100%': {
        transform: 'rotate(0deg)'
    }
});
function getStyles(props, theme) {
    if (theme === void 0) { theme = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getTheme"])(); }
    var animationInnerDimension = '35px';
    var animationOuterDimension = '150px';
    var animationBorderWidth = '10px';
    var ContinuousPulse = __WEBPACK_IMPORTED_MODULE_0__Styling__["PulsingBeaconAnimationStyles"].continuousPulseAnimationDouble(props.beaconColorOne ? props.beaconColorOne : theme.palette.themePrimary, props.beaconColorTwo ? props.beaconColorTwo : theme.palette.themeTertiary, animationInnerDimension, animationOuterDimension, animationBorderWidth);
    var ContinuousPulseAnimation = __WEBPACK_IMPORTED_MODULE_0__Styling__["PulsingBeaconAnimationStyles"].createDefaultAnimation(ContinuousPulse);
    return {
        root: [
            {
                position: 'relative'
            }
        ],
        pulsingBeacon: [
            {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '0px',
                height: '0px',
                borderRadius: '225px',
                borderStyle: 'solid',
                opacity: '0'
            },
            (props.isCollapsed && props.isBeaconAnimating) && ContinuousPulseAnimation
        ],
        // Translate Animation Layer
        translateAnimationContainer: [
            {
                width: '100%',
                height: '100%'
            },
            props.isCollapsed && {
                animationDuration: '14s',
                animationTimingFunction: 'linear',
                animationDirection: 'normal',
                animationIterationCount: '1',
                animationDelay: '0s',
                animationFillMode: 'forwards',
                animationName: translateOne,
                transition: 'opacity 0.5s ease-in-out'
            },
            (!props.isCollapsed) && {
                opacity: '1'
            }
        ],
        // Scale Animation Layer
        scaleAnimationLayer: [
            {
                width: '100%',
                height: '100%'
            },
            props.isCollapsed && {
                animationDuration: '14s',
                animationTimingFunction: 'linear',
                animationDirection: 'normal',
                animationIterationCount: '1',
                animationDelay: '0s',
                animationFillMode: 'forwards',
                animationName: scaleOne
            }
        ],
        // Rotate Animation Layer
        rotateAnimationLayer: [
            {
                width: '100%',
                height: '100%'
            },
            props.isCollapsed && {
                animationDuration: '14s',
                animationTimingFunction: 'linear',
                animationDirection: 'normal',
                animationIterationCount: '1',
                animationDelay: '0s',
                animationFillMode: 'forwards',
                animationName: rotateOne
            },
            !props.isCollapsed && {
                opacity: '1'
            }
        ],
        // Layer Host, defaults to collapsed
        entityHost: [
            {
                position: 'relative',
                outline: 'none',
                overflow: 'hidden',
                backgroundColor: props.color,
                borderRadius: COACHMARK_WIDTH,
                transition: 'border-radius 250ms, width 500ms, height 500ms cubic-bezier(0.5, 0, 0, 1)',
                visibility: 'hidden'
            },
            !props.isMeasuring && {
                width: COACHMARK_WIDTH,
                height: COACHMARK_HEIGHT,
                visibility: 'visible'
            },
            !props.isCollapsed && {
                borderRadius: '1px',
                opacity: '1',
                width: props.entityHostWidth,
                height: props.entityHostHeight
            }
        ],
        entityInnerHost: [
            {
                transition: 'transform 500ms cubic-bezier(0.5, 0, 0, 1)',
                transformOrigin: props.transformOrigin,
                transform: 'scale(0)'
            },
            (!props.isCollapsed) && {
                width: props.entityHostWidth,
                height: props.entityHostHeight,
                transform: 'scale(1)'
            },
            (!props.isMeasuring) && {
                visibility: 'visible',
            }
        ],
        childrenContainer: [
            {
                display: props.isMeasured && props.isCollapsed ? 'none' : 'block'
            }
        ],
        ariaContainer: {
            position: 'fixed',
            opacity: 0
        }
    };
}


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/TeachingBubble.js
module.exports = __webpack_require__(388);

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TeachingBubble_index__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TeachingBubble_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_TeachingBubble_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__components_TeachingBubble_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__components_TeachingBubble_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/TeachingBubble/index.js
module.exports = __webpack_require__(390);

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TeachingBubble__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TeachingBubble___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TeachingBubble__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__TeachingBubble__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__TeachingBubble__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TeachingBubbleContent__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TeachingBubbleContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TeachingBubbleContent__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__TeachingBubbleContent__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__TeachingBubbleContent__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/TeachingBubble/TeachingBubble.js
module.exports = __webpack_require__(392);

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubble", function() { return TeachingBubble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TeachingBubbleContent__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TeachingBubbleContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TeachingBubbleContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Callout__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Callout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Callout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss__);






var styles = __WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss__;
var TeachingBubble = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](TeachingBubble, _super);
    // Constructor
    function TeachingBubble(props) {
        var _this = _super.call(this, props) || this;
        _this.rootElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this.state = {};
        _this._defaultCalloutProps = {
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
            directionalHint: 12 /* rightCenter */
        };
        return _this;
    }
    TeachingBubble.prototype.focus = function () {
        if (this.rootElement.current) {
            this.rootElement.current.focus();
        }
    };
    TeachingBubble.prototype.render = function () {
        var _a = this.props, setCalloutProps = _a.calloutProps, targetElement = _a.targetElement, onDismiss = _a.onDismiss, isWide = _a.isWide;
        var calloutProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, this._defaultCalloutProps, setCalloutProps);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Callout__["Callout"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ target: targetElement, onDismiss: onDismiss }, calloutProps, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble', styles.root, isWide ? styles.wideCallout : null, calloutProps ? calloutProps.className : undefined) }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: this.rootElement },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__TeachingBubbleContent__["TeachingBubbleContent"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, this.props)))));
    };
    TeachingBubble.defaultProps = {
        /**
         * Default calloutProps is deprecated in favor of private _defaultCalloutProps.
         * Remove in next release.
         * @deprecated
         */
        calloutProps: {
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
            directionalHint: 12 /* rightCenter */
        }
    };
    return TeachingBubble;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContent", function() { return TeachingBubbleContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Image__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss__);






var styles = __WEBPACK_IMPORTED_MODULE_5__TeachingBubble_scss__;
var TeachingBubbleContent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](TeachingBubbleContent, _super);
    function TeachingBubbleContent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._onKeyDown = function (e) {
            if (_this.props.onDismiss) {
                if (e.which === 27 /* escape */) {
                    _this.props.onDismiss();
                }
            }
        };
        _this.state = {};
        return _this;
    }
    TeachingBubbleContent.prototype.componentDidMount = function () {
        if (this.props.onDismiss) {
            document.addEventListener('keydown', this._onKeyDown, false);
        }
    };
    TeachingBubbleContent.prototype.componentWillUnmount = function () {
        if (this.props.onDismiss) {
            document.removeEventListener('keydown', this._onKeyDown);
        }
    };
    TeachingBubbleContent.prototype.focus = function () {
        if (this.rootElement.current) {
            this.rootElement.current.focus();
        }
    };
    TeachingBubbleContent.prototype.render = function () {
        var _a = this.props, children = _a.children, illustrationImage = _a.illustrationImage, primaryButtonProps = _a.primaryButtonProps, secondaryButtonProps = _a.secondaryButtonProps, headline = _a.headline, hasCondensedHeadline = _a.hasCondensedHeadline, hasCloseIcon = _a.hasCloseIcon, onDismiss = _a.onDismiss, closeButtonAriaLabel = _a.closeButtonAriaLabel, hasSmallHeadline = _a.hasSmallHeadline, isWide = _a.isWide, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy;
        var imageContent;
        var headerContent;
        var bodyContent;
        var footerContent;
        var closeButton;
        if (illustrationImage && illustrationImage.src) {
            imageContent = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'ms-TeachingBubble-header ms-TeachingBubble-image' },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Image__["Image"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, illustrationImage))));
        }
        if (headline) {
            headerContent = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-header', hasCondensedHeadline
                    ? 'ms-TeachingBubble-header--condensed ' +
                        styles.headerIsCondensed
                    : hasSmallHeadline
                        ? 'ms-TeachingBubble-header--small ' + styles.headerIsSmall
                        : 'ms-TeachingBubble-header--large ' + styles.headerIsLarge) },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-headline', styles.headline), id: ariaLabelledBy }, headline)));
        }
        if (children) {
            bodyContent = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-body', styles.body) },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-subText', styles.subText), id: ariaDescribedBy }, children)));
        }
        if (primaryButtonProps || secondaryButtonProps) {
            footerContent = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-footer', styles.footer) },
                primaryButtonProps && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["PrimaryButton"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, primaryButtonProps, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-primaryButton', styles.primaryButton, primaryButtonProps.className) }))),
                secondaryButtonProps && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["DefaultButton"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, secondaryButtonProps, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-secondaryButton', styles.secondaryButton, secondaryButtonProps.className) })))));
        }
        if (hasCloseIcon) {
            closeButton = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["IconButton"], { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-closebutton', styles.closeButton), iconProps: { iconName: 'Cancel' }, title: closeButtonAriaLabel, ariaLabel: closeButtonAriaLabel, onClick: onDismiss }));
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-content', styles.root, isWide ? styles.wideCallout : null), ref: this.rootElement, role: 'dialog', tabIndex: -1, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "data-is-focusable": true },
            imageContent,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TeachingBubble-bodycontent', styles.bodyContent) },
                headerContent,
                bodyContent,
                footerContent),
            closeButton));
    };
    // Specify default props values
    TeachingBubbleContent.defaultProps = {
        hasCondensedHeadline: false,
        imageProps: {
            imageFit: __WEBPACK_IMPORTED_MODULE_4__Image__["ImageFit"].cover,
            width: 364,
            height: 130
        }
    };
    return TeachingBubbleContent;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceAnimation", function() { return bounceAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacityFadeIn", function() { return opacityFadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyContent", function() { return bodyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerIsLarge", function() { return headerIsLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerIsSmall", function() { return headerIsSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headline", function() { return headline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerIsCondensed", function() { return headerIsCondensed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subText", function() { return subText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeButton", function() { return closeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wideCallout", function() { return wideCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryButton", function() { return primaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryButton", function() { return secondaryButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__);
/* tslint:disable */

Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__["loadStyles"])([{ "rawString": "@-webkit-keyframes bounceAnimation_13c09abe{0%{-webkit-transform:matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}1.7%{-webkit-transform:matrix3d(0.658, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.658, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}2.35%{-webkit-transform:matrix3d(0.725, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.725, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}3.4%{-webkit-transform:matrix3d(0.83, 0, 0, 0, 0, 0.946, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.83, 0, 0, 0, 0, 0.946, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}4.7%{-webkit-transform:matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}5.11%{-webkit-transform:matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}6.81%{-webkit-transform:matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}7.06%{-webkit-transform:matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}8.76%{-webkit-transform:matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}9.36%{-webkit-transform:matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}10.66%{-webkit-transform:matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}12.16%{-webkit-transform:matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}12.61%{-webkit-transform:matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}14.51%{-webkit-transform:matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}14.96%{-webkit-transform:matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}17.77%{-webkit-transform:matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}18.37%{-webkit-transform:matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}20.52%{-webkit-transform:matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}22.22%{-webkit-transform:matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}26.08%{-webkit-transform:matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}29.93%{-webkit-transform:matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}31.63%{-webkit-transform:matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}37.64%{-webkit-transform:matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}42.74%{-webkit-transform:matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}45.35%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}49.9%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}50%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}52.15%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}54.3%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}56.46%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}58.61%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}64.16%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}69.72%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}80.83%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}91.99%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}100%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}}@keyframes bounceAnimation_13c09abe{0%{-webkit-transform:matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}1.7%{-webkit-transform:matrix3d(0.658, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.658, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}2.35%{-webkit-transform:matrix3d(0.725, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.725, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}3.4%{-webkit-transform:matrix3d(0.83, 0, 0, 0, 0, 0.946, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.83, 0, 0, 0, 0, 0.946, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}4.7%{-webkit-transform:matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}5.11%{-webkit-transform:matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}6.81%{-webkit-transform:matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}7.06%{-webkit-transform:matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}8.76%{-webkit-transform:matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}9.36%{-webkit-transform:matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}10.66%{-webkit-transform:matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}12.16%{-webkit-transform:matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}12.61%{-webkit-transform:matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}14.51%{-webkit-transform:matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}14.96%{-webkit-transform:matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}17.77%{-webkit-transform:matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}18.37%{-webkit-transform:matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}20.52%{-webkit-transform:matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}22.22%{-webkit-transform:matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}26.08%{-webkit-transform:matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}29.93%{-webkit-transform:matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}31.63%{-webkit-transform:matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}37.64%{-webkit-transform:matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}42.74%{-webkit-transform:matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}45.35%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}49.9%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}50%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}52.15%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}54.3%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}56.46%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}58.61%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}64.16%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}69.72%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}80.83%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}91.99%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}100%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}}@-webkit-keyframes opacityFadeIn_13c09abe{0%{opacity:0;-webkit-animation-timing-function:cubic-bezier(0.1, 0.25, 0.75, 0.9);animation-timing-function:cubic-bezier(0.1, 0.25, 0.75, 0.9)}26.26%{opacity:1}100%{opacity:1}}@keyframes opacityFadeIn_13c09abe{0%{opacity:0;-webkit-animation-timing-function:cubic-bezier(0.1, 0.25, 0.75, 0.9);animation-timing-function:cubic-bezier(0.1, 0.25, 0.75, 0.9)}26.26%{opacity:1}100%{opacity:1}}.root_13c09abe{display:block;max-width:364px;border:0;-webkit-box-shadow:none !important;box-shadow:none !important;width:calc(100% + 1px);-webkit-animation-name:bounceAnimation_13c09abe,opacityFadeIn_13c09abe;animation-name:bounceAnimation_13c09abe,opacityFadeIn_13c09abe;-webkit-animation-duration:2000ms;animation-duration:2000ms;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-fill-mode:both;animation-fill-mode:both}.bodyContent_13c09abe{padding:20px}.headerIsLarge_13c09abe:not(:last-child){margin-bottom:14px}.headerIsSmall_13c09abe:not(:last-child){margin-bottom:14px}.headline_13c09abe{margin:0;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.headerIsLarge_13c09abe .headline_13c09abe{font-size:28px;font-weight:100;font-weight:100}.headerIsCondensed_13c09abe .headline_13c09abe{font-size:14px;font-weight:400;font-weight:600}[dir='ltr'] .headerIsCondensed_13c09abe .headline_13c09abe{margin-right:10px}[dir='rtl'] .headerIsCondensed_13c09abe .headline_13c09abe{margin-left:10px}.headerIsSmall_13c09abe .headline_13c09abe{font-size:14px;font-weight:400;font-weight:600}[dir='ltr'] .headerIsSmall_13c09abe .headline_13c09abe{margin-right:10px}[dir='rtl'] .headerIsSmall_13c09abe .headline_13c09abe{margin-left:10px}.body_13c09abe:not(:last-child){margin-bottom:20px}.subText_13c09abe{margin:0;font-size:14px;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:300}.root_13c09abe .closeButton_13c09abe{position:absolute;top:0;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:12px}[dir='ltr'] .root_13c09abe .closeButton_13c09abe{right:0}[dir='rtl'] .root_13c09abe .closeButton_13c09abe{left:0}.root_13c09abe .closeButton_13c09abe:hover{background:transparent}.footer_13c09abe{display:-webkit-box;display:-ms-flexbox;display:flex}html[dir='ltr'] .footer_13c09abe .ms-Button:not(:first-child){margin-left:20px}html[dir='rtl'] .footer_13c09abe .ms-Button:not(:first-child){margin-right:20px}.root_13c09abe .ms-Callout-main,.root_13c09abe .ms-Callout-beak,.root_13c09abe .ms-Callout-smallbeak{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.wideCallout_13c09abe{max-width:456px}.wideCallout_13c09abe .ms-TeachingBubble-content{display:-webkit-box;display:-ms-flexbox;display:flex}.wideCallout_13c09abe .ms-TeachingBubble-image{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px;max-width:154px}.wideCallout_13c09abe .bodyContent_13c09abe{max-width:302px}.bodyContent_13c09abe .primaryButton_13c09abe{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";white-space:nowrap}.bodyContent_13c09abe .primaryButton_13c09abe .ms-Button-label{font-size:14px;font-weight:400;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.bodyContent_13c09abe .primaryButton_13c09abe:hover{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";border-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": "}.bodyContent_13c09abe .primaryButton_13c09abe:focus{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.bodyContent_13c09abe .primaryButton_13c09abe:active{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.bodyContent_13c09abe .secondaryButton_13c09abe{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";white-space:nowrap}.bodyContent_13c09abe .secondaryButton_13c09abe .ms-Button-label{font-size:14px;font-weight:400;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.bodyContent_13c09abe .secondaryButton_13c09abe:hover{background-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.bodyContent_13c09abe .secondaryButton_13c09abe:focus{background-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.bodyContent_13c09abe .secondaryButton_13c09abe:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}\n" }]);
var root = "root_13c09abe";
var bounceAnimation = "bounceAnimation_13c09abe";
var opacityFadeIn = "opacityFadeIn_13c09abe";
var bodyContent = "bodyContent_13c09abe";
var headerIsLarge = "headerIsLarge_13c09abe";
var headerIsSmall = "headerIsSmall_13c09abe";
var headline = "headline_13c09abe";
var headerIsCondensed = "headerIsCondensed_13c09abe";
var body = "body_13c09abe";
var subText = "subText_13c09abe";
var closeButton = "closeButton_13c09abe";
var footer = "footer_13c09abe";
var wideCallout = "wideCallout_13c09abe";
var primaryButton = "primaryButton_13c09abe";
var secondaryButton = "secondaryButton_13c09abe";


/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_office_ui_fabric_react_lib_Coachmark__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_office_ui_fabric_react_lib_Coachmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_office_ui_fabric_react_lib_Coachmark__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_office_ui_fabric_react_lib_TeachingBubble__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_office_ui_fabric_react_lib_TeachingBubble___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_office_ui_fabric_react_lib_TeachingBubble__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loc_AtMention_resx__ = __webpack_require__(340);





var CoachmarkHost = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](CoachmarkHost, _super);
    function CoachmarkHost(props) {
        return _super.call(this, props) || this;
    }
    CoachmarkHost.prototype.render = function () {
        var _this = this;
        var _a = this.props, target = _a.target, onDismiss = _a.onDismiss;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_office_ui_fabric_react_lib_Coachmark__["Coachmark"], { target: target, positioningContainerProps: {
                directionalHint: 2 ,
                directionalHintForRTL: 0 ,
                onDismiss: onDismiss
            }, teachingBubbleRef: this._teachingBubbleContent },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_office_ui_fabric_react_lib_TeachingBubble__["TeachingBubbleContent"], { calloutProps: {
                    directionalHint: 2 ,
                    directionalHintForRTL: 0 
                }, componentRef: function (ref) { return (_this._teachingBubbleContent = ref); }, closeButtonAriaLabel: __WEBPACK_IMPORTED_MODULE_4__loc_AtMention_resx__["a" /* default */].CloseButtonAriaLabel, hasCloseIcon: true, hasCondensedHeadline: true, headline: __WEBPACK_IMPORTED_MODULE_4__loc_AtMention_resx__["a" /* default */].teachingBubbleHeadline, isWide: false, onDismiss: onDismiss, targetElement: target }, __WEBPACK_IMPORTED_MODULE_4__loc_AtMention_resx__["a" /* default */].teachingBubbleContent)));
    };
    return CoachmarkHost;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CoachmarkHost);


/***/ })

});
//# sourceMappingURL=7.7_f4cfeea64ff835aa4a06.js.map