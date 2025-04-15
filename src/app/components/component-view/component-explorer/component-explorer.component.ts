import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'component-explorer',
  imports: [NgClass, RouterLink],
  templateUrl: './component-explorer.component.html',
  styleUrl: './component-explorer.component.css'
})
  
export class ComponentExplorerComponent {
  private route = inject(ActivatedRoute);
  protected componentName = this.route.snapshot.params['name'];

  protected isPlaygroundActive() {
    return this.route.snapshot.params['showedInfo'] == 'playground'
  }


}
