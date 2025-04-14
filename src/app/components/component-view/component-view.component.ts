import { Component, inject } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { ComponentExplorerComponent } from './component-explorer/component-explorer.component';
import { AuthDocsComponent } from './component-explorer/docs/auth-docs/auth-docs.component';
import { AuthPlaygroundComponent } from './component-explorer/playgrounds/auth-playground/auth-playground.component';

@Component({
  selector: 'app-component-view',
  imports: [SidebarComponent, CapitalizePipe, ComponentExplorerComponent, AuthDocsComponent, AuthPlaygroundComponent],
  templateUrl: './component-view.component.html',
  styleUrl: './component-view.component.css'
})
export class ComponentViewComponent {
  private route = inject(ActivatedRoute);
  protected componentName = this.route.snapshot.params['name'];
  protected showedInfo: 'docs' | 'playground' = this.route.snapshot.params['showedInfo'];
}
