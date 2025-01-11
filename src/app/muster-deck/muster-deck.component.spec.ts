import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusterDeckComponent } from './muster-deck.component';

describe('MusterDeckComponent', () => {
  let component: MusterDeckComponent;
  let fixture: ComponentFixture<MusterDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusterDeckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusterDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
