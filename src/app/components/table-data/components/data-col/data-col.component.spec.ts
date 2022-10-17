import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataColComponent } from './data-col.component';

describe('DataColComponent', () => {
  let component: DataColComponent;
  let fixture: ComponentFixture<DataColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
