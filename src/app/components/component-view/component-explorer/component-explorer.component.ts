import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'component-explorer',
  imports: [NgClass, RouterLink],
  templateUrl: './component-explorer.component.html',
  styleUrl: './component-explorer.component.css'
})
  
export class ComponentExplorerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected componentName = signal<string>(this.route.snapshot.params['name']);
  
  protected isPlaygroundActive() {
    return this.route.snapshot.params['showedInfo'] == 'playground'
  }
  
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.updateComponentName();
    })
  }

  private updateComponentName() {
    this.componentName.set(this.route.snapshot.params['name']);
  }

}
