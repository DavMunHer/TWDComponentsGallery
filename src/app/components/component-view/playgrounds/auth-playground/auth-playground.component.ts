import { Component } from '@angular/core';
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
  selectedTemplate: "classicB&W" | "neoViolet" | "custom" = 'custom';
  componentVisible = true;
  primaryColor = '#372aac';
  secondaryColor = '#ffffff';
  inputColor = '#e5e7eb';

  onTemplateChange(newTemplate: "classicB&W" | "neoViolet" | "custom" = 'classicB&W') {
    this.selectedTemplate = newTemplate;

    if (newTemplate === 'custom') {
      this.validateCustomColors();
    }

    this.componentVisible = false;
    setTimeout(() => this.componentVisible = true, 0);
  }

  validateCustomColors() {
    const inputs = document.querySelectorAll<HTMLInputElement>('.color-inputs input');
    const [primaryInput, secondaryInput, inputInput] = Array.from(inputs);

    this.primaryColor = primaryInput.value.trim();
    this.secondaryColor = secondaryInput.value.trim();
    this.inputColor = inputInput.value.trim();

    this.componentVisible = false;
    setTimeout(() => this.componentVisible = true, 0);
  }
}
