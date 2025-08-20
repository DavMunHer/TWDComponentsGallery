import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'responsive-menu',
  imports: [],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.css'
})
export class ResponsiveMenuComponent {
  private currentSidebarView = signal<'enabled' | 'disabled'>('disabled');
  public toggleSidebarView = output<'enable' | 'disable'>();

  protected emitSidebarChange() {
    if (this.currentSidebarView() == 'disabled') {
      this.toggleSidebarView.emit('enable');
    } else {
      this.toggleSidebarView.emit('disable');
    }
  }
}
