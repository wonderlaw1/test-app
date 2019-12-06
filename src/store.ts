import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, pluck} from 'rxjs/operators';
import { User } from './app/auth/shared/services/auth/auth.service';
import { Injectable } from '@angular/core';

export interface State {
  user: User;
  [key: string]: any;
}

const basicState: State = {
  user: undefined
};

@Injectable()
export class Store {

  private subject = new BehaviorSubject<State>(basicState);
  private store = this.subject.asObservable().pipe(
    distinctUntilChanged()
  );

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      pluck(name)
    );
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
