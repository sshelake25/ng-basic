import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductTagComponent } from './product-tag/product-tag.component';
import { AdminComponent } from './admin/admin.component';
import { LearnIfComponent } from './learn-if/learn-if.component';
import { TranformedWishPipe } from './tranformed-wish.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductPriceComponent,
    ProductCardComponent,
    ProductDescComponent,
    ProductTagComponent,
    AdminComponent,
    LearnIfComponent,
    TranformedWishPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
