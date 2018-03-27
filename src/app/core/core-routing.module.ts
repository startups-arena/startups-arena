import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth/auth.guard';

import { CoreComponent } from './components/core/core.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { HomeComponent } from './home/home.component';

const coreRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CoreRoutingModule {
}
