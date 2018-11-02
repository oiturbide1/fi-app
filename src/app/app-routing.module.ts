import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { StockListComponent }   from './stock-list/stock-list.component';
import { HomeComponent }     from './home/home.component';

const appRoutes: Routes = [
  { path: 'stocks',
    component: StockListComponent,
    data: { title: 'Stocks'}
  },
  { path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
