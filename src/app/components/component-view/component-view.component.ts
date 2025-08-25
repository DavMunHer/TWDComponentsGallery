import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentExplorerComponent } from './component-explorer/component-explorer.component';
import { AuthDocsComponent } from './docs/auth-docs/auth-docs.component';
import { AuthPlaygroundComponent } from './playgrounds/auth-playground/auth-playground.component';
import { ComponentsInfoService } from '../../services/components-info.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-component-view',
  imports: [
    ClickOutsideDirective,
    SidebarComponent, ComponentExplorerComponent,
    AuthDocsComponent, AuthPlaygroundComponent,
    NavbarComponent, ResponsiveMenuComponent
  ],
  templateUrl: './component-view.component.html',
  styleUrl: './component-view.component.css'
})
export class ComponentViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private componentsInfoService = inject(ComponentsInfoService);
  protected componentName = signal<string>('');
  protected showedInfo = signal<'docs' | 'playground'>(this.route.snapshot.params['showedInfo']);

  protected sidebarStatus = signal<'enabled' | 'disabled'>('disabled');
  private responsiveMenu = viewChild(ResponsiveMenuComponent, {read: ElementRef});

  protected changeSidebarView(newStatus: 'enabled' | 'disabled') {
    this.sidebarStatus.set(newStatus);
  }

  protected hideSidebar(target: HTMLElement) {
    if (!this.responsiveMenu()?.nativeElement.contains(target)) {
      // We ignore the clickOutside when clicking in the menu component
      this.sidebarStatus.set('disabled');
    }
  }


  ngOnInit(): void {
    this.updateComponentName();
    this.router.events.subscribe(() => {
      this.onRouteChange();
    });
  }

  private onRouteChange(): void {
    this.showedInfo.set(this.route.snapshot.params['showedInfo']);
    this.updateComponentName();
  }

  private updateComponentName() {
    const componentNameInUrl = this.route.snapshot.params['name'];
    const currentComponent = this.componentsInfoService.getComponentMinInfo(componentNameInUrl);
    if (currentComponent) {
      this.componentName.set(currentComponent.name);
    }
  }
}
