import { Component, inject, OnInit, signal } from '@angular/core';
import { ComponentsInfoService } from '../../../services/components-info.service';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ComponentMinInfo } from '../../../interfaces/component-min-info';

@Component({
  selector: 'components-sidebar',
  imports: [CapitalizePipe, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  protected componentsInfo: ComponentMinInfo[] = [];
  private componentsService = inject(ComponentsInfoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  protected selectedComponentNameInUrl = signal<string>(this.route.snapshot.params['name']);

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
