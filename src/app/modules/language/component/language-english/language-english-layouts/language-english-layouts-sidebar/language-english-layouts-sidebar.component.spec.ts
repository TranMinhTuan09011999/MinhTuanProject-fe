import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageEnglishLayoutsSidebarComponent } from './language-english-layouts-sidebar.component';

describe('LanguageEnglishLayoutsSidebarComponent', () => {
  let component: LanguageEnglishLayoutsSidebarComponent;
  let fixture: ComponentFixture<LanguageEnglishLayoutsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageEnglishLayoutsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageEnglishLayoutsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
