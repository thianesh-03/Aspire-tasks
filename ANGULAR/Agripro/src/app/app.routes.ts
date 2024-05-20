import { Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"Sell",
        component:SellComponent
    },
];
