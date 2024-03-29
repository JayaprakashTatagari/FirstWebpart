import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SecondWebpartWebPart.module.scss';
import * as strings from 'SecondWebpartWebPartStrings';

export interface ISecondWebpartWebPartProps {
  description: string;
}

export default class SecondWebpartWebPart extends BaseClientSideWebPart<ISecondWebpartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.secondWebpart }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">SPFx2 SecondWebpart</span>
              <p class="${ styles.subTitle }">Azure CI/CD.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://github.com/JayaprakashTatagari/FirstWebpart" class="${ styles.button }">
                <span class="${ styles.label }">GitHub-Repository</span>
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
