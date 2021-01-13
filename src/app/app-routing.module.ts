import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./routes/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: '',
    redirectTo: 'en/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'en/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
