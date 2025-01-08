import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandPanelComponent } from './hand-panel.component';

describe('HandPanelComponent', () => {
  let component: HandPanelComponent;
  let fixture: ComponentFixture<HandPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
