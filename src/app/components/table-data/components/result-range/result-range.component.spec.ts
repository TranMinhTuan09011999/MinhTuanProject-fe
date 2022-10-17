import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRangeComponent } from './result-range.component';

describe('ResultRangeComponent', () => {
  let component: ResultRangeComponent;
  let fixture: ComponentFixture<ResultRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
