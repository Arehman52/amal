import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ImaggingComponent } from './pages/imagging/imagging.component';
import { ListingComponent } from './pages/listing/listing.component';
import { Error404Component } from './MISC/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: ListingComponent},
  { path: 'imagging', component: ImaggingComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
