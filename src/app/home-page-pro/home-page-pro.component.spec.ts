import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProComponent } from './home-page-pro.component';

describe('HomePageProComponent', () => {
  let component: HomePageProComponent;
  let fixture: ComponentFixture<HomePageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageProComponent]
    });
    fixture = TestBed.createComponent(HomePageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
