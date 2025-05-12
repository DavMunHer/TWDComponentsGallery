import { Injectable } from '@angular/core';
import { ComponentInfo } from '../interfaces/component-info';
import { ComponentMinInfo } from '../interfaces/component-min-info';

@Injectable({
  providedIn: 'root',
})
export class ComponentsInfoService {
  private componentsInfo: Array<ComponentInfo> = [
    {
      name: 'auth',
      componentNameInUrl: 'auth',
      imageUrl: 'auth.jpg',
      imageAlt: 'Auth component demo image',
      releasedDate: '2025-03-28',
      packageName: '@triwebdev/auth-component',
      npmPackageUrl: 'https://www.npmjs.com/package/@triwebdev/auth-component',
      gitHubUrl: 'https://github.com/TriWebDev/authLib-workspace',
    },
    {
      name: 'ticket',
      componentNameInUrl: 'ticket',
      imageUrl: 'auth.jpg',
      imageAlt: 'Ticket component demo image',
      releasedDate: '2025-03-28',
      packageName: '@triwebdev/auth-component',
      npmPackageUrl: 'https://www.npmjs.com/package/@triwebdev/auth-component',
      gitHubUrl: 'https://github.com/TriWebDev/authLib-workspace',
    },
    // {
    //   name: 'Whatever',
    //   componentNameInUrl: 'whatever',
    // },
    // {
    //   name: 'Something',
    //   componentNameInUrl: 'something',
    // },
  ];

  constructor() {}

  public getComponentsInfo() {
    return this.componentsInfo;
  }

  public getComponentsMinInfo(): ComponentMinInfo[] {
    return this.componentsInfo.map(({ name, componentNameInUrl }) => ({ name, componentNameInUrl }));
  }

  public getComponentMinInfo(componentNameInUrl: string): ComponentMinInfo | undefined {
    const componentsMinInfo = this.getComponentsMinInfo();

    return componentsMinInfo.find((component) => {
      return component.componentNameInUrl === componentNameInUrl;
    });
  } 

  public getComponentInfo(componentNameInUrl: string): ComponentInfo {
    const componentsInfo = this.getComponentsInfo();

    return componentsInfo.find((component) => {
      return component.componentNameInUrl == componentNameInUrl
    })!;
  }
}
