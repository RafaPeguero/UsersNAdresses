import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAdressComponentComponent } from './customers-adress-component.component';

describe('CustomersAdressComponentComponent', () => {
  let component: CustomersAdressComponentComponent;
  let fixture: ComponentFixture<CustomersAdressComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAdressComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAdressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
