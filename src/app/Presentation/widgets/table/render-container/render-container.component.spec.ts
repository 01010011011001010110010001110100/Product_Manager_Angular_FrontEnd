import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderContainerComponent } from './render-container.component';

describe('RenderContainerComponent', () => {
  let component: RenderContainerComponent;
  let fixture: ComponentFixture<RenderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
