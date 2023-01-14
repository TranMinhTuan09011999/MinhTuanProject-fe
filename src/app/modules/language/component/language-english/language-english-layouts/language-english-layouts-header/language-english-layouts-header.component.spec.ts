import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageEnglishLayoutsHeaderComponent } from './language-english-layouts-header.component';

describe('LanguageEnglishLayoutsHeaderComponent', () => {
  let component: LanguageEnglishLayoutsHeaderComponent;
  let fixture: ComponentFixture<LanguageEnglishLayoutsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageEnglishLayoutsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageEnglishLayoutsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
