import { Injectable } from '@angular/core';
import { ComponentInfo } from '../types/component-info';
import { ComponentMinInfo } from '../types/component-min-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentsInfoService {
  private componentsInfo: Array<ComponentInfo> = [
    {
      name: 'auth',
      componentNameInUrl: 'auth',
      imageUrl: 'imgs/auth.jpg',
      imageAlt: 'Auth component demo image',
      releasedDate: '2025-03-28',
      packageName: '@triwebdev/auth-component',
      npmPackageUrl: 'https://www.npmjs.com/package/@triwebdev/auth-component',
      gitHubUrl: 'https://github.com/TriWebDev/authLib-workspace',
      docsUrl: 'https://unpkg.com/@triwebdev/auth-component/README.md',
    },
    {
      name: 'carousel',
      componentNameInUrl: 'carousel',
      imageUrl: 'imgs/carousel.jpg',
      imageAlt: 'Carousel component demo image',
      releasedDate: '2025-07-15',
      packageName: '@triwebdev/carousel-component',
      npmPackageUrl: 'https://www.npmjs.com/package/@triwebdev/carousel-component',
      gitHubUrl: 'https://github.com/DavMunHer/carousel-workspace/',
      docsUrl: 'https://unpkg.com/@triwebdev/carousel-component/README.md',
    },
    {
      name: 'Code Container',
      componentNameInUrl: 'coming soon',
      imageUrl: '',
      imageAlt: '',
      releasedDate: '',
      packageName: '',
      npmPackageUrl: '',
      gitHubUrl: '',
      docsUrl: '',
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

  constructor(private http: HttpClient) {}

  public getComponentsInfo() {
    return this.componentsInfo;
  }

  public getComponentsMinInfo(): ComponentMinInfo[] {
    return this.componentsInfo.map(({ name, componentNameInUrl }) => ({
      name,
      componentNameInUrl,
    }));
  }

  public getComponentMinInfo(
    componentNameInUrl: string
  ): ComponentMinInfo | undefined {
    const componentsMinInfo = this.getComponentsMinInfo();

    return componentsMinInfo.find((component) => {
      return component.componentNameInUrl === componentNameInUrl;
    });
  }

  public getComponentInfo(componentNameInUrl: string): ComponentInfo {
    const componentsInfo = this.getComponentsInfo();

    return componentsInfo.find((component) => {
      return component.componentNameInUrl == componentNameInUrl;
    })!;
  }

  public getComponentDocs(componentNameInUrl: string): Observable<string> {
    const component = this.getComponentInfo(componentNameInUrl);
    if (!component) {
      throw new Error('Component not found');
    }
    return this.http.get(component.docsUrl, {responseType: 'text'});
  }
}
