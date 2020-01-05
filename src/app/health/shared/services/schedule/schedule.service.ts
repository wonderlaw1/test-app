import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Store} from 'store';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private date$ = new BehaviorSubject(new Date());

  schedule$: Observable<any[]> = this.date$.pipe(tap((next: any) => {
    this.store.set('date', next);
  }));

  constructor(private store: Store) { }
}
