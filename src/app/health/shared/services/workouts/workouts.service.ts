import { Injectable } from '@angular/core';
import { Store } from 'store';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';


export interface Workout {
  name: string;
  type: string;
  strength: any;
  endurance: any;
  timestamp: number;
  $key: string;
  $exists: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  workouts$: Observable<Workout[]> = this.db.list<Workout>(`workouts/${this.uid}`).snapshotChanges().pipe(
    map(next => {
      const items = next.map(i => {
        const data = i.payload.val();
        const $key = i.payload.key;
        return {$key, ...data};
      });
      this.store.set('workouts$', items);
      return items;
    })
  );

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) { }

  get uid() {
    return this.authService.user.uid;
  }

  getWorkout(key: string): Observable<Workout> {
    if (!key) {
      return of({} as Workout);
    }
    return this.store.select<Workout[]>('workouts$').pipe(
      filter(Boolean),
      map((workouts: Workout[]) => {
        return workouts.find(workout => workout.$key === key);
      })
    );
  }

  addWorkout(workout: Workout) {
    return this.db.list(`workouts/${this.uid}`).push(workout);
  }

  updateWorkout(key: string, workout: Workout) {
    delete workout.$key;
    return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
  }

  removeWorkout(key: string) {
    return this.db.list(`workouts/${this.uid}`).remove(key);
  }
}
