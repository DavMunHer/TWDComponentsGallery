import { Component } from '@angular/core';
import { LandingHeaderComponent } from '../landing-header/landing-header.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-landing',
  imports: [LandingHeaderComponent, ListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
