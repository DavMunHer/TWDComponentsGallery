import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ComponentInfo } from '../../../types/component-info';
import { ComponentsInfoService } from '../../../services/components-info.service';

@Component({
    selector: 'app-list',
    imports: [CardComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
    protected components: ComponentInfo[] = [];
    private componentsInfoService = inject(ComponentsInfoService);

    ngOnInit(): void {
        this.components = this.componentsInfoService.getComponentsInfo();
    }
}
