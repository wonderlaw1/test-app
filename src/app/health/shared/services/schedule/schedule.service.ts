import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {Store} from 'store';

import {Meal} from '../meals/meals.service';
import {Workout} from '../workouts/workouts.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AuthService} from '../../../../auth/shared/services/auth/auth.service';


export interface ScheduleItem {
  meals: Meal[];
  workouts: Workout[];
  section: string;
  timestamp: number;
  $key?: string;
}

export interface ScheduleList {
  morning?: ScheduleItem;
  lunch?: ScheduleItem;
  evening?: ScheduleItem;
  snacks?: ScheduleItem;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private date$ = new BehaviorSubject(new Date());
  private section$ = new Subject();

  selected$ = this.section$.pipe(
    tap((next: any) => this.store.set('selected', next))
  );

  schedule$: Observable<ScheduleItem[]> = this.date$.pipe(
    tap((next: any) => {
      this.store.set('date', next);
    }),
    map((day: Date) => {
      const startAt = new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime();
      const endAt = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1).getTime() - 1;
      return {startAt, endAt};
    }),
    switchMap(({startAt, endAt}: any) => this.getSchedule(startAt, endAt)),
    map((data: any) => {
      const mapped: ScheduleList = {};
      for (const prop of data) {
        if (!mapped[prop.section]) {
          mapped[prop.section] = prop;
        }
      }
      return mapped;
    }),
    tap((next: any) => this.store.set('schedule', next))
  );

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) { }

  updateDate(date: Date) {
    this.date$.next(date);
  }

  selectSection(event: any) {
    this.section$.next(event);
  }

  get uid() {
    return this.authService.user.uid;
  }

  private getSchedule(startAt: number, endAt: number) {
    return this.db.list(`schedule/${this.uid}`, ref => {
      return ref.endAt(endAt).startAt(startAt).orderByChild('timestamp');
    }).valueChanges();
  }
}
