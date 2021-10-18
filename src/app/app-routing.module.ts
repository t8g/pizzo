import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { PizzaCustomizationComponent } from './pizza-customization/pizza-customization.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'customization', component: PizzaCustomizationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
