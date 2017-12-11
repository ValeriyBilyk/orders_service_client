import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserComponent} from './user/user.component';
import {OrderComponent} from './order/order.component';
import {ProductComponent} from './product/product.component';

const appRoutes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'products', component: ProductComponent},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  declarations: [
    UserComponent,
    OrderComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
