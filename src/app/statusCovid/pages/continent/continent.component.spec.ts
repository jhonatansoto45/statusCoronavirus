import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentComponent } from './continent.component';

describe('ContinentComponent', () => {
  let component: ContinentComponent;
  let fixture: ComponentFixture<ContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
