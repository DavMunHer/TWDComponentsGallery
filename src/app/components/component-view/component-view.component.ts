import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { ComponentExplorerComponent } from './component-explorer/component-explorer.component';
import { AuthDocsComponent } from './component-explorer/docs/auth-docs/auth-docs.component';
import { AuthPlaygroundComponent } from './component-explorer/playgrounds/auth-playground/auth-playground.component';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-component-view',
  imports: [SidebarComponent, CapitalizePipe, ComponentExplorerComponent, AuthDocsComponent, AuthPlaygroundComponent],
  templateUrl: './component-view.component.html',
  styleUrl: './component-view.component.css'
})
export class ComponentViewComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected componentName = this.route.snapshot.params['name'];
  protected showedInfo = signal<'docs' | 'playground'>(this.route.snapshot.params['showedInfo']);
  
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.onRouteChange();
    });
  }

  private onRouteChange(): void {
    this.showedInfo.set(this.route.snapshot.params['showedInfo']);
  }

  
}
