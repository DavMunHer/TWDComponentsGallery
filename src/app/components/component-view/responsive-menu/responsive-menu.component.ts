import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'responsive-menu',
  imports: [],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.css'
})
export class ResponsiveMenuComponent {
  public currentSidebarView = input.required<'enabled' | 'disabled'>();
  public toggleSidebarStatus = output<'enabled' | 'disabled'>();

  protected emitSidebarChange() {
    if (this.currentSidebarView() == 'disabled') {
      this.toggleSidebarStatus.emit('enabled');
    } else {
      this.toggleSidebarStatus.emit('disabled');
    }
  }
}
