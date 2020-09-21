import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Enrollee } from '../../models/enrollee';

@Component({
  selector: 'fcc-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  public activeStatusOptions: ['True', 'False'];
  public enrolleeFormGroup: FormGroup;
  public enrolleeToEdit: Enrollee;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.enrolleeToEdit = this.data.enrollee;
    this.createEnrolleeFormGroup();
  }

  public cancelCloseDialog(): void {
    this.dialogRef.close();
  }

  private createEnrolleeFormGroup(): void {
    this.enrolleeFormGroup = this._formBuilder.group({
      enrolleeNameControl: [this.enrolleeToEdit.name, Validators.required],
      dateOfBirthControl: [
        { value: this.enrolleeToEdit.dateOfBirth, disabled: true },
      ],
      enrolleeIdControl: [{ value: this.enrolleeToEdit.id, disabled: true }],
      activeControl: [this.enrolleeToEdit.active, Validators.required],
    });
  }
}
