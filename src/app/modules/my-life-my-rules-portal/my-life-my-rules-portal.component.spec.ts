import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLifeMyRulesPortalComponent } from './my-life-my-rules-portal.component';

describe('MyLifeMyRulesPortalComponent', () => {
  let component: MyLifeMyRulesPortalComponent;
  let fixture: ComponentFixture<MyLifeMyRulesPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLifeMyRulesPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLifeMyRulesPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
