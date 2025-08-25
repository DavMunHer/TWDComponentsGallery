import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ComponentsInfoService } from '../../../services/components-info.service';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ComponentMinInfo } from '../../../interfaces/component-min-info';
import { NgClass } from '@angular/common';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';

@Component({
  selector: 'components-sidebar',
  imports: [CapitalizePipe, RouterLink, NgClass, ClickOutsideDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  protected componentsInfo: ComponentMinInfo[] = [];
  private componentsService = inject(ComponentsInfoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  protected selectedComponentNameInUrl = signal<string>(this.route.snapshot.params['name']);

  public sidebarCurrentStatus = input.required<'enabled' | 'disabled'>();

  ngOnInit(): void {
    this.componentsInfo = this.componentsService.getComponentsMinInfo();
    
    this.router.events.subscribe(() => {
      // Component url name in the info of each component
      this.updateSelectedComponent();
    });
  }


  private updateSelectedComponent() {
    this.selectedComponentNameInUrl.set(this.route.snapshot.params['name']);
  }

}
