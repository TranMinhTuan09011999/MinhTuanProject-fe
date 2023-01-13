import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCommunicationComponent } from './language-communication.component';

describe('LanguageCommunicationComponent', () => {
  let component: LanguageCommunicationComponent;
  let fixture: ComponentFixture<LanguageCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
