import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageEnglishLayoutsFooterComponent } from './language-english-layouts-footer.component';

describe('LanguageEnglishLayoutsFooterComponent', () => {
  let component: LanguageEnglishLayoutsFooterComponent;
  let fixture: ComponentFixture<LanguageEnglishLayoutsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageEnglishLayoutsFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageEnglishLayoutsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
