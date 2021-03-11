import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../Services/customer-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICustomerAdress } from '../Models/CustomerAdress.mode';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from '../Models/Customer.model';

@Component({
  selector: 'app-customers-adress-component',
  templateUrl: './customers-adress-component.component.html',
  styleUrls: ['./customers-adress-component.component.css']
})
export class CustomersAdressComponentComponent implements OnInit {
  public CostumersAdresses: ICustomerAdress[] = [];
  public AddAdressForm: FormGroup;
  public FormIsInvalid: boolean = false;
  public SelectedAdressId: number;
  public CustomerId: number;
  public CustomerFullName: string;

  constructor(public _CostumersAdresseservice: CustomerServiceService,
    private readonly formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.CustomerId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getCustomerName(this.CustomerId);
    this.CreateFormAddCostumer();
    this.getCostumersAdresses(this.CustomerId);
  }

  CreateFormAddCostumer() {
    this.AddAdressForm = this.formBuilder.group({
      Adress_ID: [0],
      Country: [null, Validators.required],
      City: [null, Validators.required],
      Sector:[null, Validators.required],
      Street: [null, Validators.required],
      building_number: [null, Validators.required],
      Customer_ID : [0, Validators.required]

    });
  }

  getCostumersAdresses(Customer_Id: number) {
    this._CostumersAdresseservice.getCustomersAdresses(Customer_Id).subscribe( (res: ICustomerAdress[]) => {
      this.CostumersAdresses = res as ICustomerAdress[];
      console.log(res);
    })
  }

  GetAdress(id: number) {
    this._CostumersAdresseservice.GetCustomerAdress(id).subscribe((res: ICustomerAdress) => {
     this.AddAdressForm.patchValue({
      Adress_ID: res.adress_ID,
      Country: res.country, 
      City: res.city,
      Sector: res.sector,
      Street: res.street,
      building_number: res.building_number,
      Customer_ID : res.customer_ID
     });
    })
  }

  getCustomerName(Customer_id: number)
  {
    this._CostumersAdresseservice.getCustomer(Customer_id).subscribe((resp: ICustomer) => {
      this.CustomerFullName = resp.name + ' ' +resp.last_Name;
    })
  }

  Submit() {
    debugger;
    if(this.AddAdressForm.invalid){
      this.FormIsInvalid = true;
      return
    } else {
      this.FormIsInvalid = false;
    }
    let Value = this.AddAdressForm.value;
    let params: ICustomerAdress = {
      adress_ID: Value.Adress_ID,
      country: Value.Country, 
      city: Value.City,
      sector: Value.Sector,
      street: Value.Street,
      building_number: Value.building_number,
      customer_ID : this.CustomerId
    }

    this.AddAdressForm.value.Adress_ID > 0? this.EditCostumer(Value.id,params): this.AddCostumer(params);

  }

  AddCostumer(params: ICustomerAdress) {
    params.adress_ID = 0;
    this._CostumersAdresseservice.AddCustomerAdress(params).subscribe(resp => {
      this.CompleteRegister();
    });
  }

  EditCostumer(id:number, params:ICustomerAdress) {

    this._CostumersAdresseservice.EditCustomerAdress(params.adress_ID,params).subscribe(res => {
      this.CompleteRegister();
    });
  }

  DeleteCostumerAdress() {
    this._CostumersAdresseservice.DeleteCustomerAdress(this.SelectedAdressId).subscribe( res => {
     this.getCostumersAdresses(this.CustomerId);
    })
  }


  CompleteRegister() {
    this.getCostumersAdresses(this.CustomerId);
    this.resetForm();

  }


  resetForm() {
    this.AddAdressForm.reset();
    this.FormIsInvalid = false;
  }


}
