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
    public class CustomersAdressesController : ControllerBase
    {
        private ICustomerData _customerDataAdress;
        public CustomersAdressesController(ICustomerData customerDataAdress)
        {
            _customerDataAdress = customerDataAdress;
        }

        [HttpGet]
        [Route("api/[controller]/getCustomersAdresses/{Customer_id}")]
        public IActionResult getCustomersAdresses(int Customer_id)
        {
            return Ok(_customerDataAdress.GetCustomerAdresses(Customer_id));
        }

        [HttpGet]
        [Route("api/[controller]/GetCustomerAdress/{id}")]
        public IActionResult getCustomerAdress(int id)
        {
            var Customer = _customerDataAdress.GetCustomerAdress(id);

            if (Customer != null)
            {
                return Ok(Customer);
            }

            return NotFound($"Adress with id: {id} was not found");
        }

        [HttpPost]
        [Route("api/[controller]/AddCustomerAdress")]
        public IActionResult AddCustomerAdress(CustomerAdress CustomerAdress)
        {
            _customerDataAdress.AddCustomerAdress(CustomerAdress);

            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + CustomerAdress.Adress_ID,
                CustomerAdress);
        }


        [HttpDelete]
        [Route("api/[controller]/DeleteCustomerAdress/{id}")]
        public IActionResult DeleteCustomerAdress(int id)
        {
            var customerAdress = _customerDataAdress.GetCustomerAdress(id);

            if (customerAdress != null)
            {
                _customerDataAdress.DeleteCustomerAdress(customerAdress);
                return Ok();
            }

            return NotFound($"Customer Adress with id: {id} was not found");
        }

        [HttpPut]
        [Route("api/[controller]/EditCustomerAdress/{id}")]
        public IActionResult EditCustomerAdress(int id, CustomerAdress customerAdress)
        {
            var ExistingCustomerAdress = _customerDataAdress.GetCustomerAdress(id);

            if (ExistingCustomerAdress != null)
            {
                customerAdress.Adress_ID = ExistingCustomerAdress.Adress_ID;
                _customerDataAdress.EditCustomerAdress(customerAdress);
                return Ok();
            }

            return Ok(customerAdress);
        }
    }
}