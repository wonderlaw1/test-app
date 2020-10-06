import { Injectable } from '@angular/core';
import { Store } from 'store';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';


export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals$: Observable<Meal[]> = this.db.list<Meal>(`meals/${this.uid}`).snapshotChanges().pipe(
    map(next => {
      const items = next.map(i => {
        const data = i.payload.val();
        const $key = i.payload.key;
        return {$key, ...data};
      });
      this.store.set('meals', items);
      return items;
    })
  );

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) { }

  get uid() {
    return this.authService.user.uid;
  }

  getMeal(key: string): Observable<Meal> {
    if (!key) {
      return of({} as Meal);
    }
    return this.store.select<Meal[]>('meals').pipe(
      filter(Boolean),
      map((meals: Meal[]) => {
        return meals.find(meal => meal.$key === key);
      })
    );
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }

  updateMeal(key: string, meal: Meal) {
    delete meal.$key;
    return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }
}
