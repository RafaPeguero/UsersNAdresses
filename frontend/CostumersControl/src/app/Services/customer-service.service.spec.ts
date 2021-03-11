import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomerServiceService } from './customer-service.service';
import { APIURL } from '../shared/url';
import { ICustomer } from '../Models/Customer.model';
import { ICustomerAdress } from '../Models/CustomerAdress.mode';
let httpTestingController: HttpTestingController;
let service: CustomerServiceService;
const CustomerData: ICustomer[] = [
  {customer_ID: 1,
  name: 'Rafael',
  last_Name: 'Peguero',
  phone_number: '829-253-6398',
  email: 'rafaelpeguero9816@gmail.com'
},
{customer_ID: 2,
  name: 'Ignacio ',
  last_Name: 'Cuevas',
  phone_number: '829-253-6398',
  email: 'rafael-peguero@hotmail.com'
}
]

const CustomerAdressData: ICustomerAdress[] = [
  {
  adress_ID: 1,
  customer_ID: 1,
  country: 'Dominican Republic',
  city: 'Santo Domingo',
  sector: 'Corales del sur',
  street: 'tropical del este',
  building_number: '20'
},
{
  adress_ID: 2,
  customer_ID: 1,
  country: 'Dominican Republic',
  city: 'Santo Domingo',
  sector: 'Corales del sur',
  street: 'tropical del este',
  building_number: '20'
}
]
fdescribe('CustomerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule,        
      BrowserAnimationsModule
    ],
    providers: [
      CustomerServiceService,
    ]
  });

  httpTestingController = TestBed.get(HttpTestingController);

  service = TestBed.get(CustomerServiceService);



  });
  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    const service: CustomerServiceService = TestBed.get(CustomerServiceService);
    expect(service).toBeTruthy();
  });

  it('Should get a list of Customers', () => {
    service.getCustomers().subscribe( (res: ICustomer[]) => {
      expect(res.length).toBe(2);
      expect(res).toEqual(CustomerData)
    });
    let req = httpTestingController.expectOne(APIURL.Customer.getCustomers);
    req.flush(CustomerData);
  });


  it('Should get a single Customer', () => {
    service.getCustomer(1).subscribe( (res: ICustomer) => {
      console.log(res);
      expect(res).toEqual(CustomerData[0])
    });
    let req = httpTestingController.expectOne(APIURL.Customer.getCustomer + 1);
    req.flush(CustomerData[0]);
  });

  it('Should get a list of adresses of one Customer', () => {
    service.getCustomersAdresses(1).subscribe((res: ICustomerAdress[]) => {
      expect(res.length).toEqual(2);
      expect(res).toEqual(CustomerAdressData);
    });
    let req = httpTestingController.expectOne(APIURL.CustomersAdress.GetCustomerAdresses + 1);
    req.flush(CustomerAdressData);
  });
  
  it('Should get an adress', () => {
    service.GetCustomerAdress(1).subscribe( (res: ICustomerAdress) => {
      expect(res).toEqual(CustomerAdressData[0])
    });
    let req = httpTestingController.expectOne(APIURL.CustomersAdress.getCustomerAdress + 1);
    req.flush(CustomerAdressData[0]);
  });



});
