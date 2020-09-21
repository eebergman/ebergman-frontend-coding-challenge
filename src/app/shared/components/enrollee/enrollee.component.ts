import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Observable, Subscription } from 'rxjs';
import { EnrolleeService } from 'src/app/core/services/enrollee.service';
import { Enrollee } from '../../models/enrollee';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { FormGroup } from '@angular/forms';
import { UpdateEnrollee } from '../../models/update-enrollee';

@Component({
  selector: 'fcc-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss'],
})
export class EnrolleeComponent implements OnInit, OnDestroy {
  public dataSource: MatTableDataSource<Enrollee>;
  public displayedColumns: string[] = [
    'name',
    'dateOfBirth',
    'id',
    'active',
    'edit',
  ];
  private _enrollees$: Observable<any>;
  private _subscriptions: Subscription[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private _enrolleeService: EnrolleeService
  ) {}

  ngOnInit(): void {
    this._enrolleeService.configure('http://localhost:8080');
    this.fetchInitialEnrolleeInformation();
  }

  ngOnDestroy(): void {
    if (this._subscriptions) {
      this._subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openEditEnrolleeDialog(enrolleeID: string): void {
    this._subscriptions.push(
      this._enrolleeService
        .fetchEnrolleeById(enrolleeID)
        .subscribe((searchedForEnrollee) => {
          this.openDialog(searchedForEnrollee);
        })
    );
  }

  private openDialog(enrolleeToEdit: Enrollee): void {
    let updateEnrollee: UpdateEnrollee;
    const dialogRef = this.dialog.open(EditDialogComponent, {
      minHeight: '430px',
      data: {
        enrollee: enrolleeToEdit,
      },
    });

    this._subscriptions.push(
      dialogRef.afterClosed().subscribe((editForm: FormGroup) => {
        console.log(editForm);

        updateEnrollee = {
          active: editForm.controls.activeControl.value,
          name: editForm.controls.enrolleeNameControl.value,
        };

        const upDateInformation = this._enrolleeService.updateSingleEnrollee(
          enrolleeToEdit.id,
          updateEnrollee
        );
        this._subscriptions.push(upDateInformation.subscribe((x) => {}));
        this.fetchInitialEnrolleeInformation();
      })
    );
  }

  private fetchInitialEnrolleeInformation(): void {
    this._enrollees$ = this._enrolleeService.fetchEnrollees();
    this._subscriptions.push(
      this._enrollees$.subscribe((enrollee) => {
        this.dataSource = new MatTableDataSource(enrollee);
        this.dataSource.sort = this.sort;
      })
    );
  }
}
