import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentsInfoService } from '../../../../services/components-info.service';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'dynamic-docs',
  imports: [MarkdownComponent],
  templateUrl: './dynamic-docs.component.html',
  styleUrl: './dynamic-docs.component.css',
})
export class DynamicDocsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private componentsInfoService = inject(ComponentsInfoService);

  protected docs = signal<string | undefined>(undefined);
  protected errorMessage = signal<string | undefined>(undefined);
  protected loading = signal<boolean>(true);

  ngOnInit(): void {
    const componentNameInUrl = this.route.snapshot.params['name'];
    this.componentsInfoService.getComponentDocs(componentNameInUrl).subscribe({
      next: (response) => {
        this.docs.set(response);
      },
      error: (err) => {
        this.errorMessage.set(
          'Error trying to load the docs of this component.'
        );
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
