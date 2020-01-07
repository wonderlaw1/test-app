import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, pluck} from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { User } from './app/auth/shared/services/auth/auth.service';
import { Meal } from './app/health/shared/services/meals/meals.service';
import { Workout } from './app/health/shared/services/workouts/workouts.service';
import {ScheduleItem} from './app/health/shared/services/schedule/schedule.service';


export interface State {
  user: User;
  meals: Meal[];
  workouts: Workout[];
  selected: any;
  date: Date;
  schedule: ScheduleItem[];
  [key: string]: any;
}

const basicState: State = {
  user: undefined,
  meals: undefined,
  workouts: undefined,
  date: undefined,
  schedule: undefined,
  selected: undefined
};

@Injectable()
export class Store {

  private subject = new BehaviorSubject<State>(basicState);
  private store = this.subject.asObservable().pipe(
    distinctUntilChanged()
  );

  private get value() {
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
