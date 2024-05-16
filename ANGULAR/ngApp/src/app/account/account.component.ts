import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  accType: string = 'Savings';
  stat: string = 'Loyal';

  accounts: account[] = [
    {
      accountNumber: 101,
      acholderName: 'Aswanth',
      typeofAccount: 'Savings',
      amount: 45000,
      bankname: 'SBI',
      status: 'Active',
    },
    {
      accountNumber: 102,
      acholderName: 'Deepa',
      typeofAccount: 'Savings',
      amount: 37000,
      bankname: 'SBI',
      status: 'InActive',
    },
    {
      accountNumber: 103,
      acholderName: 'Sujeeth',
      typeofAccount: 'Current',
      amount: 50000,
      bankname: 'ICICI',
      status: 'Active',
    },
    {
      accountNumber: 104,
      acholderName: 'Thianesh',
      typeofAccount: 'Current',
      amount: 70000,
      bankname: 'Axis',
      status: 'Loyal',
    },
    {
      accountNumber: 105,
      acholderName: 'Senthil',
      typeofAccount: 'NRI',
      amount: 90000,
      bankname: 'Axis',
      status: 'Loyal',
    },
    {
      accountNumber: 106,
      acholderName: 'Suresh',
      typeofAccount: 'Current',
      amount: 70000,
      bankname: 'ICICI',
      status: 'Loyal',
    },
    {
      accountNumber: 107,
      acholderName: 'Jaikanth',
      typeofAccount: 'NRI',
      amount: 60000,
      bankname: 'HDFC',
      status: 'Loyal',
    },
    {
      accountNumber: 108,
      acholderName: 'Abitha',
      typeofAccount: 'Current',
      amount: 30000,
      bankname: 'Axis',
      status: 'InActive',
    },
    {
      accountNumber: 109,
      acholderName: 'Sharmila',
      typeofAccount: 'Current',
      amount: 42000,
      bankname: 'HDFC',
      status: 'Active',
    },
    {
      accountNumber: 110,
      acholderName: 'Sanji',
      typeofAccount: 'Savings',
      amount: 100000,
      bankname: 'SBI',
      status: 'Loyal',
    },
  ];
}
export class account {
  accountNumber: number;
  acholderName: String;
  typeofAccount: String;
  amount: number;
  bankname: String;
  status: String;

  constructor(
    accountNumber: number,
    acholderName: String,
    typeofAccount: String,
    amount: number,
    bankname: String,
    status: String
  ) {
    this.accountNumber = accountNumber;
    this.acholderName = acholderName;
    this.typeofAccount = typeofAccount;
    this.amount = amount;
    this.bankname = bankname;
    this.status = status;
  }
}
