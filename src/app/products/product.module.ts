import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSapcesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSapcesPipe,
    ProductDetailComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      { path : 'products', component: ProductListComponent},
      { 
        path : 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
