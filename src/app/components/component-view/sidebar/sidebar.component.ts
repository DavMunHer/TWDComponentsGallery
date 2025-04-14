import { Component, inject, OnInit } from '@angular/core';
import { ComponentsInfoService } from '../../../services/components-info.service';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { RouterLink } from '@angular/router';
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

  ngOnInit(): void {
    this.componentsInfo = this.componentsService.getComponentInfo();
  }
}
