import { Routes } from '@angular/router';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';

export const routes: Routes = [
  { path: '**', component: LandingHeaderComponent }
];
