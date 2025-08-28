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

  protected templateForm = new FormGroup({
    selectedTemplate: new FormControl<'classicB&W' | 'neoViolet' | 'custom'>('classicB&W', {nonNullable: true})
  });

  protected customColors = signal(this.customColorsForm.getRawValue());

  ngOnInit(): void {
    this.customColorsForm.disable(); // Form will only be enabled when the template is customized
  }

  protected onTemplateChange() {
    this.componentVisible.set(false);
    const newTemplate = this.templateForm.controls.selectedTemplate.getRawValue();


    if (newTemplate === 'custom') {
      this.customColorsForm.enable();
    } else {
      this.customColorsForm.disable();
    }
    this.selectedTemplate.set(newTemplate);
    setTimeout(() => this.componentVisible.set(true), 500);
  }

  protected randomizeCustomColors() {
    const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let colors = ["#", "#", "#"];
    for (let i = 0; i < colors.length; i++) {
      for (let j = 0; j < 6; j++) {
        colors[i] += options[Math.floor(Math.random() * options.length)]
      }
    }
    this.componentVisible.set(false);
    console.log(this.customColors());
    this.customColorsForm.patchValue({
      primaryColor: colors[0],
      secondaryColor: colors[1],
      inputColor: colors[2]
    });
    this.customColors.set(this.customColorsForm.getRawValue())
    setTimeout(() => this.componentVisible.set(true), 0);
  }

  protected changeCustomColors() {
    this.componentVisible.set(false);
    this.customColors.set(this.customColorsForm.getRawValue());
    setTimeout(() => this.componentVisible.set(true), 500);
  }
}
