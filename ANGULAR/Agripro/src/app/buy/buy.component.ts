import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {

}
