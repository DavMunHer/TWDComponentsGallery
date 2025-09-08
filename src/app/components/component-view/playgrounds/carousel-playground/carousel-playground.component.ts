import { Component, signal } from '@angular/core';
import {CarouselComponent} from '@triwebdev/carousel-component'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'carousel-playground',
  imports: [CarouselComponent, RouterLink],
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
