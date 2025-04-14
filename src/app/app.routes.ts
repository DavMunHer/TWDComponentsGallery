import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/component-view/sidebar/sidebar.component';
import { ComponentViewComponent } from './components/component-view/component-view.component';

export const routes: Routes = [
    {
        path: 'components/:name/:showedInfo',
        component: ComponentViewComponent,
    },
    { path: '**', component: LandingComponent },
];
