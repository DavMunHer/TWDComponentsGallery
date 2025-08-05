import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from "@triwebdev/auth-component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auth-playground',
  imports: [AuthComponent, FormsModule, CommonModule],
  templateUrl: './auth-playground.component.html',
  styleUrl: './auth-playground.component.css'
})
export class AuthPlaygroundComponent {
  selectedTemplate: WritableSignal<"classicB&W" | "neoViolet" | "custom"> = signal('classicB&W');
  componentVisible = signal(true);
  primaryColor = signal('#372aac');
  secondaryColor = signal('#ffffff');
  inputColor = signal('#e5e7eb');

  onTemplateChange(newTemplate: "classicB&W" | "neoViolet" | "custom" = 'classicB&W') {
    this.componentVisible.set(false);
    
    this.selectedTemplate.set(newTemplate);
    if (newTemplate === 'custom') {
      this.validateCustomColors();
    }

    setTimeout(() => this.componentVisible.set(true), 500);
  }

  validateCustomColors() {
    const inputs = document.querySelectorAll<HTMLInputElement>('.color-inputs input');
    const [primaryInput, secondaryInput, inputInput] = Array.from(inputs);

    this.primaryColor.set(primaryInput.value.trim());
    this.secondaryColor.set(secondaryInput.value.trim());
    this.inputColor.set(inputInput.value.trim());

    this.componentVisible.set(false);
    setTimeout(() => this.componentVisible.set(true), 0);
  }
}
