import { Component } from '@angular/core';
import { CodeContainerComponent } from '../utils/code-container/code-container.component';

@Component({
  selector: 'auth-docs',
  imports: [CodeContainerComponent],
  templateUrl: './auth-docs.component.html',
  styleUrl: './auth-docs.component.css',
})
export class AuthDocsComponent {
  protected text =
`import { Component } from "@angular/core";
import { AuthComponent } from "auth";

@Component({
  selector: "app-auth-implementation",
  imports: [AuthComponent],
  templateUrl: "./auth-implementation.component.html",
  styleUrl: "./auth-implementation.component.css",
})
export class AuthImplementationComponent {}`;
  
  
}
