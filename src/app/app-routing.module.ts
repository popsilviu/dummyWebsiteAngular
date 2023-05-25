import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
{
  path: 'home',
  component: ProductListComponent
},
{
  path: 'shopping-cart',
  component: ShoppingCartComponent
},
{
  path: '**',
  redirectTo: '/home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
