import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ComponentInfo } from '../../../interfaces/component-info';
import { ComponentsInfoService } from '../../../services/components-info.service';

@Component({
  selector: 'component-explorer',
  imports: [NgClass, RouterLink],
  templateUrl: './component-explorer.component.html',
  styleUrl: './component-explorer.component.css',
})
export class ComponentExplorerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private componentsInfoService = inject(ComponentsInfoService);
  protected componentInfo = signal<ComponentInfo | undefined>(undefined);

  protected isPlaygroundActive() {
    return this.route.snapshot.params['showedInfo'] == 'playground';
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const newName = this.route.snapshot.params['name'];
      this.componentInfo.set(
        this.componentsInfoService.getComponentInfo(newName)
      );
    });
  }

}
