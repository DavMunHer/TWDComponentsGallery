import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthComponent } from '@triwebdev/auth-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auth-playground',
  imports: [AuthComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './auth-playground.component.html',
  styleUrl: './auth-playground.component.css',
})
export class AuthPlaygroundComponent implements OnInit {
  protected selectedTemplate: WritableSignal<'classicB&W' | 'neoViolet' | 'custom'> = signal('classicB&W');
  protected componentVisible = signal(true);

  protected customColorsForm = new FormGroup({
    primaryColor: new FormControl('#372aac', { nonNullable: true }),
    secondaryColor: new FormControl('#ffffff', { nonNullable: true }),
    inputColor: new FormControl('#e5e7eb', { nonNullable: true }),
  });

  protected customColors = signal(this.customColorsForm.getRawValue());

  ngOnInit(): void {
    this.customColorsForm.disable(); // Form will only be enabled when the template is customized
  }

  protected onTemplateChange(newTemplate: 'classicB&W' | 'neoViolet' | 'custom') {
    this.componentVisible.set(false);

    if (newTemplate === 'custom') {
      this.customColorsForm.enable();
    } else {
      this.customColorsForm.disable();
    }
    this.selectedTemplate.set(newTemplate);
    setTimeout(() => this.componentVisible.set(true), 500);
  }

  protected changeCustomColors() {
    this.componentVisible.set(false);
    this.customColors.set(this.customColorsForm.getRawValue());
    setTimeout(() => this.componentVisible.set(true), 500);
  }
}
