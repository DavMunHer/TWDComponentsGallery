
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CapitalizePipe } from '../../../../pipes/capitalize.pipe';
import { ComponentInfo } from '../../../../interfaces/component-info';
import { DynamicCardInfo, PartialDynamicCardInfo } from '../../../../interfaces/dynamic-card';
import { CardService } from '../../../../services/card.service';


@Component({
  selector: 'app-card',
  imports: [CapitalizePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {
  public cardInfo = input.required<ComponentInfo>();
  protected dynamicCardInfo = signal<DynamicCardInfo>({
    daysDiff: 0,
    downloads: 0,
    version: '',
    sizeInKb: 0
  });


  private cardService = inject(CardService);

  ngOnInit(): void {
    this.cardService.getExtraInfo(this.cardInfo().packageName).subscribe((data: PartialDynamicCardInfo) => {
      this.dynamicCardInfo.set({ ...this.dynamicCardInfo(), ...data });
    });

    this.cardService.getTotalDownloads(this.cardInfo().releasedDate, this.cardInfo().packageName).subscribe((downloads) => {
      this.dynamicCardInfo.set({ ...this.dynamicCardInfo(), downloads })
    });
  }
}
