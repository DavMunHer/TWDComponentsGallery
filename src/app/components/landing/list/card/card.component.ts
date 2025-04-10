import { Component, input } from '@angular/core';
import { Card } from '../../../../interfaces/card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public cardInfo = input.required<Card>();



}
