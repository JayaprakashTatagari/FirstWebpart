import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ModernCalendarWebPart.module.scss';
import * as strings from 'ModernCalendarWebPartStrings';

export interface IModernCalendarWebPartProps {
  description: string;
}

export default class ModernCalendarWebPart extends BaseClientSideWebPart<IModernCalendarWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.modernCalendar }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">New Modern calendar CI/CD in Azure !</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts modern calendar.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://github.com/JayaprakashTatagari/FirstWebpart" class="${ styles.button }">
                <span class="${ styles.label }">Jayprakahs-GitHub-Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
