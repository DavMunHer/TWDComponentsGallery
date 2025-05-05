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

  constructor() {
    // setInterval(() => console.log(this.copied), 1500);
  }


  copyContent(event: any) {
    const codeContainer: HTMLElement = event.target.closest('.code-container');
    let text = '';
    const childContainers = codeContainer.children[0].children[0].children;

    for (let i = 0; i < childContainers.length; i++) {
      const childElement = childContainers[i];
      text += childElement.textContent + '\n';
    }

    console.log(text);
    navigator.clipboard.writeText(text!);
      // TODO: Logic for copying text to clipboard
      this.copied.set(true);
      setTimeout(() => {
        this.copied.set(false);
      }, 1500);
  }
}
