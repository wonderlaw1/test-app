import {Component, Input, OnInit} from '@angular/core';
import {Workout} from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit {

  @Input() workout: Workout;

  constructor() { }

  ngOnInit() {
  }

}
