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
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './SecondWebpartWebPart.module.scss';
import * as strings from 'SecondWebpartWebPartStrings';
var SecondWebpartWebPart = (function (_super) {
    __extends(SecondWebpartWebPart, _super);
    function SecondWebpartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondWebpartWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.secondWebpart + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">SPFx2 SecondWebpart</span>\n              <p class=\"" + styles.subTitle + "\">Azure CI/CD.</p>\n              <p class=\"" + styles.description + "\">" + escape(this.properties.description) + "</p>\n              <a href=\"https://github.com/JayaprakashTatagari/FirstWebpart\" class=\"" + styles.button + "\">\n                <span class=\"" + styles.label + "\">GitHub-Repository</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(SecondWebpartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SecondWebpartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SecondWebpartWebPart;
}(BaseClientSideWebPart));
export default SecondWebpartWebPart;
//# sourceMappingURL=SecondWebpartWebPart.js.map