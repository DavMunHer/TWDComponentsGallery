
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CapitalizePipe } from '../../../../pipes/capitalize.pipe';
import { ComponentInfo } from '../../../../types/component-info/component-info';
import { DynamicCardInfo, PartialDynamicCardInfo } from '../../../../types/dynamic-card';
import { CardService } from '../../../../services/card.service';
import { RouterLink } from '@angular/router';
import { TimePipe } from '../../../../pipes/time.pipe';


@Component({
  selector: 'app-card',
  imports: [CapitalizePipe, RouterLink, TimePipe],
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
  protected linksEnabled = signal<boolean>(true);


  private cardService = inject(CardService);

  ngOnInit(): void {
    if (this.cardInfo().componentNameInUrl == "coming soon") {
      this.linksEnabled.set(false);
    } else {
      /* Load dynamic info */
      this.cardService.getExtraInfo(this.cardInfo().packageName).subscribe((data: PartialDynamicCardInfo) => {
        this.dynamicCardInfo.set({ ...this.dynamicCardInfo(), ...data });
      });
      
      this.cardService.getTotalDownloads(this.cardInfo().releasedDate, this.cardInfo().packageName).subscribe((downloads) => {
        this.dynamicCardInfo.set({ ...this.dynamicCardInfo(), downloads })
      });
    }
  }
}
