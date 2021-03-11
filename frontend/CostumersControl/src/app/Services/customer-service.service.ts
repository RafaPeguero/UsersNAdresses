import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../shared/url';
import {ICustomer} from '../Models/Customer.model';
import { ICustomerAdress } from '../Models/CustomerAdress.mode';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private readonly http: HttpClient) { }

  getCustomers(){
    return this.http.get(`${APIURL.Customer.getCustomers}`);
  }

  getCustomer(Customer_id: number) {
    return this.http.get(`${APIURL.Customer.getCustomer + Customer_id}`);
  }

  AddCustomer(Customer:ICustomer)
  {
    return this.http.post(APIURL.Customer.AddCustomer,Customer);
  }

  DeleteCustomer(Customer_id: number)
  {
    return this.http.delete(`${APIURL.Customer.DeleteCustomer + Customer_id}`);
  }

  EditCustomer(id:number, Customer:ICustomer)
  {
    return this.http.put(`${APIURL.Customer.EditCustomer + id}`, Customer);
  }

  getCustomersAdresses(Customer_Id: number)
  {
    return this.http.get(`${APIURL.CustomersAdress.GetCustomerAdresses + Customer_Id}`);
  }

  GetCustomerAdress(Adress_Id: number)
  {
    return this.http.get(`${APIURL.CustomersAdress.getCustomerAdress + Adress_Id}`);
  }

  AddCustomerAdress(CostumerAdress: ICustomerAdress)
  {
    return this.http.post(APIURL.CustomersAdress.AddCustomerAdress, CostumerAdress);
  }

  DeleteCustomerAdress(Adress_Id: number)
  {
    return this.http.delete(`${APIURL.CustomersAdress.DeleteCustomerAdress + Adress_Id}`)
  }

  EditCustomerAdress(Adress_Id: number, CostumerAdress: ICustomerAdress)
  {
    return this.http.put(`${APIURL.CustomersAdress.EditCustomerAdress + Adress_Id }`, CostumerAdress);
  }

}
