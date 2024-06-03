import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sell', component: SellComponent },
  { path: 'buy', component: BuyComponent }
];
