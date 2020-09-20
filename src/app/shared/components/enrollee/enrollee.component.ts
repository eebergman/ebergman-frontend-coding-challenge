import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { EnrolleeService } from 'src/app/core/services/enrollee.service';
import { Enrollee } from '../../models/enrollee';

@Component({
  selector: 'fcc-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss'],
})
export class EnrolleeComponent implements OnInit {
  public dataSource: MatTableDataSource<Enrollee>;
  public displayedColumns: string[] = [
    'active',
    'dateOfBirth',
    'enrolleeID',
    'enrolleeName',
  ];
  private _enrollees$: Observable<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _enrolleeService: EnrolleeService) {}

  ngOnInit(): void {
    this._enrolleeService.configure('http://localhost:8080');
    this.fetchInitialEnrolleeInformation();
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private fetchInitialEnrolleeInformation(): void {
    this._enrollees$ = this._enrolleeService.callEnrollees();
    this._enrollees$.subscribe((x) => {
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.sort = this.sort;
    });
  }
}
