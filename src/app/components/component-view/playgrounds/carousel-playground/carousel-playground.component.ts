import { Component, signal } from '@angular/core';
import { CarouselComponent } from '@triwebdev/carousel-component';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'carousel-playground',
  imports: [CarouselComponent, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './carousel-playground.component.html',
  styleUrl: './carousel-playground.component.css',
})
export class CarouselPlaygroundComponent {
  protected cards = signal([{}, {}, {}, {}, {}, {}]);
  protected showCarousel = signal<boolean>(true);


  protected maxCardsForm = new FormGroup({
    maxCards: new FormControl<number>(6, { nonNullable: true }),
  });
  protected maxCardsSignal = signal<number>(6);

  protected cardTemplateForm = new FormGroup({
    selectedTemplate: new FormControl<'template' | 'custom'>('template', {
      nonNullable: true,
    }),
  });
  protected selectedTemplateSignal = signal<'template' | 'custom'>('template');


  protected scrollBehaviorForm = new FormGroup({
    selectedBehavior: new FormControl<'manual-only' | 'auto'>('manual-only', {
      nonNullable: true,
    }),
  });
  protected scrollBehaviorSignal = signal<'manual-only' | 'auto'>('manual-only');

  protected autoScrollConfigForm = new FormGroup({
    firstMoveDelayMultiplier: new FormControl<number>(1.5, { nonNullable: true }),
    msPerMove: new FormControl<number>(2000, { nonNullable: true }),
  });
  protected autoScrollConfigSignal = signal<any>({firstMoveDelayMultiplier: 1.5, msPerMove:2000});



  constructor() {
    this.maxCardsForm.valueChanges.subscribe(value => {
      this.maxCardsSignal.set(value.maxCards!);
      this.reloadCarousel();
    })

    this.cardTemplateForm.valueChanges.subscribe(value => {
      this.selectedTemplateSignal.set(value.selectedTemplate!);
      this.reloadCarousel();
    })

    this.scrollBehaviorForm.valueChanges.subscribe(value => {
      this.scrollBehaviorSignal.set(value.selectedBehavior!);
      this.reloadCarousel();
    })

    this.autoScrollConfigForm.valueChanges.subscribe(value => {
      this.autoScrollConfigSignal.set(value);
      this.reloadCarousel();
    })
  }


  private reloadCarousel() {
    this.showCarousel.set(false);
    setTimeout(() => this.showCarousel.set(true), 100);
  }

}
