import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageUatComponent } from './login-page-uat.component';

describe('LoginPageUatComponent', () => {
  let component: LoginPageUatComponent;
  let fixture: ComponentFixture<LoginPageUatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageUatComponent]
    });
    fixture = TestBed.createComponent(LoginPageUatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
