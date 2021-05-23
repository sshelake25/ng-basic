import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LearnIfComponent } from './learn-if/learn-if.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ReactiveformBasicComponent } from './reactiveform-basic/reactiveform-basic.component';

const routes: Routes = [
  { path: '', component: ProductCardComponent },
  { path: 'product-list', component: LearnIfComponent },
  { path: 'person', component: AdminComponent },
  { path: 'find', redirectTo: 'search' },
  { path: 'search', component: ReactiveformBasicComponent },
  { path:'product-desc', component:ProductDescComponent},
  { path: '**', component: ProductPriceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
