import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPageProComponent } from './report-page-pro.component';

describe('ReportPageProComponent', () => {
  let component: ReportPageProComponent;
  let fixture: ComponentFixture<ReportPageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportPageProComponent]
    });
    fixture = TestBed.createComponent(ReportPageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
