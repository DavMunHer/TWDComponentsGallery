import { Component, signal } from '@angular/core';
import {CarouselComponent} from '@triwebdev/carousel-component'

@Component({
  selector: 'carousel-playground',
  imports: [CarouselComponent],
  templateUrl: './carousel-playground.component.html',
  styleUrl: './carousel-playground.component.css'
})
export class CarouselPlaygroundComponent {
  protected cards = signal([
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    }
  ])
}
