import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', loadChildren: () =>
        import('./pipeline/pipeline.module').then(m => m.PipelineModule)    // lazy loading
    },
    {path: 'contacts', loadChildren: () =>
        import('./contacts/contacts.module').then(m => m.ContactsModule)    // lazy loading
    },
    {path: '**', component: PageNotFoundComponent},
];
