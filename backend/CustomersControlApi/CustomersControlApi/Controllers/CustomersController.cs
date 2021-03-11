using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomersControlApi.CustomerData;
using CustomersControlApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomersControlApi.Controllers
{
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private ICustomerData _customerData;
        public CustomersController(ICustomerData customerData)
        {
            _customerData = customerData;
        }

        [HttpGet]
        [Route("api/[controller]/getCustomers")]
        public IActionResult getCustomers()
        {
            return Ok(_customerData.getCustomers());
        }

        [HttpGet]
        [Route("api/[controller]/getCustomer/{id}")]
        public IActionResult getCustomer(int id)
        {
            var Customer = _customerData.getCustomer(id);

            if (Customer != null)
            {
             return Ok(Customer);
            }

            return NotFound($"Customer with id: {id} was not found");
        }

        [HttpPost]
        [Route("api/[controller]/AddCustomer")]
        public IActionResult AddCustomer(Customer customer)
        {
             _customerData.AddCustomer(customer);

            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + customer.Customer_ID,
                customer);
        }


        [HttpDelete]
        [Route("api/[controller]/DeleteCustomer/{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var customer = _customerData.getCustomer(id);

            if(customer != null)
            {
                _customerData.DeleteCustomer(customer);
                return Ok();
            }

            return NotFound($"Customer with id: {id} was not found");
        }

        [HttpPut]
        [Route("api/[controller]/EditCustomer/{id}")]
        public IActionResult EditCustomer(int id, Customer customer)
        {
            var ExistingCustomer = _customerData.getCustomer(id);

            if (ExistingCustomer != null)
            {
                customer.Customer_ID = ExistingCustomer.Customer_ID;
                _customerData.EditCustomer(customer);
                return Ok();
            }

            return Ok(customer);
        }
    }
}