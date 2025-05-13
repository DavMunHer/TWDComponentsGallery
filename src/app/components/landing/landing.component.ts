import { Component } from '@angular/core';
import { LandingHeaderComponent } from '../landing/landing-header/landing-header.component';
import { ListComponent } from '../landing/list/list.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing',
  imports: [LandingHeaderComponent, ListComponent, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
