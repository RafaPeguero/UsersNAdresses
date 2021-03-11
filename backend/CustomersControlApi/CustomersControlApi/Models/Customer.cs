using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomersControlApi.Models
{
    public class Customer
    {
        [Key]
        public int Customer_ID { get; set; }
        [Required]
        public string Name { get; set; }

        [Required]
        public string Last_Name { get; set; }
        [Required]
        public string Phone_number { get; set; }
        [Required]
        public string Email { get; set; }

        //[ForeignKey("Customer_ID")]
        //public ICollection<CustomerAdress> CustomerAdresses { get; set; }

    }
}
