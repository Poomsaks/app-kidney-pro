import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageUatComponent } from './admin-page-uat.component';

describe('AdminPageUatComponent', () => {
  let component: AdminPageUatComponent;
  let fixture: ComponentFixture<AdminPageUatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPageUatComponent]
    });
    fixture = TestBed.createComponent(AdminPageUatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
