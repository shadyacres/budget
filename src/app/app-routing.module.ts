import { Resolver } from './dashboard/resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsGuard } from './settings/settings.guard';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';


const routes: Routes = [
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule', resolve: {message: Resolver} },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule', resolve: {message: Resolver},
   data: { preload: true }, canLoad: [SettingsGuard], canActivate: [SettingsGuard]  },
  { path: 'records', loadChildren: './records/records.module#RecordsModule', resolve: {message: Resolver}, data: {preload: true} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategy })],
  providers: [Resolver],
  exports: [RouterModule]
})
export class AppRoutingModule { }
