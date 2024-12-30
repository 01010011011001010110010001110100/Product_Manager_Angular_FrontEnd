import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicTableComponent } from './dinamic-table.component';

describe('DinamicTableComponent', () => {
  let component: DinamicTableComponent;
  let fixture: ComponentFixture<DinamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamicTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
