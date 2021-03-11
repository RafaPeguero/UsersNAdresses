using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomersControlApi.Models;

namespace CustomersControlApi.CustomerData
{
    public class SqlCustomerData : ICustomerData
    {
        private CustomerControlContext _customerControlContext;
        public SqlCustomerData(CustomerControlContext context)
        {
            _customerControlContext = context;
        }
        public Customer AddCustomer(Customer customer)
        {

            _customerControlContext.Customer.Add(customer);
            _customerControlContext.SaveChanges();
            return customer;
        }

        public CustomerAdress AddCustomerAdress(CustomerAdress customerAdress)
        {

            _customerControlContext.CustomerAdresses.Add(customerAdress);
            _customerControlContext.SaveChanges();
            return customerAdress;
        }

        public void DeleteCustomer(Customer customer)
        {
           _customerControlContext.Customer.Remove(customer);
            _customerControlContext.SaveChanges();
        }

        public void DeleteCustomerAdress(CustomerAdress customerAdress)
        {
            _customerControlContext.CustomerAdresses.Remove(customerAdress);
            _customerControlContext.SaveChanges();

        }

        public Customer EditCustomer(Customer customer)
        {
            try
            {
                var existingCustomer = _customerControlContext.Customer.Find(customer.Customer_ID);
                if (existingCustomer != null)
                {
                    existingCustomer.Name = customer.Name;
                    existingCustomer.Last_Name = customer.Last_Name;
                    existingCustomer.Phone_number = customer.Phone_number;
                    existingCustomer.Email = customer.Email;

                    _customerControlContext.Customer.Update(existingCustomer);
                    _customerControlContext.SaveChanges();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return customer;
        }

        public CustomerAdress EditCustomerAdress(CustomerAdress customerAdress)
        {
            var existingcustomerAdress = _customerControlContext.CustomerAdresses.Find(customerAdress.Adress_ID);
            if (existingcustomerAdress != null)
            {
                existingcustomerAdress.Country = customerAdress.Country;
                existingcustomerAdress.City = customerAdress.City;
                existingcustomerAdress.Sector = customerAdress.Sector;
                existingcustomerAdress.Street = customerAdress.Street;
                existingcustomerAdress.building_number = customerAdress.building_number;

                _customerControlContext.CustomerAdresses.Update(existingcustomerAdress);
                _customerControlContext.SaveChanges();
            }
            return customerAdress;
        }

        public Customer getCustomer(int Customer_ID)
        {
            return _customerControlContext.Customer.SingleOrDefault(x => x.Customer_ID == Customer_ID);
        }

        public CustomerAdress GetCustomerAdress(int Adress_ID)
        {
            return _customerControlContext.CustomerAdresses.SingleOrDefault(x => x.Adress_ID == Adress_ID);
        }

        public IQueryable<CustomerAdress> GetCustomerAdresses(int Customer_ID)
        {
            return _customerControlContext.CustomerAdresses.Where(x => x.Customer_ID == Customer_ID);
        }

        public List<Customer> getCustomers()
        {
            return _customerControlContext.Customer.ToList();
        }
    }
}
