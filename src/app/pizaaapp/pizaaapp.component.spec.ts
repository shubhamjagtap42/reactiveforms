import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizaaappComponent } from './pizaaapp.component';

describe('PizaaappComponent', () => {
  let component: PizaaappComponent;
  let fixture: ComponentFixture<PizaaappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizaaappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizaaappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
