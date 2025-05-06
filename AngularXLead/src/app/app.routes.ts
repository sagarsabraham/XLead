import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'contacts', loadChildren: () => import('./contacts/contacts-routing.module').then(m => m.ContactRoutingModule) },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];