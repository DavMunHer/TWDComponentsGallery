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

  protected maxCardsForm = new FormGroup({
    maxCards: new FormControl<number>(6, { nonNullable: true }),
  });

  protected cardTemplateForm = new FormGroup({
    selectedTemplate: new FormControl<'template' | 'custom'>('template', {
      nonNullable: true,
    }),
  });

  protected scrollBehaviorForm = new FormGroup({
    selectedBehavior: new FormControl<'manual' | 'auto'>('manual', {
      nonNullable: true,
    }),
  });

  protected autoScrollConfigForm = new FormGroup({
    firstMoveDelayMultiplier: new FormControl<number>(1.5, { nonNullable: true }),
    msPerMove: new FormControl<number>(2000, { nonNullable: true }),
  });
}
