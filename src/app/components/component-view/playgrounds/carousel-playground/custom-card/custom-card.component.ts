import { Component, input } from '@angular/core';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css'
})
export class CustomCardComponent {
  public cardInfo = input<any>();

}
