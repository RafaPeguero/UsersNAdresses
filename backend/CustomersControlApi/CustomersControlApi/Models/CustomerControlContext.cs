using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomersControlApi.Models
{
    public class CustomerControlContext : DbContext
    {
        public CustomerControlContext(DbContextOptions<CustomerControlContext> options) : base(options)
        {

        }

        public DbSet<Customer> Customer { get; set; }
        public DbSet<CustomerAdress> CustomerAdresses { get; set; }


    }
}
