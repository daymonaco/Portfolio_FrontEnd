import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceNEducationComponent } from './experience-n-education.component';

describe('ExperienceNEducationComponent', () => {
  let component: ExperienceNEducationComponent;
  let fixture: ComponentFixture<ExperienceNEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceNEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceNEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
