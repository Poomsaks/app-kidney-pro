import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPageUatComponent } from './logout-page-uat.component';

describe('LogoutPageUatComponent', () => {
  let component: LogoutPageUatComponent;
  let fixture: ComponentFixture<LogoutPageUatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutPageUatComponent]
    });
    fixture = TestBed.createComponent(LogoutPageUatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
