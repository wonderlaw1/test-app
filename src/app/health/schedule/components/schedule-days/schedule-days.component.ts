import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-schedule-days',
  templateUrl: './schedule-days.component.html',
  styleUrls: ['./schedule-days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleDaysComponent implements OnInit {

  days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  @Output() selectDay = new EventEmitter<number>();
  @Input() selected: number;

  constructor() { }

  ngOnInit() {
  }

  onSelectDay(i: number) {
    this.selectDay.emit(i);
  }

}
