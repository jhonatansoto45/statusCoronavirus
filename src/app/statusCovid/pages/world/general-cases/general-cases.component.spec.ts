import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCasesComponent } from './general-cases.component';

describe('GeneralCasesComponent', () => {
  let component: GeneralCasesComponent;
  let fixture: ComponentFixture<GeneralCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
