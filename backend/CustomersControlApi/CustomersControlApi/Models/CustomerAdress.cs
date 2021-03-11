using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomersControlApi.Models
{
    public class CustomerAdress
    {
        [Key]
        public int Adress_ID { get; set; }
   
        [Required]
        public string Country { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Sector { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string building_number { get; set; }

        public int Customer_ID { get; set; }
        public Customer Customer { get; set; }


    }
}
