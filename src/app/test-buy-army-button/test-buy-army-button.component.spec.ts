import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBuyArmyButtonComponent } from './test-buy-army-button.component';

describe('TestBuyArmyButtonComponent', () => {
  let component: TestBuyArmyButtonComponent;
  let fixture: ComponentFixture<TestBuyArmyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBuyArmyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBuyArmyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
