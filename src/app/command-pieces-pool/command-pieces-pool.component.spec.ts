import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPiecesPoolComponent } from './command-pieces-pool.component';

describe('CommandPiecesPoolComponent', () => {
  let component: CommandPiecesPoolComponent;
  let fixture: ComponentFixture<CommandPiecesPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandPiecesPoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandPiecesPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
