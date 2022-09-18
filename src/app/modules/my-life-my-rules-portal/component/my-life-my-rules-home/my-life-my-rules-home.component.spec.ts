import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLifeMyRulesHomeComponent } from './my-life-my-rules-home.component';

describe('MyLifeMyRulesHomeComponent', () => {
  let component: MyLifeMyRulesHomeComponent;
  let fixture: ComponentFixture<MyLifeMyRulesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLifeMyRulesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLifeMyRulesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
