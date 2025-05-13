import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ComponentsInfoService } from '../services/components-info.service';

export const componentViewGuard: CanActivateFn = (route, state) => {
  const componentNameInUrl = route.params['name'];
  const componentsInfoService = inject(ComponentsInfoService);
  const found = componentsInfoService.getComponentMinInfo(componentNameInUrl);
  if (found) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['/not-found']);
    return false;
  }
};
