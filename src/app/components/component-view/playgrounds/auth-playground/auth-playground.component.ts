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
  selectedTemplate: "classicB&W" | "neoViolet" | "custom" = 'classicB&W';
  componentVisible = true;
  constructor() {
    setInterval(()=>console.log(this.selectedTemplate), 1500);
  }

  onTemplateChange(newTemplate: "classicB&W" | "neoViolet" | "custom" = 'classicB&W') {
    this.selectedTemplate = newTemplate;
    this.componentVisible = false;
    setTimeout(() => this.componentVisible = true, 0);
  }
}
