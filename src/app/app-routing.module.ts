import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'fashion',component:FashionComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'home-appliances',component:HomeAppliancesComponent},
  {path:'account',component:AccountComponent},
  {path:'cart',component:CartComponent},
  {path:'signin',component:SigninComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
