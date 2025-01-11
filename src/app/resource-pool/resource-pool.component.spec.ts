import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePoolComponent } from './resource-pool.component';

describe('ResourcePoolComponent', () => {
  let component: ResourcePoolComponent;
  let fixture: ComponentFixture<ResourcePoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcePoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
