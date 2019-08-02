import { Subscription, fromEvent } from 'rxjs';
import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RecordsService } from '../../records.service';
import { map, distinctUntilChanged, debounce, debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private recordsService: RecordsService) { }

  dataSource = new MatTableDataSource();
  isLoading = true;
  displayedColumns = ['datetime', 'counterparty', 'category', 'value'];
  subscriptions: Subscription[] = [];
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit() {
    this.recordsService.getRecords()
    .subscribe(data => {
      this.isLoading = false;
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.subscriptions.push(fromEvent(this.filter.nativeElement, 'keyup').pipe(
        debounceTime(500),
        map((e: Event) => (e.target as HTMLInputElement).value),
        distinctUntilChanged(),
        tap(() => this.isLoading = true),
        switchMap((val: string) => this.recordsService.getRecordsByValue(val)),
    ).subscribe(d => {
      this.isLoading = false;
      this.dataSource.data = d;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

}
