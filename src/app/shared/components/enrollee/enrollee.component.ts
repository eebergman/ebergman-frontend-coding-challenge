import { Component, OnInit } from '@angular/core';
import { Enrollee } from '../../models/enrollee';
import { Observable } from 'rxjs';
import { EnrolleeService } from 'src/app/core/services/enrollee.service';

@Component({
  selector: 'fcc-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.sass'],
})
export class EnrolleeComponent implements OnInit {
  public enrollees: Enrollee[] = [];
  private _enrollees$: Observable<any>;

  constructor(private _enrolleeService: EnrolleeService) {}

  ngOnInit(): void {
    this._enrolleeService.configure('http://localhost:8080');
    this.doSomething();
  }

  private doSomething(): void {
    this._enrollees$ = this._enrolleeService.callEnrollees();
    this._enrollees$.subscribe((x) => {
      this.enrollees = x;
    });
  }
}
