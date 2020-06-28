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
import styles from './ModernCalendarWebPart.module.scss';
import * as strings from 'ModernCalendarWebPartStrings';
var ModernCalendarWebPart = (function (_super) {
    __extends(ModernCalendarWebPart, _super);
    function ModernCalendarWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModernCalendarWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.modernCalendar + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">New Modern calendar CI/CD in Azure !</span>\n              <p class=\"" + styles.subTitle + "\">Customize SharePoint experiences using Web Parts modern calendar.</p>\n              <p class=\"" + styles.description + "\">" + escape(this.properties.description) + "</p>\n              <a href=\"https://github.com/JayaprakashTatagari/FirstWebpart\" class=\"" + styles.button + "\">\n                <span class=\"" + styles.label + "\">Jayprakahs-GitHub-Repo</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(ModernCalendarWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ModernCalendarWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ModernCalendarWebPart;
}(BaseClientSideWebPart));
export default ModernCalendarWebPart;
//# sourceMappingURL=ModernCalendarWebPart.js.map