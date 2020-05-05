import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AccountDto } from '@models/account';

@Injectable()
export class AccountsResolver implements Resolve<AccountDto[]> {
  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<AccountDto[]> {
    return this.apiService.getHealthDepartmentUsers();
  }
}
