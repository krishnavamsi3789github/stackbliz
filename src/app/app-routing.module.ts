import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartscreenComponent } from './cartscreen/cartscreen.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Cart', component: CartscreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
