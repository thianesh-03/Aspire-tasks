import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, AccountComponent, RouterLink, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'ngApp';
  // showTitle() {
  //   return 'Thianesh';
  // }
  // clickCount = 0;
  // addCount() {
  //   this.clickCount++;
  // }
  // reduceCount() {
  //   if (this.clickCount > 0) this.clickCount--;
  // }

  // movies = ['zootopia', 'preacher', 'kong', 'zilla', 'batman'];

  // showMe = false;
  // applyRed = false;
}
