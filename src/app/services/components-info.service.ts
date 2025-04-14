import { Injectable } from '@angular/core';
import { ComponentInfo } from '../interfaces/component-info';

@Injectable({
  providedIn: 'root'
})
export class ComponentsInfoService {
  // This must be refactored in the future for having all the info, including the info used in the card-list component
  private componentsInfo: Array<ComponentInfo> = [
    {
      name: 'Auth',
      redirectUrl: 'auth'
    },
    {
      name: 'ticket',
      redirectUrl: 'ticket'
    },
    {
      name: 'Whatever',
      redirectUrl: 'whatever'
    },
    {
      name: 'Something',
      redirectUrl: 'something'
    }
  ];

  constructor() { }

  public getComponentInfo() {
    return this.componentsInfo;
  }

}
