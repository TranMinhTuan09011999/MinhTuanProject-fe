import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidatorCheckComponent } from './input-validator-check.component';

describe('InputValidatorCheckComponent', () => {
  let component: InputValidatorCheckComponent;
  let fixture: ComponentFixture<InputValidatorCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputValidatorCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputValidatorCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
