import {ChangeDetectionStrategy, Component, Input, EventEmitter, Output} from '@angular/core';

import {ScheduleItem} from '../../../shared/services/schedule/schedule.service';
import {Meal} from '../../../shared/services/meals/meals.service';
import {Workout} from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'app-schedule-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-section.component.html',
  styleUrls: ['./schedule-section.component.scss']
})
export class ScheduleSectionComponent {

  @Input() name: string;
  @Input() section: ScheduleItem;
  @Output() selectSection = new EventEmitter<any>();

  onSelect(type: string, assigned: Meal[] | Workout[] = []) {
    const data = this.section;
    this.selectSection.emit({
      type,
      assigned,
      data
    });
  }
}
