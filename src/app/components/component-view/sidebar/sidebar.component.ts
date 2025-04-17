import { Component, inject, OnInit } from '@angular/core';
import { ComponentsInfoService } from '../../../services/components-info.service';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { Router, RouterLink } from '@angular/router';
import { ComponentInfo } from '../../../interfaces/component-info';

@Component({
  selector: 'components-sidebar',
  imports: [CapitalizePipe, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  protected componentsInfo: Array<ComponentInfo> = [];
  private componentsService = inject(ComponentsInfoService);
  private router = inject(Router);

  ngOnInit(): void {
    this.componentsInfo = this.componentsService.getComponentInfo();
    
    this.router.events.subscribe(() => {
      // Component url name in the info of each component
      
    });
  }
}
