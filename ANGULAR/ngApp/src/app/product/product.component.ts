import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products:product[] =[{productId:100,productName:"Mobile",cost:20000},
  {productId:101,productName:"Earbus",cost:2000},
  {productId:102,productName:"Labtop",cost:40000},
  {productId:103,productName:"Charger",cost:1000},
  {productId:104,productName:"Powebank",cost:2000},
  {productId:105,productName:"Keyboard",cost:500},
  {productId:106,productName:"Mouse",cost:400}]

}
export class product{
  productName:String;
  productId:number;
  cost:number;

constructor( productName:String,productId:number,cost:number)
{
  this.productName=productName;
  this.productId=productId;
  this.cost=cost;
}
}