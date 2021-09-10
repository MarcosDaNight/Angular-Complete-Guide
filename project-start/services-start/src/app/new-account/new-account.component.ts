import { AccountService } from './../account.service';
import { LogginService } from './../loggin.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService, AccountService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logginService: LogginService,
              private accountsService: AccountService) {

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.logginService.logStatusChange(accountStatus);
    
  }
}
