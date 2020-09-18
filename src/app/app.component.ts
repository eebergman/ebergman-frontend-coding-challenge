import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { EnrolleeService } from './core/services/enrollee.service';
import { Enrollee } from './shared/models/enrollee';

@Component({
  selector: 'fcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
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
