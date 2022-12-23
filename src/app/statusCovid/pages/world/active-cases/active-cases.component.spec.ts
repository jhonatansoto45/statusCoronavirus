import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCasesComponent } from './active-cases.component';

describe('ActiveCasesComponent', () => {
  let component: ActiveCasesComponent;
  let fixture: ComponentFixture<ActiveCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
