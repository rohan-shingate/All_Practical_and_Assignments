import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
,{ path: 'menu', component: MenuComponent }
,{ path: 'dashboard', component: DashboardComponent }
,{ path: 'detail/:id', component: ItemDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
