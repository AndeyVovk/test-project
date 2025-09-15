import {Routes} from '@angular/router';
import {MainComponent} from './core/main/main.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {AccountComponent} from './core/account/account.component';

export const routes: Routes = [
  {path: '', component: MainComponent,
  children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'account', component: AccountComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]}
];
