
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Card } from '../../../interfaces/card';
import { CardService } from '../../../services/card.service';
import { DynamicCard, PartialDynamicCard } from '../../../interfaces/dynamic-card';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {
  public cardInfo = input.required<Card>();
  protected dynamicCardInfo = signal<DynamicCard>({
    daysDiff: 0,
    downloads: 0,
    version: '',
    sizeInKb: 0
  });


  private cardService = inject(CardService);

  ngOnInit(): void {
    this.cardService.getExtraInfo(this.cardInfo().packageName).subscribe((data: PartialDynamicCard) => {
      this.dynamicCardInfo.set({ ...this.dynamicCardInfo(), ...data });
    });

    this.cardService.getTotalDownloads(this.cardInfo().releasedDate, this.cardInfo().packageName).subscribe((downloads) => {
      this.dynamicCardInfo.set({ ...this.dynamicCardInfo(), downloads })
    });
  }
}
