import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleCalendarComponent implements OnInit, OnChanges {

  selectedDayIndex: number;
  selectedDay: Date;
  selectedWeek: Date;

  @Input() set date(date: Date) {
    this.selectedDay = new Date(date.getTime());
  }

  @Output() changeDate = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedDayIndex = this.getToday(this.selectedDay);
    this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
  }

  onChange(weekOffset: number) {
    const startOfWeek = this.getStartOfWeek(new Date());
    const startDate = (new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate()));
    startDate.setDate(startDate.getDate() + (weekOffset * 7));
    this.changeDate.emit(startDate);
  }

  onSelectDay(index: number) {
    const selectedDate = new Date(this.selectedWeek);
    selectedDate.setDate(selectedDate.getDate() + index);
    this.changeDate.emit(selectedDate);
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  private getToday(date: Date) {
    let today = date.getDay() - 1;
    if (today < 0) {
      today = 6;
    }
    return today;
  }
}
