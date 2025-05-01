import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'code-container',
  imports: [NgClass],
  templateUrl: './code-container.component.html',
  styleUrl: './code-container.component.css',
})
export class CodeContainerComponent {
  protected copied = signal<boolean>(false);

  copyContent() {
      // TODO: Logic for copying text to clipboard
      this.copied.set(true);
      setTimeout(() => {
        this.copied.set(false);
      }, 1500);
  }
}
