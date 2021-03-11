import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponentComponent } from './customers-component.component';

describe('CustomersComponentComponent', () => {
  let component: CustomersComponentComponent;
  let fixture: ComponentFixture<CustomersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
