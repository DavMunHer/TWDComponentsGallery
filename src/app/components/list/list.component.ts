import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Card } from '../../interfaces/card';

@Component({
    selector: 'app-list',
    imports: [CardComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {
    protected components: Card[] = [
        {
            imageUrl: 'auth.jpg',
            imageAlt: 'Auth component demo image',
            title: 'Auth',
            releasedDate: '2025-03-28',
            packageName:  '@triwebdev/auth-component',
            npmPackageUrl: 'https://www.npmjs.com/package/@triwebdev/auth-component',
            gitHubUrl: 'https://github.com/TriWebDev/authLib-workspace',
        }
    ];
    
}
