import { Injectable } from '@angular/core';
import { Store } from 'store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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

  addMeal(meal: Meal) {
    this.db.list(`meals/${this.uid}`).push(meal);
  }

  removeMeal(key: string) {
    this.db.list(`meals/${this.uid}`).remove(key);
  }
}
