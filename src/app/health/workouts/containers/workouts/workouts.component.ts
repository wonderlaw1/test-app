import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from 'store';
import {Workout, WorkoutsService} from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  workouts$: Observable<Workout[]>;
  subscription: Subscription;

  constructor(private workoutService: WorkoutsService,
              private store: Store) { }

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>('workout');
    this.subscription = this.workoutService.workouts$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeWorkout(e: Workout) {
    this.workoutService.removeWorkout(e.$key);
  }

}

