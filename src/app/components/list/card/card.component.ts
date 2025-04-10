import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Card } from '../../../interfaces/card';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  public cardInfo = input.required<Card>();
  protected dynamicCardInfo = signal({
    daysDiff: 0,
    downloads: 0,
    version: '',
    sizeInKb: 0
  });

  private cardService = inject(CardService);

  ngOnInit(): void {
    this.cardService.getExtraInfo(this.cardInfo().packageName).subscribe((data: any) => {
      console.log(data);
      this.dynamicCardInfo.set({...this.dynamicCardInfo(), ...data });
    })
    this.cardService.getTotalDownloads(this.cardInfo().releasedDate, this.cardInfo().packageName).subscribe(res => {
      console.log(res);
        this.dynamicCardInfo.set({...this.dynamicCardInfo(), downloads: res})
    })
  }
}
