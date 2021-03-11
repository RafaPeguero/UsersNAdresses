import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../Services/customer-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICustomer } from '../Models/Customer.model';

@Component({
  selector: 'app-customers-component',
  templateUrl: './customers-component.component.html',
  styleUrls: ['./customers-component.component.css']
})
export class CustomersComponentComponent implements OnInit {

  public Costumers: ICustomer[] = [];
  public AddCostumerForm: FormGroup;
  public FormIsInvalid: boolean = false;
  public SelectedCostumerId: number;
  constructor(public _CostumerService: CustomerServiceService,
    private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.CreateFormAddCostumer();
    this.getCostumers();
  }


  CreateFormAddCostumer() {
    this.AddCostumerForm = this.formBuilder.group({
      Customer_ID: [0],
      Name: [null, Validators.required],
      Last_Name: [null, Validators.required],
      Phone_number:[null, Validators.required],
      Email: [null, Validators.required]
    });
  }

  getCostumers() {
    this._CostumerService.getCustomers().subscribe( (res: ICustomer[]) => {
      this.Costumers = res as ICustomer[];
    })
  }

  GetCostumer(id: number) {
    this._CostumerService.getCustomer(id).subscribe((res: ICustomer) => {
     this.AddCostumerForm.patchValue({
      Customer_ID: res.customer_ID,
      Name: res.name, 
      Last_Name: res.last_Name,
      Phone_number: res.phone_number,
      Email: res.email
     })
    })
  }



  Submit() {
    if(this.AddCostumerForm.invalid){
      this.FormIsInvalid = true;
      return
    } else {
      this.FormIsInvalid = false;
    }
    let Value = this.AddCostumerForm.value;
    let params: ICustomer = {
      customer_ID: Value.Customer_ID,
      name: Value.Name,
      last_Name: Value.Last_Name,
      phone_number: Value.Phone_number,
      email: Value.Email
    }

    this.AddCostumerForm.value.Customer_ID > 0? this.EditCostumer(Value.id,params): this.AddCostumer(params);

  }



  AddCostumer(params: ICustomer) {
    params.customer_ID = 0;
    this._CostumerService.AddCustomer(params).subscribe(resp => {
      this.CompleteRegister();
    });
  }

  EditCostumer(id:number, params:ICustomer) {

    this._CostumerService.EditCustomer(params.customer_ID,params).subscribe(res => {
      this.CompleteRegister();
    });
  }

  DeleteCostumer() {
    this._CostumerService.DeleteCustomer(this.SelectedCostumerId).subscribe( res => {
     this.getCostumers();
    })
  }


  CompleteRegister() {
    this.getCostumers();
    this.resetForm();

  }


  resetForm() {
    this.AddCostumerForm.reset();
    this.FormIsInvalid = false;
  }

}
