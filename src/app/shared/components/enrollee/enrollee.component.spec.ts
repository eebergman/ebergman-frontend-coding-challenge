import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EnrolleeService } from 'src/app/core/services/enrollee.service';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MockEnrolleeService } from 'src/test/mocks/mockEnrolleeService';
import { TEST_GOOD_ENROLLEE_ACTIVE } from 'src/test/test-enrollee';
import { Enrollee } from '../../models/enrollee';
import { EnrolleeComponent } from './enrollee.component';

describe('EnrolleeComponent', () => {
  let component: EnrolleeComponent;
  let fixture: ComponentFixture<EnrolleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, HttpClientTestingModule, MaterialModule],
      declarations: [EnrolleeComponent],
      providers: [{ provide: EnrolleeService, useClass: MockEnrolleeService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the enrollees', () => {
    let actual = JSON.parse(JSON.stringify(component.dataSource.filteredData));
    actual = actual as Enrollee;

    expect(actual).toEqual(TEST_GOOD_ENROLLEE_ACTIVE);
  });
});
