import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from './utils/federation-utils';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'dashboard',
    loadChildren: () => loadRemoteModule({
      remoteName: 'dashboard',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: 'DashboardModule'
    }).then((m: any) => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () => loadRemoteModule({
      remoteName: 'login',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: 'LoginModule'
    }).then((m: any) => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
