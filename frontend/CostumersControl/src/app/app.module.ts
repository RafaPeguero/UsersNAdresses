import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersComponentComponent } from './customers-component/customers-component.component';
import { CustomersAdressComponentComponent } from './customers-adress-component/customers-adress-component.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTES } from './app-routing.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CustomerServiceService } from './Services/customer-service.service';


export let options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponentComponent,
    CustomersAdressComponentComponent,
    LayoutComponentComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgSelectModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
