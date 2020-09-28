import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes =
[
  {path:'products', component: ProductsComponent},
  {path:'orders', component: MyOrdersComponent},
  {path:'admin/orders', component: AdminOrdersComponent},
  {path:'admin/products', component: AdminProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
