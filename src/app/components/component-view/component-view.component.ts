import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { ComponentExplorerComponent } from './component-explorer/component-explorer.component';
import { AuthDocsComponent } from './docs/auth-docs/auth-docs.component';
import { AuthPlaygroundComponent } from './playgrounds/auth-playground/auth-playground.component';
import { ComponentsInfoService } from '../../services/components-info.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-component-view',
  imports: [SidebarComponent, CapitalizePipe, ComponentExplorerComponent, AuthDocsComponent, AuthPlaygroundComponent, NavbarComponent],
  templateUrl: './component-view.component.html',
  styleUrl: './component-view.component.css'
})
export class ComponentViewComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private componentsInfoService = inject(ComponentsInfoService);
  protected componentName = signal<string>('');
  protected showedInfo = signal<'docs' | 'playground'>(this.route.snapshot.params['showedInfo']);


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
