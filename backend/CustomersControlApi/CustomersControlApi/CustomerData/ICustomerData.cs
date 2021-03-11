using CustomersControlApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomersControlApi.CustomerData
{
    public interface ICustomerData
    {
        List<Customer> getCustomers();

        Customer getCustomer( int Customer_ID);

        Customer AddCustomer(Customer customer);

        Customer EditCustomer(Customer customer);

        void DeleteCustomer(Customer customer);

        IQueryable<CustomerAdress> GetCustomerAdresses(int Customer_ID);

        CustomerAdress GetCustomerAdress(int Adress_ID);

        CustomerAdress AddCustomerAdress(CustomerAdress customerAdress);

        CustomerAdress EditCustomerAdress(CustomerAdress customerAdress);

        void DeleteCustomerAdress(CustomerAdress customerAdress);

    }
}
