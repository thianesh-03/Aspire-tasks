import { Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Buy',
    component: BuyComponent,
  },
  {
    path: 'Sell',
    component: SellComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
