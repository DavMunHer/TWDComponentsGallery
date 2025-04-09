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
            downloads: 129,
            version: '1.0.5',
            lastCommit: 2,
            packageSize: 150,
            npmPackageUrl: 'https://www.npmjs.com/package/@triwebdev/auth-component',
            gitHubUrl: 'https://github.com/TriWebDev/authLib-workspace',
        }
    ];
    
}
