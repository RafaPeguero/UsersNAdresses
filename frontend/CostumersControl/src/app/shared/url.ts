import { environment } from '../../environments/environment';

 let SERVER = environment.server;
 let CustomerEndPoint = SERVER + 'Customers/';
 let CustomersAdressEndPoint = SERVER + 'CustomersAdresses/';

export let APIURL = {
    Customer: {
        getCustomers: `${CustomerEndPoint}getCustomers`,
        getCustomer: `${CustomerEndPoint}getCustomer/`,
        AddCustomer: `${CustomerEndPoint}AddCustomer`,
        EditCustomer: `${CustomerEndPoint}EditCustomer/`,
        DeleteCustomer: `${CustomerEndPoint}DeleteCustomer/`
    },
    CustomersAdress: {
        GetCustomerAdresses: `${CustomersAdressEndPoint}getCustomersAdresses/`,
        getCustomerAdress: `${CustomersAdressEndPoint}GetCustomerAdress/`,
        AddCustomerAdress: `${CustomersAdressEndPoint}AddCustomerAdress`,
        EditCustomerAdress: `${CustomersAdressEndPoint}EditCustomerAdress/`,
        DeleteCustomerAdress: `${CustomersAdressEndPoint}DeleteCustomerAdress/`
    }
}