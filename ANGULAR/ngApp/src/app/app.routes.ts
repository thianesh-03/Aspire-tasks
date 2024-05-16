import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {
        path:"product",
        component:ProductComponent
    },
    {
        path:"accholder",
        component:AccountComponent
    },
    {
        path:"**",
        component:ProductComponent
    }
];