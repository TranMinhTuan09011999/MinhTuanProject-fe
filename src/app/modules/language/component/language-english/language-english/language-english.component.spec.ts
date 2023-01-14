import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageEnglishComponent } from './language-english.component';

describe('LanguageEnglishComponent', () => {
  let component: LanguageEnglishComponent;
  let fixture: ComponentFixture<LanguageEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
