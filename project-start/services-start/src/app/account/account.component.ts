import { AccountService } from './../account.service';
import { Component, Input,  } from '@angular/core';
import { LogginService } from '../loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LogginService,
              private accountsService: AccountService) {

  }
  onSetTo(status: string) {
    this.logginService.logStatusChange(status);
  }
}
