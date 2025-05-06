import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () =>
        import('./pipeline/pipeline.module').then(m => m.PipelineModule)    // lazy loading
    },
    {path: 'contacts', loadChildren: () =>
        import('./contacts/contacts.module').then(m => m.ContactsModule)    // lazy loading
    },
];
