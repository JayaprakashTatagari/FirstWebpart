var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib-es2015/Dialog';
import { PrimaryButton } from 'office-ui-fabric-react/lib-es2015/Button';
import debugStyles from '././../debugComponents.module.scss';
import styles from './DebugError.module.scss';
import strings from './DebugError.resx';
var DebugError = (function (_super) {
    __extends(DebugError, _super);
    function DebugError(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isShown: true
        };
        return _this;
    }
    DebugError.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { "data-automation-id": 'debugManifestErrorDialog', role: 'dialog' },
            React.createElement(Dialog, { hidden: !this.state.isShown, dialogContentProps: {
                    type: DialogType.largeHeader,
                    title: this.props.title
                }, modalProps: {
                    isBlocking: true,
                    className: debugStyles.dialogContainer
                } },
                React.createElement("p", { className: styles.detailText }, this.props.errorText || strings.debugManifestErrorDetail),
                React.createElement("p", { className: styles.errorText }, this.props.innerError.toString()),
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { "data-automation-id": 'debugManifestErrorDismissButton', onClick: function () { return _this.setState({ isShown: false }); } }, strings.debugManifestErrorDismissButtonText)))));
    };
    return DebugError;
}(React.Component));
export default DebugError;
