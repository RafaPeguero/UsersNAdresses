import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersAdressComponentComponent } from './customers-adress-component/customers-adress-component.component';
import { CustomersComponentComponent } from './customers-component/customers-component.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';


const routes: Routes = [
{
  path:"",
  component: LayoutComponentComponent,
  children:[ 
  {
    path: "",
    redirectTo: "Costumers",
    pathMatch: "full"
  },  
    { path: "Costumers", component: CustomersComponentComponent},  
    { path: "Costumer/:id", component: CustomersAdressComponentComponent},
  ]
},

  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
]

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });

