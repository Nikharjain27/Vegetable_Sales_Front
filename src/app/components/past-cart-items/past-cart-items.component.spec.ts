import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCartItemsComponent } from './past-cart-items.component';

describe('PastCartItemsComponent', () => {
  let component: PastCartItemsComponent;
  let fixture: ComponentFixture<PastCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastCartItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
