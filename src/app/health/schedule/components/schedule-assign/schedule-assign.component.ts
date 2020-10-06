import {ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Workout} from '../../../shared/services/workouts/workouts.service';
import {Meal} from '../../../shared/services/meals/meals.service';


@Component({
  selector: 'app-schedule-assign',
  templateUrl: './schedule-assign.component.html',
  styleUrls: ['./schedule-assign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleAssignComponent implements OnInit {

  @Input() section: any;
  @Input() list: Meal[] | Workout[];

  @Output() update = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  selected: string[] = [];

  constructor() { }

  ngOnInit() {
    this.selected = [...this.section.assigned];
  }

  getRoute(name: string) {
    return [`../${name}/new`];
  }

  exists(name: string) {
    // tslint:disable-next-line:no-bitwise
    return !!~this.selected.indexOf(name);
  }

  toggleItem(name: string) {
    if (this.exists(name)) {
      this.selected = this.selected.filter(item => item !== name);
      return;
    }
    this.selected = [...this.selected, name];
  }

  updateAssign() {
    this.update.emit({
      [this.section.type]: this.selected
    });
  }

  cancelAssign() {
    this.cancel.emit();
  }
}
