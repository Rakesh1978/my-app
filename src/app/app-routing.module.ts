import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';

const routes: Routes = [
 /* {
      path: '',
      redirectTo: '/product1',
      pathMatch: 'full'
  },*/
  { path: 'product1', component: FirstComponent },
  { path: 'product11', component: FirstComponent },
  { path: 'product2', component: SecondComponent },
  { path: 'product3', component: ThirdComponent },
  //runGuardsAndResolvers: 'always'
  //{ path: '**', redirectTo: '/product1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
