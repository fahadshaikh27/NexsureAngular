import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Product Management" description="Insurance types, products, benefits, and setup workflow area.">
      <button class="button" type="button">Add Product</button>
    </app-page-header>

    <section class="page-card">
      <strong>Product management module</strong>
      <p class="muted">Connect screens here using <code>ProductsApiService</code>.</p>
    </section>
  `
})
export class ProductsPageComponent {}
