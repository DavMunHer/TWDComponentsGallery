import { Component, signal } from '@angular/core';
import { CarouselComponent } from '@triwebdev/carousel-component';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomCardComponent } from './custom-card/custom-card.component';

@Component({
  selector: 'carousel-playground',
  imports: [
    CarouselComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CustomCardComponent,
  ],
  templateUrl: './carousel-playground.component.html',
  styleUrl: './carousel-playground.component.css',
})
export class CarouselPlaygroundComponent {
  protected cards = signal([
    {
      name: 'John Doe',
      age: 36,
      email: 'john.doe@domain.com',
      country: 'United States',
    },
    {
      name: 'Akira Tanaka',
      age: 29,
      email: 'akira.tanaka@domain.com',
      country: 'Japan',
    },
    {
      name: 'Carlos Sánchez',
      age: 45,
      email: 'carlos.sanchez@domain.com',
      country: 'Spain',
    },
    {
      name: 'Sofia Müller',
      age: 34,
      email: 'sofia.muller@domain.com',
      country: 'Germany',
    },
    {
      name: 'Luca Rossi',
      age: 41,
      email: 'luca.rossi@domain.com',
      country: 'Italy',
    },
    {
      name: 'Rajesh Kumar',
      age: 25,
      email: 'rajesh.kumar@domain.com',
      country: 'India',
    },
  ]);
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
  protected scrollBehaviorSignal = signal<'manual-only' | 'auto'>(
    'manual-only'
  );

  protected autoScrollConfigForm = new FormGroup({
    firstMoveDelayMultiplier: new FormControl<number>(
      { value: 1.5, disabled: true },
      {
        nonNullable: true,
      }
    ),
    msPerMove: new FormControl<number>(
      { value: 2000, disabled: true },
      { nonNullable: true }
    ),
  });
  protected autoScrollConfigSignal = signal<any>({
    firstMoveDelayMultiplier: 1.5,
    msPerMove: 2000,
  });

  constructor() {
    this.maxCardsForm.valueChanges.subscribe((value) => {
      this.maxCardsSignal.set(value.maxCards!);
      this.reloadCarousel();
    });

    this.cardTemplateForm.valueChanges.subscribe((value) => {
      this.selectedTemplateSignal.set(value.selectedTemplate!);
      this.reloadCarousel();
    });

    this.scrollBehaviorForm.valueChanges.subscribe((value) => {
      this.scrollBehaviorSignal.set(value.selectedBehavior!);
      this.reloadCarousel();
    });

    this.autoScrollConfigForm.valueChanges.subscribe((value) => {
      this.autoScrollConfigSignal.set(value);
      this.reloadCarousel();
    });
  }

  private reloadCarousel() {
    this.showCarousel.set(false);
    setTimeout(() => this.showCarousel.set(true), 100);
  }
}
