import { ContactCaseService } from '../data-access/contact-case.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ActionListItemDto } from '../model/action-list-item';

@Injectable()
export class ContactCaseActionListResolver implements Resolve<ActionListItemDto[]> {
  constructor(private apiService: ContactCaseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ActionListItemDto[]> {
    return this.apiService.getActionList();
  }
}
